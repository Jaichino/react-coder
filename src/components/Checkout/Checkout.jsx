import styles from "./checkout.module.css";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { PageLayout } from "../PageLayout/PageLayout";
import { Button } from "../../shared/components/Button/Button";
import { db } from "../../services/firebase";
import { 
    collection, 
    addDoc, 
    doc, 
    getDoc, 
    writeBatch 
} from "firebase/firestore";
import Swal from "sweetalert2";

export function Checkout() {

    // --- Se llama a contexto --- //
    const { cart, handleClearCart } = useContext(CartContext);

    // --- Navegación para incluir en MessageBox --- //
    const navigate = useNavigate();

    // --- Estado del formulario --- //
    const [formData, setFormData] = useState({
        name: "",
        lastName: "",
        address: "",
        email: ""
    });

    // --- Manejo de errores en formulario --- //
    const [errors, setErrors] = useState({});

    // --- Loading --- //
    const [isLoading, setIsLoading] = useState(false);


    // ---------------- //
    // --- Helpers --- //
    // ---------------- //

    // --- Guardar ingreso de usuario en formulario --- //
    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    // --- Validación de formulario --- //
    function validateForm() {
        
        let newErrors = {};

        if (!formData.name.trim()) newErrors.name = "Nombre requerido";
        if (!formData.lastName.trim()) newErrors.lastName = "Apellido requerido";
        if (!formData.address.trim()) newErrors.address = "Dirección requerida";
        if (!formData.email.trim()) newErrors.email = "Email requerido";

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    }

    // ---------------- //
    // --- Handlers --- //
    // ---------------- //
    
    // --- Creación de orden --- // 
    async function handleSubmit(e) {
        
        e.preventDefault();

        setIsLoading(true);

        if (!validateForm()) {
            setIsLoading(false);
            return;
        } 

        try {

            // --- Se crea batch para agrupar operaciones en Firestore ---
            const batch = writeBatch(db);

            // --- Lista para agregar si algun producto está sin stock ---
            const outOfStock = [];

            for (const prod of cart) {
                // --- Se obtiene la información de cada producto del carrito ---
                const productRef = doc(db, 'productos', prod.id);
                const product =  await getDoc(productRef);
                const productData = product.data();

                // --- Si hay stock, se actualiza ---
                if (productData.stock >= prod.quantity) {
                    batch.update(productRef, {
                        stock: productData.stock - prod.quantity
                    });
                }
                else {
                    // --- No hay stock ---
                    outOfStock.push({
                        id: prod.id,
                        name: productData.name
                    });
                }
            }

            if (outOfStock.length > 0){
                Swal.fire({
                    title: "Stock Insuficiente",
                    text: "Algunos productos no tienen stock disponible",
                    icon: "warning",
                    timer: 2000
                });

                setIsLoading(false);
                return;
            }

            // --- Creación de orden ---
            const order = {
                buyer: formData,
                items: cart,
                date: new Date()
            };

            const ordersRef = collection(db, "orders");
            const docRef = await addDoc(ordersRef, order);

            // --- Se ejecuta actualización ---
            await batch.commit();

            // --- Se muestra mensaje de exito ---
            Swal.fire({
                title: "Compra realizada exitosamente!",
                text: `Su número de orden es: ${docRef.id}`,
                icon: "success",
                showConfirmButton: true
            }).then((res) => {
                if (res.isConfirmed) {
                    navigate("/");
                }
            });

            handleClearCart();

        } catch (error) {
            console.error(error);

            Swal.fire({
                title: "Error",
                text: "No se pudo procesar la compra",
                icon: "error"
            });
        }
        
        finally {
            setIsLoading(false);
        }
    }

    // -------------- //
    // --- Render --- //
    // -------------- //

    return (
        <PageLayout>

            <div className={styles.checkoutContainer}>
                <h1 className={styles.title}>Datos de la compra</h1>

                <h2 className={styles.info}>Ya casi! Completa tus datos para finalizar la compra</h2>

                <form className={styles.form} onSubmit={handleSubmit}>

                    <div className={styles.inputGroup}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Nombre"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {errors.name && <span>{errors.name}</span>}
                    </div>

                    <div className={styles.inputGroup}>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Apellido"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                        {errors.lastName && <span>{errors.lastName}</span>}
                    </div>

                    <div className={styles.inputGroup}>
                        <input
                            type="text"
                            name="address"
                            placeholder="Dirección"
                            value={formData.address}
                            onChange={handleChange}
                        />
                        {errors.address && <span>{errors.address}</span>}
                    </div>

                    <div className={styles.inputGroup}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <span>{errors.email}</span>}
                    </div>

                    <Button
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading ? "Creando orden..." : "Confirmar compra"}
                    </Button>

                </form>
            </div>
        </PageLayout>
    );
}
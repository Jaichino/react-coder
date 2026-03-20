import styles from "./cart.module.css";

import { PageLayout } from "../PageLayout/PageLayout";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Loader } from "../Loader/Loader";
import { Button } from "../../shared/components/Button/Button";
import { db } from "../../services/firebase";
import { doc, getDoc } from "firebase/firestore";
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";

export function Cart() {

    // --- Estado del Loader --- //
    const [isLoading, setIsLoading] = useState(false);
    
    // --- Detalle de productos guardados en carrito --- //
    const [productDetails, setProductDetails] = useState([]);

    // --- Se llama Contexto --- //
    const { cart, handleClearCart, handleRemoveFromCart } = useContext(CartContext);


    // --- useEffect para traer el detalle de los productos en carrito --- //
    useEffect(()=>{

        setProductDetails([]);
        setIsLoading(true);
        
        if (cart.length === 0) {
            setIsLoading(false);
            return;
        }

        cart.forEach((prod) => {
            const productoRef = doc(db, 'productos', prod.id);
            getDoc(productoRef)
                .then((res) => {
                    const productData = res.data();
                    const productId = res.id;
                    setProductDetails(prevDetails => [...prevDetails, {id: productId, ...productData, quantity: prod.quantity}])
                })
                .catch((error) => console.error("Error cargando detalle de producto: ", error))
                .finally(() => setIsLoading(false));
        });
    }, [cart]);


    // ---------------- //
    // --- Handlers --- //
    // ---------------- //

    // --- Eliminar todo el carrito --- //
    function handleClearAllCart() {
        
        // --- MessageBox para consultar si eliminar ---
        Swal.fire({
            title: "Borrar Carrito",
            text: "¿Desea borrar el carrito? Perderás tus productos",
            icon: "question",
            showCancelButton: true,
            cancelButtonText: 'No',
            confirmButtonText: 'Si'
        }).then((res) => {

            if (res.isConfirmed){

                handleClearCart();

                // --- MessageBox para confirmación ---
                Swal.fire({
                    title: "Éxito",
                    text: "Se limpió el carrito de compras",
                    icon: "success",
                    timer: 1500,
                    showConfirmButton: false
                });
            }
        });
    }

    // ---------------- //
    // --- Handlers --- //
    // ---------------- //

    // --- Obtener el precio total de los productos --- //
    // Nota: Lo hice acá y no en el contexto por como implementé la carga de productos en carrito
    // {id, quantity}

    const total = productDetails.reduce((acc, prod) => {
        return acc + (prod.price * prod.quantity);
    }, 0);


    // -------------- //
    // --- Render --- //
    // -------------- //

    return(
        
        <PageLayout>
            
            <h1 className={styles.title}>Tu carrito</h1>
            
            {isLoading
                ? <div className={styles.loaderWrapper}><Loader /></div>
                : productDetails.length === 0
                    ? <p className={styles.empty}>El carrito está vacío</p>
                    : (
                        <>
                            <div className={styles.cartContainer}>
                                {productDetails.map(prod => (
                                    <div key={prod.id} className={styles.cartItem}>
                                        
                                        <img 
                                            src={prod.img} 
                                            alt={prod.name} 
                                            className={styles.image}
                                        />

                                        <div className={styles.info}>
                                            <h2>{prod.name}</h2>
                                            <p className={styles.price}>${prod.price}</p>
                                            <p className={styles.quantity}>
                                                Cantidad: {prod.quantity}
                                            </p>
                                        </div>

                                        <div className={styles.actions}>
                                            <button 
                                                className={styles.deleteBtn}
                                                onClick={() => handleRemoveFromCart(prod.id)}
                                            >
                                                Eliminar
                                            </button>
                                        </div>

                                    </div>
                                ))}
                            </div>

                            <div className={styles.cartFooter}>
                                <h2>Total: ${total}</h2>

                                <div className={styles.footerButtons}>
                                    <Button 
                                        color={'red'}
                                        onClick={handleClearAllCart}
                                    >
                                        Vaciar carrito
                                    </Button>

                                    <Link to={"/checkout"}>
                                        <Button>
                                            Finalizar compra
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </>
                    )
            }
    </PageLayout>
);
}

import styles from "./itemDetail.module.css";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../shared/components/Button/Button";
import { ItemCount } from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import Swal from 'sweetalert2'

export function ItemDetail({detail}) {

    // --- Se guarda la cantidad de items seleccionados en ItemCount --- //
    const [itemsQuantity, setItemsQuantity] = useState(0);

    // --- Estado para ocultar ItemCount --- //
    const [isAdded, setIsAdded] = useState(false); 

    // --- Se llama Contexto --- //
    const { cart, handleAddToCart } = useContext(CartContext);

    // ---------------- //
    // --- Handlers --- //
    // ---------------- //

    // --- Handler para agregar producto al carrito --- //
    function handleAddProduct() {
        // --- Se muestra mensaje ---
        Swal.fire({
            title: "Productos",
            text: "Producto agregado al carrito",
            icon:"success",
            timer:2000,
            showConfirmButton: false
        });

        // --- Se agrega producto al carrito ---
        handleAddToCart(detail, itemsQuantity);

        // --- Se setea isAdded para ocultar ItemCount ---
        setIsAdded(true);
    }

    return(
        <>  
            {/* Contenedor de imagen */}
            <div className={styles.imageContainer}>
                <img src={detail.img} alt={detail.name} />
            </div>

            {/* Contenedor de información de producto */}
            <div className={styles.infoContainer}>
                
                <Link className={styles.btnBack} to={"/"}>Volver al listado</Link>

                <h1 className={styles.title}>{detail.name}</h1>

                <p className={styles.productDescription}>{detail.description}</p>

                <p className={styles.productPrice}>$ {detail.price}</p>

                {/* Si el producto está sin stock, no se renderiza detalle */}
                {detail.stock > 0 && 
                    <p className={styles.productStock}>
                        Stock: {detail.stock} {detail.stock === 1 ? 'Unidad' : 'Unidades'}
                    </p>
                }

                {/* Si el producto está sin stock, no se renderiza ItemCount y se muestra mensaje */}
                {detail.stock === 0
                ?   <span className={styles.lastUnits}>
                        ¡Sin Stock!
                    </span>
                
                :   <>
                        {detail.stock < 5 && 
                            <span className={styles.lastUnits}>
                                ¡Ultimas Unidades! Aprovecha y comprá ahora.
                            </span>
                        }

                        {isAdded 
                            ? 
                                <Link to="/cart">
                                    <Button>Ir al carrito</Button>
                                </Link>
                            :
                                <div className={styles.buttonContainer}>
                                    <ItemCount
                                        productStock={detail.stock}
                                        onAdd={(qty) => setItemsQuantity(qty)}
                                    />
                                    <Button
                                        disabled={itemsQuantity === 0}
                                        onClick={handleAddProduct}
                                    >
                                        Agregar al carrito
                                    </Button>
                                </div>
                        }
                    </>
                }
            </div>
        </>
    );
}
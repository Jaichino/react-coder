import styles from "./cartWidget.module.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartIcon } from "../../shared/components/Icons";
import { CartContext } from "../../context/CartContext";


export function CartWidget() {

    const { cart } = useContext(CartContext);

    return (
        <div className={styles.cartWrapper}>
            <Link to={"/cart"}>
                <CartIcon 
                    color="rgb(5, 91, 5)"
                    height="30px"
                    width="30px"
                />

                {/* Indicador de cantidad de productos en carrito */}
                {cart.length > 0 &&
                    <span className={styles.cartQuantity}>{cart.length}</span>
                }
            </Link>
        </div>
    );
}
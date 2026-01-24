import styles from "./cartWidget.module.css";
import { CartIcon } from "../../shared/Icons";

export function CartWidget() {
    return (
        <div className={styles.cartWrapper}>
            
            {/* Icono de carrito */}
            <CartIcon 
                color="rgb(5, 91, 5)"
                height="30px"
                width="30px"
            />

            {/* Indicador de cantidad de productos en carrito */}
            <span className={styles.cartQuantity}>2</span>

        </div>
    );
}
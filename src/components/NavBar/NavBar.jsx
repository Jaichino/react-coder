import styles from "./navBar.module.css";
import { CartWidget } from "../CartWidget/CartWidget";

export function NavBar() {
    return (
        <nav className={styles.navContainer}>
            
            <div>
                {/* Logo del e-commerce */}
                <img className={styles.navImage} src="../public/logo.ico" alt="" />
            </div>

            <div className={styles.linksContainer}>

                {/* Links en NavBar */}
                <a className={styles.navLink} href="">Paletas</a>
                <a className={styles.navLink} href="">Accesorios</a>
                <a className={styles.navLink} href="">Indumentaria</a>

                {/* Componente de Carrito dentro de NavBar */}
                <CartWidget/>
            </div>

        </nav>
    );
}

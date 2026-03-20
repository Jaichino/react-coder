import styles from "./navBar.module.css";
import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import logo from "../../assets/logo.ico";


export function NavBar() {
    
    // -------------- //
    // --- Render --- //
    // -------------- //
    
    return (
        <header>
            <nav className={styles.navContainer}>

                <Link to={"/"}>
                    {/* Logo del e-commerce */}
                    <img className={styles.navImage} src={logo} alt="Logo de la tienda" />
                </Link>

                <div className={styles.linksContainer}>

                    {/* Links en NavBar */}
                    <Link className={styles.navLink} to={"/category/Paddles"}>Paletas</Link>
                    <Link className={styles.navLink} to={"/category/Accesories"}>Accesorios</Link>
                    <Link className={styles.navLink} to={"/category/Bags"} >Bolsos</Link>

                    {/* Componente de Carrito dentro de NavBar */}
                    <CartWidget />

                </div>
        
            </nav>
        </header>
    );
}

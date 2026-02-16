import styles from "./errorPage.module.css";
import { ErrorNotFoundIcon } from "../../shared/components/Icons";
import { Link } from "react-router-dom";

export function ErrorPage() {
    return(
        <div className={styles.mainContainer}>
            <div className={styles.errorContainer}>
                <ErrorNotFoundIcon color="#055b05" />
                <div className={styles.buttonContainer}>
                    <Link className={styles.linkButton} to={"/"}>Ir al inicio</Link>
                </div>
            </div>
        </div>
        
    );
}
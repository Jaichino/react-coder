import styles from "./item.module.css";
import buttonStyle from "../../shared/components/Button/button.module.css";
import { Link } from "react-router-dom";

export function Item({product, promo}) {

    return (
        <div className={styles.itemContainer}>

            <div className={styles.imageContainer}>
                <img src={product.img} alt={product.name} />
            </div>

            <div className={styles.infoContainer}>
                <h2>{product.name}</h2>
                <p>$ {product.price}</p>
                {promo && (
                    <small className={styles.promo}>
                        Mismo precio en 6 cuotas de $ {(product.price / 6).toFixed(2)}
                    </small>
                )}
            </div>

            <div className={styles.buttonContainer}>
                <Link className={buttonStyle.btn} to={`/itemDetail/${product.id}`}>Ver más</Link>
            </div>

        </div>
    );
}
import styles from "./itemDetail.module.css";
import { Button } from "../../shared/components/Button/Button";
import { Link } from "react-router-dom";

export function ItemDetail({detail}) {

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

                <p className={styles.productStock}>
                    Stock: {detail.stock} {detail.stock === 1 ? 'Unidad' : 'Unidades'}
                </p>

                {detail.stock < 5 && 
                    <span className={styles.lastUnits}>
                        ¡Ultimas Unidades! Aprovecha y comprá ahora.
                    </span>}
        
                {/* Aca luego se renderiza el contador ItemCount */}

                <div className={styles.buttonContainer}>
                    <Button>
                        Agregar al carrito
                    </Button>
                </div>

            </div>
        </>
    );
}
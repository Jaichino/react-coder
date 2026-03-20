import styles from "./itemCount.module.css";
import { Button } from "../../shared/components/Button/Button";
import { useState } from "react";

export function ItemCount({productStock, onAdd}) {

    const [itemCount, setItemCount] = useState(0);

    const sumarUnidad = () => {
        if (productStock > itemCount) {
            const newValue = itemCount + 1;
            setItemCount(newValue);
            onAdd && onAdd(newValue);
        }
    };

    const restarUnidad = () => {
        if (itemCount > 0) {
            const newValue = itemCount - 1;
            setItemCount(newValue);
            onAdd && onAdd(newValue);
        }
    };


    // -------------- //
    // --- Render --- //
    // -------------- //

    return (
        <div className={styles.itemCountContainer}>
            {/* Botón para sumar producto */}
            <Button
                color={'lightgreen'}
                onClick={sumarUnidad}
            >
                +
            </Button>

            {/* Display de unidades de producto*/}
            <span className={styles.itemCountDisplay}>{itemCount}</span>

            {/* Botón para restar producto */}
            <Button
                color={'red'}
                onClick={restarUnidad}
            >
                -
            </Button>
        </div>
    );

}   
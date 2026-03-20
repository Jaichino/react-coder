import styles from "./itemDetailContainer.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { PageLayout } from "../PageLayout/PageLayout";
import { Loader } from "../Loader/Loader";
import { db } from "../../services/firebase";
import { doc, getDoc } from "firebase/firestore";


export function ItemDetailContainer(){

    // --- Detalle de producto --- //
    const [detail, setDetail] = useState({});

    // --- Estado Loader --- //
    const [isLoading, setIsLoading] = useState(false);

    // --- Se obtiene itemId de URL --- //
    const { itemId } = useParams();

    // --- useEffect para obtener detalle de producto en Firebase --- //
    useEffect(() => {

        setIsLoading(true);

        // --- Referencia al producto ---
        const productoRef = doc(db, 'productos', itemId);

        // --- Obtener data del producto referenciado ---
        getDoc(productoRef)
            .then((res) => {
                const productData = res.data();
                const productId = res.id;
                // --- Se setea detalle de producto ---
                setDetail({id: productId, ...productData});
            })
            .catch((error) => console.error(error))
            .finally(() => setIsLoading(false));

    }, [itemId]);
    
    // -------------- //
    // --- Render --- //
    // -------------- //
    
    return(

        <PageLayout>

            {isLoading
                ? <div className={styles.loaderWrapper}><Loader/></div>
                : <div className={styles.detailContainer}>
                    {<ItemDetail detail={detail} />}
                </div>
            }

        </PageLayout>
    );
}
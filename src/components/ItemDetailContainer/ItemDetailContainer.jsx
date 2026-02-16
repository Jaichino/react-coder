import styles from "./itemDetailContainer.module.css";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { getOneProduct } from "../../mock/asyncData";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PageLayout } from "../PageLayout/PageLayout";
import { Loader } from "../Loader/Loader";

export function ItemDetailContainer(){

    // --- Variable de estado para guardar el detalle correspondiente
    const [detail, setDetail] = useState({});

    // --- Variable de estado para loader
    const [isLoading, setIsLoading] = useState(false);

    // --- Obtengo parametro itemId de la url
    const { itemId } = useParams();

    // --- useEffect para obtener detalle de producto
    useEffect(() => {

        setIsLoading(true);

        getOneProduct(false, 2000, itemId)

            .then((res) => setDetail(res))
            .catch((error) => console.error(error))
            .finally(() => setIsLoading(false));

    }, [itemId]);
    
    return(

        <PageLayout>

            {isLoading
            
                ? <Loader />
                : <div className={styles.detailContainer}>
                    {detail.id && <ItemDetail detail={detail} />}
                </div>
            }

        </PageLayout>
    );
}
import styles from "./itemListContainer.module.css";
import { useState, useEffect } from "react";
import { getProducts } from "../../mock/asyncData";
import { PageLayout } from "../PageLayout/PageLayout";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { Loader } from "../Loader/Loader";

export function ItemListContainer({title}) {

    // --- Obtención de parametro categoryName 
    const { categoryName } = useParams();

    // --- Se sobreescribe title si existe categoria
    categoryName ? title = categoryName : title;

    // --- Variable de estado para loader
    const [isLoading, setIsLoading] = useState(false);

    // --- Variable de estado para guardar productos
    const [products, setProducts] = useState([]);

    // --- UseEffect para llamada asincrona de productos 
    useEffect(() => {

        setIsLoading(true);

        getProducts()
            .then((res) => {

                if (categoryName) {
                    setProducts(
                        res.filter((prod) => prod.category === categoryName)
                    );
                } else {
                    setProducts(res);
                }
            })
            .catch((error) => console.error(error))
            .finally(() => setIsLoading(false))

    }, [categoryName]);

    return(
        
            <PageLayout>

                <div className={styles.infoPage}>
                    <h1 className={styles.title}>{title}</h1>
                </div>
            
                <div className={styles.cardsContainer}>
                    {isLoading
                        ? <Loader/>
                        : <ItemList items={products}/>
                    }
                </div>
                
            </PageLayout>
    );
}
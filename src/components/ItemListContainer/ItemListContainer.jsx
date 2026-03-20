import styles from "./itemListContainer.module.css";
import { useState, useEffect } from "react";
import { PageLayout } from "../PageLayout/PageLayout";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { Loader } from "../Loader/Loader"
import { db } from "../../services/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";


export function ItemListContainer({title}) {

    // --- Obtención de parametro categoryName --- // 
    const { categoryName } = useParams();

    // --- Se setea titulo de categoría --- //
    categoryName === "Paddles" 
        ? title = "Paletas" 
        : categoryName === "Accesories" 
        ? title = "Accesorios"
        : categoryName === "Bags" 
        ? title = "Bolsos" 
        : title;

    // --- Variable de estado para loader --- //
    const [isLoading, setIsLoading] = useState(false);

    // --- Variable de estado para guardar productos --- //
    const [products, setProducts] = useState([]);

    // --- UseEffect para llamada asincrona de productos en Firebase --- //
    useEffect(() => {

        setIsLoading(true);
        
        // --- Colección de Firebase ---
        const prodCollection = categoryName 
            ? query(collection(db, 'productos'), where('category', '==', categoryName))
            : collection(db, 'productos');

        // --- Se setea products iterando sobre la colección ---
        getDocs(prodCollection)
        .then((res) => {
            const list = res.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            });

            setProducts(list)
        })
        .catch((error) => console.error(error))
        .finally(() => setIsLoading(false))

    }, [categoryName]);

    // -------------- //
    // --- Render --- //
    // -------------- //

    return (
        <PageLayout>
            <div className={styles.infoPage}>
                <h1 className={styles.title}>{title}</h1>
            </div>
            {isLoading
                ? <div className={styles.loaderWrapper}><Loader/></div>
                :
                    <div className={styles.cardsContainer}>
                        <ItemList items={products}/>
                    </div>
            }
        </PageLayout>
    );
}
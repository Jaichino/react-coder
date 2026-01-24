import styles from "./itemListContainer.module.css";

export function ItemListContainer(props) {
    return(
        <main className={styles.itemsContainer}>
            <div className={styles.propContainer}>
                
                {/* Se permite pasar string como prop */}
                <h1 className={styles.title}>{props.title}</h1>
                
            </div>
        </main>
    );
}
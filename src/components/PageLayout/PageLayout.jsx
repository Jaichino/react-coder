import styles from "./pageLayout.module.css";

export function PageLayout({ children }) {
    return (
        <main className={styles.mainContainer}>
            {children}
        </main>
    );
}

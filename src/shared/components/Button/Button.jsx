import styles from "./button.module.css";

export function Button({
    children,
    onClick,
    className = styles.btn,
}) { 

    return (
        <button
            className={className}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
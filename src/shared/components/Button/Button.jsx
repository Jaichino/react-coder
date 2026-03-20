import styles from "./button.module.css";

export function Button({
    children,
    onClick,
    className = "",
    color,
    disabled
}) { 

    return (
        <button
            disabled={disabled}
            className={`
                ${styles.btn}
                ${color ? styles[color] : ""}
                ${className}
            `}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
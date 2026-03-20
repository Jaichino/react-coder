import { createContext, useEffect, useState } from "react";

// --- Se crea contexto de carrito de compras --- //
export const CartContext = createContext();

// --- Se busca en LocalStorage para ver si hay algun carrito guardado --- //
const LSCart = JSON.parse(localStorage.getItem('cart')) || [];

// --- Custom Provider --- //
export function CartProvider({children}) {

    // --- Variable para guardar productos agregados al carrito --- //
    const [cart, setCart] = useState(LSCart);

    // --- useEffect para actualizar carrito en LocalStorage cuando cambia la variable cart --- //
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    },[cart]);

    // ---------------- //
    // --- Handlers --- //
    // ---------------- //

    // --- Agregar productos al carrito --- //
    function handleAddToCart(item, quantity) {
        // --- Si el producto ya esta en carrito, se suma quantity ---
        if (isInCart(item.id)){
            const newCart = cart.map((prod) => {
                if (prod.id === item.id) {
                    // --- Se modifica el campo quantity del producto ---
                    return {...prod, quantity: prod.quantity + quantity}
                }
                else {
                    return prod;
                }
            })
            // --- Se actualiza carrito con el nuevo array ---
            setCart(newCart);
        }
        // --- Si el producto no esta en carrito, se agrega al array cart ---
        else {
            setCart([...cart, {id: item.id, quantity: quantity}]);
        }
    }

    // --- Quitar productos del carrito --- //
    function handleRemoveFromCart(itemId) {
        const newCart = cart.filter(prod => prod.id !== itemId);
        setCart(newCart);
    }

    // --- Limpiar carrito --- //
    function handleClearCart() {
        setCart([]);
    }

    // --------------- //
    // --- Helpers --- //
    // --------------- //

    // --- Verificación si producto ya está en carrito --- //
    function isInCart(itemId) {
        return cart.some((prod) => prod.id === itemId);
    }

    // --- Se retorna el Custom Provider --- //
    return (
        <CartContext.Provider 
            value={{
                cart, 
                handleAddToCart, 
                handleRemoveFromCart,
                handleClearCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
}
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { NavBar } from "./components/NavBar/NavBar"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"
import { ErrorPage } from "./components/ErrorPage/ErrorPage"
import { CartProvider } from "./context/CartContext";
import { Cart } from "./components/Cart/Cart";
import { Checkout } from "./components/CheckOut/CheckOut"

function App() {

    return (

        <BrowserRouter>
            <CartProvider>
                <NavBar />
                <Routes>
                    <Route path="/" element={<ItemListContainer title={"Todos los productos"}/>} />
                    <Route path="/category/:categoryName" element={<ItemListContainer />} />
                    <Route path="/itemDetail/:itemId" element={<ItemDetailContainer/>} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout/>} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </CartProvider>
        </BrowserRouter>

    );
}

export default App

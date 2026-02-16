import { BrowserRouter, Routes, Route } from "react-router-dom"
import { NavBar } from "./components/NavBar/NavBar"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"
import { ErrorPage } from "./components/ErrorPage/ErrorPage"

function App() {

    return (

        <BrowserRouter>

            <NavBar />

                <Routes>

                    <Route path="/" element={<ItemListContainer title={"Todos los productos"}/>} />
                    <Route path="/category/:categoryName" element={<ItemListContainer />} />
                    <Route path="/itemDetail/:itemId" element={<ItemDetailContainer/>} />
                    <Route path="*" element={<ErrorPage />} />

                </Routes>

        </BrowserRouter>

    );
}

export default App

import { NavBar } from "./components/NavBar/NavBar"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer
        title="String pasado como prop"
      />
    </>
  )
}

export default App

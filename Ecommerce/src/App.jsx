import { useState } from "react"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

function App() {
    const [cartCount, setCartCount] = useState(5)

    const handleCount = () => {
      setCartCount ( x => x+1 )
    }
    return (
    <>
      <NavBar cartCount={cartCount} title="Tienda de componentes de PC" />
      <button className="btn btn-success d-flex m-auto mt-5" onClick={handleCount}>Sumar carrito</button>
      <ItemListContainer greetings="Bienvenido a la Guarida del HardWare" />
    </>
  )
}

export default App

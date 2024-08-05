import { useState } from "react"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
function App() {
    const [cartCount, setCartCount] = useState(0)

    const handleCount = () => {
      setCartCount ( x => x+1 )
    }
    return (
    <BrowserRouter>
      <NavBar cartCount={cartCount} title="Tienda de componentes de PC" />
      <button className="btn btn-success d-flex m-auto mt-5" onClick={handleCount}>Sumar carrito</button>
      <Routes>
        <Route path="/" element={<ItemListContainer greetings="Bienvenido a la Guarida del HardWare."/>} />
        <Route path="/category/:category" element={<ItemListContainer />} />
        <Route path="/detail/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

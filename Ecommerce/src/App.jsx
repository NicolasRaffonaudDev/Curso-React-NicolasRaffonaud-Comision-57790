import { useState } from "react"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
function App() {
    const [cartCount, setCartCount] = useState(5)

    const handleCount = () => {
      setCartCount ( x => x+1 )
    }
    return (
    <BrowserRouter>
      <NavBar cartCount={cartCount} title="Tienda de componentes de PC" />
      <button className="btn btn-success d-flex m-auto mt-5" onClick={handleCount}>Sumar carrito</button>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
          
          <ItemListContainer greetings="Bienvenido a la Guarida del HardWare" />
          <ItemListContainer />
          <ItemDetailContainer />
      </Routes>
    </BrowserRouter>
  )
}

export default App

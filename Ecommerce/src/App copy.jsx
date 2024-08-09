import { useState } from "react"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { createContext } from "react"

export const Contexto = createContext()

function App() {
    const [cartCount, setCartCount] = useState(0)

    const handleCount = () => {
      setCartCount ( x => x+1 )
    }
    return (
    <BrowserRouter>
      <Contexto.Provider value={10}>
        <NavBar cartCount={cartCount} title="HardWare Raffonaud" />
        <button className="btn btn-success d-flex m-auto mt-5" onClick={handleCount}>Sumar carrito</button>
        <Routes>
          <Route path="/" element={<ItemListContainer greetings="Bienvenido a la Guarida del HardWare."/>} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
        </Routes>
      </Contexto.Provider>
    </BrowserRouter>
  )
}

export default App

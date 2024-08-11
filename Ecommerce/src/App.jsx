//import { useState } from "react"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { CartProvider } from "./Context/CartContext" 
//import Memorize from "./Memo/Memorize"

function App() {
    //const [cartCount, setCartCount] = useState(0)

    /* const handleCount = () => {
      setCartCount ( x => x+1 )
    } */
    return (
    <>

      <BrowserRouter>
        <CartProvider>    
          <NavBar title="HardWare Raffonaud" />          
          <Routes>
            <Route path="/" element={<ItemListContainer greetings="Bienvenido a la Guarida del HardWare."/>} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>    
{/*       <Memorize /> */}
    </>
  )
}

export default App

//import { useState } from "react"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { CartProvider } from "./Context/CartContext"
import Greetings from "./Rendering/Greetings"
import List from "./Rendering/List"
import Button from "./Rendering/Button"


const items = [
  { id: 1, name: "Item 1"  },
  { id: 2, name: "Item 2"  },
  { id: 3, name: "Item 3"  }
];

function App() {
    //const [cartCount, setCartCount] = useState(0)

    /* const handleCount = () => {
      setCartCount ( x => x+1 )
    } */
    return (
    <>

      {/* <BrowserRouter>
        <CartProvider>    
          <NavBar title="HardWare Raffonaud" />          
          <Routes>
            <Route path="/" element={<ItemListContainer greetings="Bienvenido a la Guarida del HardWare."/>} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
          </Routes>
        </CartProvider>
      </BrowserRouter> */}    

      <Greetings isLoggedIn={false}/>
      <hr />
      <List items={items}/>
      <hr />
      <Button type="primary" label="Enviar" />
      <Button type="danger"label="Cancelar" />
      <hr />
    </>
  )
}

export default App

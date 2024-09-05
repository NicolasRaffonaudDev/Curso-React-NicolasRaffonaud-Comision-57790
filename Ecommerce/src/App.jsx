import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { CartProvider } from "./Context/CartContext" 
import Cart from "./components/Cart/Cart"
import Checkout from "./components/Checkout/Checkout"
import { NotificationProvider } from "./Context/NotificationContext"


function App() {
    return (
    <>
      <BrowserRouter>
        <NotificationProvider>
          <CartProvider>    
            <NavBar title="HardWare Raffonaud" />          
            <Routes>
              <Route path="/" element={<ItemListContainer greetings="Bienvenido a la Guarida del HardWare."/>} />
              <Route path="/category/:category" element={<ItemListContainer />} />
              <Route path="/detail/:id" element={<ItemDetailContainer />} />

              <Route path="/cart" element={<Cart />}/>

              <Route path="/checkout" element={<Checkout />}/>

              <Route path="*" element={<h1>: (  404 Not found</h1>}/>
            </Routes>
          </CartProvider>
        </NotificationProvider>
      </BrowserRouter>    
    </>
  )
}

export default App

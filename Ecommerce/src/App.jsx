import { useState } from "react"
import NavBar from "./components/NavBar/NavBar/"

function App() {
    const [cartCount, setCartCount] = useState(5)

    return (
    <>
      <NavBar cartCount={cartCount}/>
    </>
  )
}

export default App

import { useCart } from "../../Hooks/useCart"
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom"

const Cart = () => {
    const {cart, getTotal, totalQuantity } = useCart();
    const total = getTotal()

    if(totalQuantity === 0){
        return <h1>No hay items en el carrito</h1>
    }
  return (
    <div className="">
        {cart.map((item) =>(
            <CartItem key={item.id} {...item}/>
        ))}
        <div className="container mt-3 text-center bg-warning d-flex-column p-5 justify-content-center">
            <h2 className="text-danger mb-4"> Total: $ {total}</h2>
            <div>
                <button className="w-25 m-1 btn btn-primary">Limpiar Carrito</button>
            </div>
            <div>
                <Link to="/checkout" className="w-25 m-1 btn btn-primary">Checkout</Link>
            </div>
        </div>
    </div>
  )
}

export default Cart
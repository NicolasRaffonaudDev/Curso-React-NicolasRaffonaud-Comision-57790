import { useCart } from "../../Hooks/useCart";
import "./CartItem.css"

const CartItem = ({id, name, quantity, price}) => {
  const { removeItem } = useCart();
  const handleRemove = (id) => {
    removeItem(id)
  }
  return (
    <article className="container p-3 mt-5 d-flex align-items-center justify-content-center bg-warning">
        <section className="card p-5 text-center fs-3">
            <h2>
                {name}
            </h2>
            <h4>
                Cantidad: {quantity}
            </h4>
            <h4>
                Precio x unidad: ${price}
            </h4>
            <h3 className="text-danger">Subtotal: $ {price * quantity}</h3>
            <button className="btn mx-auto w-50 btn-danger m-3 p-2 fs-3" onClick={()=> handleRemove(id)}>X</button>
        </section>
    </article>
  )
}

export default CartItem
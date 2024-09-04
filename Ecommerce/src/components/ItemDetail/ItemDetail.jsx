import { useCart } from "../../Hooks/useCart"
import { useNotification } from "../../Context/NotificationContext"
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"
import { Link } from "react-router-dom"



const ItemDetail = ({name, img, price, category, description, stock, id}) => {

  //const [quantity, setQuantity] = useState(0)
  const {addItem, isInCart} = useCart()
  const { } = useNotification()

  const handleAdd = (count) => {
    const productObj = {
      id, name, price, quantity: count
    }
    addItem(productObj) 
    setNotification("success", `Se agregaron ${count} de ${name}`)
    //setQuantity(cantidad)
  }

  return (
    <div className="container my-5 d-flex justify-content-center text-center">
        <div className="card p-5">
          <h1>{name}</h1>
          <img className="m-auto my-4" src={img} style={{width:300}}></img>
          <div className="card-body">
            <p className="card-text d-none">Category: {category}</p>
            <p className="card-text">{description}</p>
            <h2 className="card-text fs-1 text-danger">Precio: ${price}</h2>
            <h3 className="card-text fs-1 text-danger">Stock Disponible - {stock}</h3>
            <div>
              {
                isInCart(id) ? (    
                  <Link to='/cart'>Finalizar Compra</Link>
                ): (
                  <ItemCount stock={stock} onAdd={handleAdd} />
                )
            } 
            </div>
          </div>
        </div>
    </div>
  )
}

export default ItemDetail
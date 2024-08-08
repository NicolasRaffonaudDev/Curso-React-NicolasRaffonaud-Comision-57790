import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"
import { Link } from "react-router-dom"

const ItemDetail = ({name, img, price, category, description, stock, id}) => {

  const [quantity, setQuantity] = useState(0)

  const handleAdd = (cantidad) => {
    const objectToAdd = {
      id, name, price
    }
    console.log(objectToAdd)
    console.log('agregue al carrito', cantidad)
    setQuantity(cantidad)
  }

  return (
    <div className="container my-5 d-flex justify-content-center text-center">
        <div className="card p-5">
          <h1>{name}</h1>
          <img className="m-auto my-4" src={img} style={{width:300}}></img>
          <div className="card-body">
            <p className="card-text">Category: {category}</p>
            <p className="card-text">{description}</p>
            <h2 className="card-text fs-1 text-danger">Precio: ${price}</h2>
            <h3 className="card-text fs-1 text-danger">Stock Disponible - {stock}</h3>
            <div>
              {
                quantity === 0 ? (    
                  <ItemCount stock={stock} onAdd={handleAdd} />
                ): (
                  <Link to='/cart'>Finalizar Compra</Link>
                )
            } 
            </div>
          </div>
        </div>
    </div>
  )
}

export default ItemDetail
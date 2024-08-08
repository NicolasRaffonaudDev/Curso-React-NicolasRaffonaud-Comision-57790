import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"

const ItemDetail = ({name, img, price, category, description, stock}) => {
  return (
    <article className="tarjetaProducto p-3 fs-4">
        <h1>{name}</h1>
        <img className="m-5" src={img} style={{width:300}}></img>
        <p>Category: {category}</p>
        <p>{description}</p>
        <h2 className="fs-1 text-danger">${price}</h2>
        <ItemCount stock={stock} />
    </article>
  )
}

export default ItemDetail
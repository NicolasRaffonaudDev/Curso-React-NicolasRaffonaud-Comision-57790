import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"

const ItemDetail = ({name, img, price, category, description, stock}) => {
  return (
    <article className="tarjetaProducto">
        <h1>{name}</h1>
        <img src={img} style={{width:300}}></img>
        <p>Category: {category}</p>
        <p>{description}</p>
        <h2>{price}</h2>
        <ItemCount stock={stock} />
    </article>
  )
}

export default ItemDetail
import "./Item.css"

const Item = ({id, name, img, category, price}) => {
  return (
    <article className="tarjetaProducto">
        <h4>{name}</h4>
        <img src={img} style={{width: 250}} />
        <p>Category: {category}</p>
        <h3>{price}</h3>
        <a href={`/detail/${id}`} >Ver Detalle</a>
        <hr />
    </article>
  )
}

export default Item
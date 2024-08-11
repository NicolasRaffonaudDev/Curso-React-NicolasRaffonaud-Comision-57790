import { Link } from "react-router-dom";
import "./Item.css"

const Item = ({product}) => {
  return (
    <article className="tarjetaProducto">
        <div className="card p-5">
          <h4>{product.name}</h4>
          <div className="card-body">
            <img className="m-auto my-4" src={product.img} style={{width: 250}} />
            <p>Category: {product.category}</p>
            <h3>${product.price}</h3>
            <Link to={`/detail/${product.id}`} className="boton">Ver Detalle</Link>
          </div>
          <hr />
        </div>
    </article>
  )
}

export default Item
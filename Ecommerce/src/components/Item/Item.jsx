import { Link } from "react-router-dom";
import "./Item.css"

const Item = ({id, name, img, category, price}) => {
  return (
    <article className="tarjetaProducto">
        <div className="card p-5">
          <h4>{name}</h4>
          <div className="card-body">
            <img className="m-auto my-4" src={img} style={{width: 250}} />
            <p>Category: {category}</p>
            <h3>${price}</h3>
            <Link to={`/detail/${id}`} className="boton">Ver Detalle</Link>
          </div>
          <hr />
        </div>
    </article>
  )
}

export default Item
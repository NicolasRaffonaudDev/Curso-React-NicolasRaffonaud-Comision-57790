
const Item = ({id, name, img, category, price}) => {
  return (
    <article>
        <h1>{name}</h1>
        <img src={img} style={{width: 100}} />
        <p>Category: {category}</p>
        <h2>{price}</h2>
        <a href={`/detail/${id}`} >Ver Detalle</a>
        <hr />
    </article>
  )
}

export default Item
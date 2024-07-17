
const Item = ({id, name, img, category, price}) => {
  return (
    <article>
        <h1>{name}</h1>
        <img src={img} style={{width: 100}} />
        <p>Category: {category}</p>
        <h2>{price}</h2>
        <link to={`/detail/${id}`}> Ver detalle</link>
        <hr />
    </article>
  )
}

export default Item
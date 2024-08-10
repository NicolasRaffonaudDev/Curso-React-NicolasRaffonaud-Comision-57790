import { useEffect, useState } from "react"
import { getProductById } from "../../asyncMock"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState (null)
  const [loading, setLoading] = useState(true)
  const {id} = useParams()
  useEffect(()=> {
  getProductById(id)
      .then((res)=> {
        setProduct(res)
      })
      .catch((err)=> console.log(err))
      .finally(() => {
        setLoading(false)
      })
  }, [id]);

  /* if(loading){
    return <h3>Cargando Producto...</h3>
  } */
   
  return (
    <div className="ItemDetailContainer">
      {loading ? <h3>Cargando...</h3>: <ItemDetail {...product}/>}
    </div>
  )
}

export default ItemDetailContainer
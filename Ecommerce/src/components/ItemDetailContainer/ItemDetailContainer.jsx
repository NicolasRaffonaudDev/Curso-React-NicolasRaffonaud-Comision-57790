import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../services/firebase"

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState (null);
  const [loading, setLoading] = useState(true);
  const {id} = useParams();
  useEffect(()=> {
    getDoc(doc(db, "products", id))
        .then((querySnapshot)=> {
          const product = {id: querySnapshot.id, ...querySnapshot.data()}
          setProduct(product);
        })
        .catch((err)=> console.log(err))
        .finally(() => {
          setLoading(false)
        })
    }, [id]);
   
  return (
    <div className="ItemDetailContainer">
      {loading ? <h3>Cargando...</h3>: <ItemDetail {...product}/>}
    </div>
  )
}

export default ItemDetailContainer
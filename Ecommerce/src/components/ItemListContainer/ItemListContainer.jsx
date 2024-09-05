import { useEffect, useState } from "react";
//import { getProducts, getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useNotification } from "../../Context/NotificationContext";

const categorias = [
    { id: 1, nombre: "Placas Base", imagen: "/src/assets/placaMadre-logo.webp" },
    { id: 2, nombre: "Procesadores", imagen: "/src/assets/procesadores-logo.webp" },
    { id: 3, nombre: "Almacenamiento", imagen: "/src/assets/ssd-logo.webp" },
    { id: 4, nombre: "Monitores", imagen: "/src/assets/monitor-logo.webp" },
    { id: 5, nombre: "Gabinetes", imagen: "/src/assets/case-logo.png" },
    { id: 6, nombre: "Perifericos", imagen: "/src/assets/periferics-logo.png" }
]

const ItemListContainer = ({ greetings }) => {
    const [products, setProducts] = useState ([])
    const [loading, setLoading] = useState(true)
    const {category} = useParams ()
    const {categoria} = useParams()
    console.log(categoria)
    const {setNotification} = useNotification() 

    useEffect(() => {
        setLoading(true)
        const collectionRef = category
        ? query(collection(db, "products"), where("category", "==", category))
        : collection(db, "products")

        getDocs(collectionRef)
            .then((querySnapshot)=>{
                const products = querySnapshot.docs.map((doc)=>{
                    return {id: doc.id, ...doc.data()}
                })
                setProducts(products)
            })
            .catch(() => {
                setNotification("danger", `No es posible cargar los productos`)
            })
            .finally(()=>{
                setLoading(false)
            })
    }, [category] )

    if(loading) {
        return <h3 style={{color: "white", backgroundColor: "red", textAlign: "center"}}>Cargando productos...</h3>
    }

    return (
        <>
            <h2 className="text-center m-5 fs-1">{greetings}</h2>
            <ItemList products={products} />
            {categorias.map ((category) => (
                <div key={category.id} className="m-auto my-5 card p-3 text-center" style={{width: '18rem'}}>
                    <img src={category.imagen} className="card-img-top" alt={category.nombre} />
                        <div className="card-body">
                            <h5 className="card-title">{category.nombre}</h5>
                            <a href="#" className="btn btn-primary">Ver Articulos</a>
                        </div>
                    </div>
                ))}
        </>
    );
}

export default ItemListContainer
const categorias = [
    { id: 1, nombre: "Placas Base", imagen: "/src/assets/placaMadre-logo.webp" },
    { id: 2, nombre: "Procesadores", imagen: "/src/assets/procesadores-logo.webp" },
    { id: 3, nombre: "Almacenamiento", imagen: "/src/assets/ssd-logo.webp" },
    { id: 4, nombre: "Monitores", imagen: "/src/assets/monitor-logo.webp" },
    { id: 5, nombre: "Gabinetes", imagen: "/src/assets/case-logo.png" },
    { id: 6, nombre: "Perifericos", imagen: "/src/assets/periferics-logo.png" }
]

function ItemListContainer({ greetings }) {
    //console.log(categorias)
    return (
        <>
            <h2 className="text-center m-5 fs-1">{greetings}</h2>
            {categorias.map ((category) => (
                <div key={category.id} className="m-auto card p-3 text-center" style={{width: '18rem'}}>
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
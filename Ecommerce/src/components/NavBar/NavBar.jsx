import { useContext } from "react";
import CardWidget from "../CardWidget/CardWidget";
import { Link } from "react-router-dom";
import { Contexto } from "../../App"

function NavBar({cartCount, title}) {

    const valor = useContext(Contexto);
    console.log(valor)

  return (
    <nav className="navbar navbar-dark navbar-expand-md bg-dark p-3 text-white">
            <div className="container-fluid">
                <a className="navbar-brand" href="../../">{title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                         <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="../../">Inicio</a>
                        </li> 
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/Motherboard">Placas Madre</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/Procesadores">Procesadores</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/storage">Almacenamiento</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/monitor">Monitores</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/case">Gabinetes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/monitor">Perifericos</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <CardWidget cartCount={cartCount}/>
                    </form>
                </div>
            </div>
        </nav>
  )
}

export default NavBar
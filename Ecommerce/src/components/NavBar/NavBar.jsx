import CardWidget from "../CardWidget/CardWidget";
import { NavLink } from "react-router-dom";
import './NavBar.css'

function NavBar({title}) {

  return (
    <nav className="navbar navbar-dark navbar-expand-md bg-dark p-3 text-white">
            <div className="container-fluid">
                <a className="navbar-brand text-white fw-bold fs-4" href="../../">{title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink className={( {isActive} ) => (isActive ? "ActiveOption" : "Option")} to="/category/Motherboard">Placas Madre</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={( {isActive} ) => (isActive ? "ActiveOption" : "Option")} to="/category/Processor">Procesadores</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={( {isActive} ) => (isActive ? "ActiveOption" : "Option")} to="/category/storage">Almacenamiento</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={( {isActive} ) => (isActive ? "ActiveOption" : "Option")} to="/category/monitor">Monitores</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={( {isActive} ) => (isActive ? "ActiveOption" : "Option")} to="/category/case">Gabinetes</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={( {isActive} ) => (isActive ? "ActiveOption" : "Option")} to="/category/Perifiers">Perifericos</NavLink>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <CardWidget />
                    </form>
                </div>
            </div>
        </nav>
  )
}

export default NavBar
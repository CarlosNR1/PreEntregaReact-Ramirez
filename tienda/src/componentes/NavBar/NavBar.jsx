import CardWidget from "../CartWidget/CardWidget"
import "./Navbar.css"


const Navbar = () => {
    return (
        <header>
            <h1>Tienda</h1>

            <nav>
                <ul>
                    <li> Lacteos</li>
                    <li> Limpieza</li>
                    <li> Almacen</li>

                </ul>
            </nav>

            <CardWidget/>
        </header>
    )
}

export default Navbar

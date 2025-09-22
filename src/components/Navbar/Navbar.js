import { Link } from 'react-router-dom';
import FBusqueda from '../FBusqueda/FBusqueda';
import "../../assets/css/index.css"

function Navbar (props){
    return(
            <nav className="site-nav">
                <Link to="/"><h1>MVSFlix</h1></Link>
                <ul className="nav-links">
                    {props.items.map((item, idx) => (<li key={item + idx} className="nav-item">
                        <Link className="nav-link" to={item.direccion}>{item.pagina}</Link>
                    </li>))}
                </ul>
                <FBusqueda />
            </nav>

    )
};

export default Navbar;
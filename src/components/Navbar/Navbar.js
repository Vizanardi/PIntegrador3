import { Link } from 'react-router-dom';
import FBusqueda from '../FBusqueda/FBusqueda';

function Navbar (props){
    return(
            <nav>
                <h1>MVSFlix</h1>
                <ul className="nav nav-tabs my-4">
                    {props.items.map((item, idx) => (<li key={item + idx} className="nav-item">
                        <Link className="nav-link" to={item.direccion}>{item.pagina}</Link>
                    </li>))}
                </ul>
                <FBusqueda />
            </nav>

    )
};

export default Navbar;
import { Link } from 'react-router-dom';

function Navbar (props){
    return(
            <nav>
                <h1>Nombre Pagina</h1>
                <ul className="nav nav-tabs my-4">
                    {props.items.map((item, idx) => (<li key={item + idx} className="nav-item">
                        <Link className="nav-link" to={item.direccion}>{item.pagina}</Link>
                    </li>))}
                </ul>
            </nav> 
        
    )
};

export default Navbar;
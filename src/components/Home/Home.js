import React from "react";
import Navbar from "../Navbar/Navbar"; 
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import Series from "../Series/Series";

let items=[{pagina:"Home", direccion:"/"},{pagina:"Series", direccion:"/Series"},{pagina:"Movies", direccion:"/Movies"}, {pagina:"Favorites", direccion:"/Favorites"}];

function Home(){
    return(
        <React.Fragment>
            <Navbar items={items}/>
            <Footer />
        </React.Fragment>
    )
}

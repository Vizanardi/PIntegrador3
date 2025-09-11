import React from "react";
import Navbar from "../../components/Navbar/Navbar"; 
import Footer from "../../components/Footer/Footer";
import Movies from "../../components/Movies/Movies";
import Series from "../../components/Series/Series";

let items=[{pagina:"Home", direccion:"/"},{pagina:"Series", direccion:"/Series"},{pagina:"Movies", direccion:"/Movies"}, {pagina:"Favorites", direccion:"/Favorites"}];

function Home(){
    return(
        <React.Fragment>
            <Navbar items={items}/>
            <Footer />
        </React.Fragment>
    )
}

export default Home;
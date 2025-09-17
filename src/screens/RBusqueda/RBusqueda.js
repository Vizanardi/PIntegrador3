import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import FBusqueda from '../../components/FBusqueda/FBusqueda';

let items = [{pagina:"Home", direccion:"/"}, {pagina:"Movies", direccion:"/MoviesG"}, {pagina: "Series", direccion:"/SeriesG"}, {pagina: "Favoritas", direccion:"/Favorites"}];


function RBusqueda(props) {
    const name = props.match.params.name;
  return (
    <React.Fragment>
      <Navbar items={items} />
      <FBusqueda />
      <h2>Resultados de Busqueda: {name}</h2>

      <Footer />
    </React.Fragment>
  );
}

//TERMINAR

export default RBusqueda;
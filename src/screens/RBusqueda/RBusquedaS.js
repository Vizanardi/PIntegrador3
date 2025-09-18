import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Filter from '../../components/Filter/Filter';
import Movies from '../Movies/MoviesG';

let items = [{pagina:"Home", direccion:"/"}, {pagina:"Movies", direccion:"/MoviesG"}, {pagina: "Series", direccion:"/SeriesG"}, {pagina: "Favoritas", direccion:"/Favorites"}];


class RBusquedaS extends Component{
  constructor(props) {
    super(props);

    this.state = {
      mR: [],
      mP: [],
      mU: [],
      arrayBusqueda: [],
      name : props.match.params.name,
    };
  }

    componentDidMount(){
    fetch(`https://api.themoviedb.org/3/search/tv?query=${this.state.name}include_adult=false&language=en-US&page=1`)
        .then(res => res.json())
        .then(data => {
            this.setState({rickandmorty: data.results, arrayBusqueda: data.results})
        })
        .catch(error => console.log(error))
    }

    filtrarSerie(ser){
      let juntarArrays = this.state.sP.concat(this.state.sT)
      let serie = juntarArrays.filter(serie => serie.name.toLowerCase().includes(ser))
      this.setState({arrayBusqueda: serie})
  }

    render(){       
      return (
        <React.Fragment>
          <Navbar items={items} />
          <Filter pj={(name) => this.filtrarPersonaje(name)} />
          <h2>Resultados de Busqueda: {this.state.name}</h2>
          <Series datos={this.state.arrayBusqueda} 
                  enFavoritos = {false}
                  agregarFav={this.agregarFavorito}
                  quitarFav={this.quitarFavorito}/>
          <Footer />
        </React.Fragment>
      ) }
};




export default RBusquedaS;


    




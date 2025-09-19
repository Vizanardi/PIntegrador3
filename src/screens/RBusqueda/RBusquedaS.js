import React, { Component } from 'react';
import Filter from '../../components/Filter/Filter';
import Series from '../../components/Series/Series';
import Navbar from '../../components/Navbar/Navbar'


let items = [{pagina:"Home", direccion:"/"}, {pagina:"Movies", direccion:"/MoviesG"},  {pagina: "Series", direccion:"/SeriesG"}, {pagina: "Favoritas", direccion:"/Favorites"}];


class RBusquedaS extends Component{
  constructor(props) {
    super(props);

    this.state = {
      resulatdosS: [],
      arrayBusqueda: [],
      name : props.match.params.name,
    };
  }

    componentDidMount(){
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Y2Q2MGNjMjM5NThhMTAxMjA5ZDJmYmJiYTU4MDIzNiIsIm5iZiI6MTc1NzYwOTI4NS4wMzMsInN1YiI6IjY4YzJmZDQ1OWY1MjQzOTg1MDhkMDU0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s3mwqyuQAAaihkRKOET-E5_lL96It2h3GcUILb_PHZQ'
      }}
    
    fetch(`https://api.themoviedb.org/3/search/tv?query=${this.state.name}&include_adult=false&language=en-US&page=1`)
        .then(res => res.json())
        .then(data => {
            this.setState({resulatdosS: data.results, arrayBusqueda: data.results})
        })
        .catch(error => console.log(error))
    }

    filtrarSerie(ser){
      let serie = this.state.resulatdosS.filter(serie => serie.name.toLowerCase().includes(ser))
      this.setState({arrayBusqueda: serie})
    }


    render(){       
      return (
        <React.Fragment>
          <Navbar items={items}/>
          <Filter filtrar={(ser) => this.filtrarSerie(ser)} />
          <h2>Resultados de Busqueda: {this.state.name}</h2>
          <Series datos={this.state.arrayBusqueda}/>
        </React.Fragment>
      ) }
};




export default RBusquedaS;


    




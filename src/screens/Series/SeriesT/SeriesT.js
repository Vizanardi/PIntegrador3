import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Series from '../../../components/Series/Series';
import Filter from '../../../components/Filter/Filter';
import Navbar from '../../../components/Navbar/Navbar'


let items = [{pagina:"Home", direccion:"/"}, {pagina:"Movies", direccion:"/MoviesG"}, {pagina: "Popular Series", direccion:"/SeriesP"}, {pagina: "TopRated Series", direccion:"/SeriesT"}, {pagina: "Favoritas", direccion:"/Favorites"}];

class SeriesT extends Component{
  constructor(props) {
    super(props);

    this.state = {
      sT: [],
      arrayBusqueda: [],
    };
  }

  componentDidMount() {
    const options = {
      method: 'GET',
      headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Y2Q2MGNjMjM5NThhMTAxMjA5ZDJmYmJiYTU4MDIzNiIsIm5iZiI6MTc1NzYwOTI4NS4wMzMsInN1YiI6IjY4YzJmZDQ1OWY1MjQzOTg1MDhkMDU0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s3mwqyuQAAaihkRKOET-E5_lL96It2h3GcUILb_PHZQ'
    }
  };

  fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', options)
    .then(res => res.json())
    .then(data => {
        this.setState({sT: data.results, arrayBusqueda: data.results})
    })
    .catch(err => console.error(err));  
  }

  filtrarSerie(ser){
        let serie = this.state.sT.filter(serie => serie.name.toLowerCase().includes(ser))
        this.setState({arrayBusqueda: serie})
    }



  render() {
    return (
    <React.Fragment>
      <Navbar items={items}/>
      <Filter filtrar={(ser) => this.filtrarSerie(ser)} seccion={"Series"}/>
      <h3>Premiadas</h3>
      <Series datos={this.state.sT}  />
      <button onClick={() => this.cargarMas()}>Mas Peliculas</button>
    </React.Fragment>
  );
}
  }

export default SeriesT;
import React, { Component } from 'react';
import Movies from '../../../components/Movies/Movies';
import Filter from '../../../components/Filter/Filter';
import Navbar from '../../../components/Navbar/Navbar'
import "../../../assets/css/index.css"
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

let items = [{pagina:"Home", direccion:"/"}, {pagina:"Popular Movies", direccion:"/MoviesP"}, {pagina:"TopRated Movies", direccion:"/MoviesR"}, {pagina:"UpComing Movies", direccion:"/MoviesU"}, {pagina: "Series", direccion:"/SeriesG"}, {pagina: "Favoritas", direccion:"/Favorites"}];

class MoviesP extends Component{
  constructor(props) {
    super(props);

    this.state = {
      mP: [],
      arrayBusqueda: [],
      page: 1
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

  fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    .then(res => res.json())
    .then(data => {
      console.log(data)
        this.setState({mP: data.results, arrayBusqueda: data.results})
    })
    .catch(err => console.error(err));
  }

  cargarMas(){
    let next = this.state.page + 1;
    this.setState({ page: next });

          fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${next}&api_key=6cd60cc23958a101209d2fbbba580236`)
          .then(response => response.json())
          .then(data => {this.setState({mP: this.state.mP.concat(data.results), arrayBusqueda: this.state.arrayBusqueda.concat(data.results)})})
          .catch(error => console.log(error))
  }

  filtrarMovie(peli){
        let movie = this.state.arrayBusqueda.filter(movie => movie.title.toLowerCase().includes(peli))
        this.setState({mP: movie})
    }

  render() {
    return (
    <div className="page--vertical">
      <Navbar items={items}/>
      <Filter Link to="/RBusquedaM" filtrar={(peli) => this.filtrarMovie(peli)} seccion={"Peliculas"}/>
      <h3>Peliculas mas populares en Argentina Hoy</h3>
      <Movies datos={this.state.mP} vertical/>
      <div className="load-more">
        <button onClick={() => this.cargarMas()}>Mas Peliculas</button>
      </div>
    </div>
  );
}
  }

export default MoviesP;
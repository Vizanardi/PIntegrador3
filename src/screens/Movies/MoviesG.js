import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Movies from '../../components/Movies/Movies';
import Filter from '../../components/Filter/Filter';
import Navbar from '../../components/Navbar/Navbar'
import "../../assets/css/index.css"


let items = [{pagina:"Home", direccion:"/"}, {pagina:"Popular Movies", direccion:"/MoviesP"}, {pagina:"TopRated Movies", direccion:"/MoviesR"}, {pagina:"UpComing Movies", direccion:"/MoviesU"}, {pagina: "Series", direccion:"/SeriesG"}, {pagina: "Favoritas", direccion:"/Favorites"}];

class MoviesG extends Component{
  constructor(props) {
    super(props);

    this.state = {
      mR: [],
      mP: [],
      mU: [],
      arrayBusqueda: [],
      page: 1,
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
    
  fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
    .then(res => res.json())
    .then(data => {
      console.log(data)
        this.setState({mU: data.results, arrayBusqueda: data.results})
    })
    .catch(err => console.error(err));

    fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    .then(res => res.json())
    .then(data => {
      console.log(data)
        this.setState({mR: data.results, arrayBusqueda: data.results})
    })
    .catch(err => console.error(err));
  }

  render() {
    return (
    <React.Fragment>
      <Navbar items={items}/>
      <h1>Cartelera de Peliculas</h1>
      <div className="section-title">
        <h3>Peliculas mas populares en Argentina Hoy</h3>
        <Link to="/MoviesP" className="section-more">Ver mas</Link>
      </div>
      <Movies datos={this.state.mP} />

      <div className="section-title">
        <h3>Nuestra seleccion de peliculas para ti</h3>
        <Link to="/MoviesR" className="section-more">Ver mas</Link>
      </div>
      <Movies datos={this.state.mR}/>

      <div className="section-title">
        <h3>Por venir...</h3>
        <Link to="/MoviesU" className="section-more">Ver mas</Link>
      </div>
      <Movies datos={this.state.mU}/>
    </React.Fragment>
  );
}
  }

export default MoviesG;
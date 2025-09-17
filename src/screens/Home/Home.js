import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Movies from '../../components/Movies/Movies';
import Series from '../../components/Series/Series';

let items = [{pagina:"Home", direccion:"/"}, {pagina:"Movies", direccion:"/Movies"}, {pagina: "Series", direccion:"/Series"}, {pagina: "Favoritas", direccion:"/Favorites"}];

class Home extends Component{
  constructor(props) {
    super(props);

    this.state = {
      mR: [],
      mP: [],
      mU: [],
      sP: [],
      sR: []
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
    .then(res => console.log(res))
    .then(data => {
        this.setState({mP: data.results})
    })
    .catch(err => console.error(err));
    
  fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
    .then(res => res.json())
    .then(res => console.log(res))
    .then(data => {
        this.setState({mU: data.results})
    })
    .catch(err => console.error(err));

  fetch('https://api.themoviedb.org/3/movie/movie_id/recommendations?language=en-US&page=1', options)
    .then(res => res.json())
    .then(res => console.log(res))
    .then(data => {
        this.setState({mR: data.results})
    })
    .catch(err => console.error(err));

  fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', options)
    .then(res => res.json())
    .then(res => console.log(res))
    .then(data => {
        this.setState({sP: data.results})
    })
    .catch(err => console.error(err));

  fetch('https://api.themoviedb.org/3/tv/series_id/recommendations?language=en-US&page=1', options)
    .then(res => res.json())
    .then(res => console.log(res))
    .then(data => {
        this.setState({sR: data.results})
    })
    .catch(err => console.error(err));
    }

  render() {
    return (
    <React.Fragment>
      <Navbar items={items} />
      <h1>Cartelera de Peliculas</h1>
      <h3>Peliculas mas populares en Argentina Hoy</h3>
      <Movies datos={this.state.mP} 
          favoritos={this.state.favoritos}
          enFavoritos = {false}
          agregarFav={this.agregarFavorito}
          quitarFav={this.quitarFavorito} />
          <Link to="/MoviesP">Ver mas...</Link>

      <h3>Nuestra seleccion de peliculas para ti</h3>
      <Movies datos={this.state.mR} 
          favoritos={this.state.favoritos}
          enFavoritos = {false}
          agregarFav={this.agregarFavorito}
          quitarFav={this.quitarFavorito} />
          <Link to="/MoviesR">Ver mas...</Link>

      <h3>Peliculas por venir...</h3>
      <Movies datos={this.state.mU} 
          favoritos={this.state.favoritos}
          enFavoritos = {false}
          agregarFav={this.agregarFavorito}
          quitarFav={this.quitarFavorito} />
          <Link to="/MoviesU">Ver mas...</Link>

      <h3>Series mas populares en Argentina Hoy</h3>
      <Series datos={this.state.sP} 
          favoritos={this.state.favoritos}
          enFavoritos = {false}
          agregarFav={this.agregarFavorito}
          quitarFav={this.quitarFavorito} />
          <Link to="/SeriesP">Ver mas...</Link>

      <h3>Nuestra seleccion de series para ti</h3>
      <Series datos={this.state.sR} 
          favoritos={this.state.favoritos}
          enFavoritos = {false}
          agregarFav={this.agregarFavorito}
          quitarFav={this.quitarFavorito} />
          <Link to="/SeriesR">Ver mas...</Link>
      <Footer />
    </React.Fragment>
  );
}
  }

export default Home;
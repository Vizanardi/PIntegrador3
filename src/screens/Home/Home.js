import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Movies from '../../components/Movies/Movies';
import Series from '../../components/Series/Series';

let items = [{pagina:"Home", direccion:"/"}, {pagina:"Movies", direccion:"/MoviesG"}, {pagina: "Series", direccion:"/SeriesG"}, {pagina: "Favoritas", direccion:"/Favorites"}];

class Home extends Component{
  constructor(props) {
    super(props);

    this.state = {
      mR: [],
      mP: [],
      mU: [],
      sP: [],
      sT: []
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
        this.setState({mP: data.results})
    })
    .catch(err => console.error(err));
    
  fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
    .then(res => res.json())
    .then(data => {
      console.log(data)
        this.setState({mU: data.results})
    })
    .catch(err => console.error(err));

    fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    .then(res => res.json())
    .then(data => {
      console.log(data)
        this.setState({mR: data.results})
    })
    .catch(err => console.error(err));

  fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', options)
    .then(res => res.json())
    .then(data => {
        this.setState({sP: data.results})
    })
    .catch(err => console.error(err));

  
  fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', options)
    .then(res => res.json())
    .then(data => {
        this.setState({sT: data.results})
    })
    .catch(err => console.error(err));  
  }

  render() {
    console.log(this.state.mR)
    return (
    <React.Fragment>
      <Navbar items={items} />
      <h1>Cartelera de Peliculas</h1>
      <h3>Peliculas mas populares en Argentina Hoy</h3>
      <Movies datos={this.state.mP} />
          <Link to="/MoviesP">Ver mas...</Link>

      <h3>Nuestra seleccion de peliculas para ti</h3>
      <Movies datos={this.state.mR} />
          <Link to="/MoviesR">Ver mas...</Link>

      <h3>Por venir...</h3>
      <Movies datos={this.state.mU} />
          <Link to="/MoviesR">Ver mas...</Link>
    
      <h1>Cartelera de Series</h1>
      <h3>Series más populares</h3>
      <Series datos={this.state.sP} />
          <Link to="/SeriesP">Ver mas...</Link>
      
      <h3>Premiadas</h3>
      <Series datos={this.state.sT} />
          <Link to="/SeriesT">Ver mas...</Link>

      
      <Footer />
    </React.Fragment>
  );
}
  }

export default Home;
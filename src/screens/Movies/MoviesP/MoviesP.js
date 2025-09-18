import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';
import Movies from '../../../components/Movies/Movies';
import Filter from '../../../components/Filter/Filter';

let items = [{pagina:"Home", direccion:"/"}, {pagina:"Popular Movies", direccion:"/MoviesP"}, {pagina:"TopRated Movies", direccion:"/MoviesR"}, {pagina:"UpComing Movies", direccion:"/MoviesU"}, {pagina: "Series", direccion:"/SeriesG"}, {pagina: "Favoritas", direccion:"/Favorites"}];

class MoviesP extends Component{
  constructor(props) {
    super(props);

    this.state = {
      mP: [],
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

  fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    .then(res => res.json())
    .then(data => {
      console.log(data)
        this.setState({mP: data.results})
    })
    .catch(err => console.error(err));
  }

  filtrarMovie(peli){
        let movie = this.state.mP.filter(movie => movie.title.toLowerCase().includes(peli))
        this.setState({arrayBusqueda: movie})
    }

  render() {
    return (
    <React.Fragment>
      <Navbar items={items} />
      <Filter filtrar={(peli) => this.filtrarMovie(peli)}/>
      <h3>Peliculas mas populares en Argentina Hoy</h3>
      <Movies datos={this.state.mP} />
          <Link to="/MoviesP">Ver mas...</Link>
      <Footer />
    </React.Fragment>
  );
}
  }

export default MoviesP;
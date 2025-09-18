import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Movies from '../../components/Movies/Movies';
import Filter from '../../components/Filter/Filter';

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

  cargarMas(){
      let next = this.state.page + 1;
      this.setState({ page: next });

            fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${next}&api_key=6cd60cc23958a101209d2fbbba580236`)
            .then(response => response.json())
            .then(data => {this.setState({mP: this.state.mP.concat(data.results)})})
            .catch(error => console.log(error))

            fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${next}&api_key=6cd60cc23958a101209d2fbbba580236`)
            .then(response => response.json())
            .then(data => {this.setState({mU: this.state.mU.concat(data.results)})})
            .catch(error => console.log(error))
            
            fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${next}&api_key=6cd60cc23958a101209d2fbbba580236`)
            .then(response => response.json())
            .then(data => {this.setState({mR: this.state.mR.concat(data.results)})})
            .catch(error => console.log(error))
    }

    filtrarMovie(peli){
        let juntarArrays = this.state.mP.concat(this.state.mR, this.state.mU)
        let movie = juntarArrays.filter(movie => movie.title.toLowerCase().includes(peli))
        this.setState({arrayBusqueda: movie})
    }

  render() {
    return (
    <React.Fragment>
      <Navbar items={items} />
      <Filter filtrar={(peli) => this.filtrarMovie(peli)} seccion={"Peliculas"}/>
      <h1>Cartelera de Peliculas</h1>
      <h3>Peliculas mas populares en Argentina Hoy</h3>
      <Movies datos={this.state.mP} />
          <Link to="/MoviesP">Ver mas...</Link>

      <h3>Nuestra seleccion de peliculas para ti</h3>
      <Movies datos={this.state.mR}/>
          <Link to="/MoviesR">Ver mas...</Link>

      <h3>Por venir...</h3>
      <Movies datos={this.state.mU}/>
          <Link to="/MoviesU">Ver mas...</Link>
      
      <button onClick={() => this.cargarMas()}>Mas Peliculas</button>
      <Footer />
    </React.Fragment>
  );
}
  }

export default MoviesG;
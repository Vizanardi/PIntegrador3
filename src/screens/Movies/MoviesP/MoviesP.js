import React, { Component } from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';

let items = [{pagina:"Home", direccion:"/"}, {pagina:"About Us", direccion:"/about"}, {pagina: "Personajes", direccion:"/personajes"}, {pagina: "Rick And Morty", direccion:"/rickandmorty"}, {pagina: "Favoritos", direccion:"/favoritos"}];

class Movies extends Component{
  constructor(props) {
    super(props);

    this.state = {
      mR: [],
      mP: [],
      mU: [], 
    };
  }

  apiCall(url, array){
    fetch(url)
    .then(res => res.json())
    .then(data => {
        this.setState({[array]: data.results})
    })
    .catch(error => console.log(error))
  }
  peliculasPopulares(){
    this.apiCall("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=6cd60cc23958a101209d2fbbba580236", "mP")
  }
  peliculasRecomendadas(){
    this.apiCall("https://api.themoviedb.org/3/movie/movie_id/recommendations?language=en-US&page=1&api_key=6cd60cc23958a101209d2fbbba580236", "mR")
  }
  peliculasUpComing(){
    this.apiCall("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=6cd60cc23958a101209d2fbbba580236", "mU")
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
    .catch(err => console.error(err));
    
  fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err));

  fetch('https://api.themoviedb.org/3/movie/movie_id/recommendations?language=en-US&page=1', options)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err));
    }

  

  agregarFavorito = (id) => {
    let favsN = this.state.favoritos.concat(id);
    localStorage.setItem('favoritos', JSON.stringify(favsN));
    this.setState({
      favoritos: favsN
    })
  }

  quitarFavorito = (id) => {
    let favsN = this.state.favoritos.filter(fav => fav !== id);
    localStorage.setItem('favoritos', JSON.stringify(favsN));
    this.setState({
      favoritos: favsN
    });
  }

  render() {
    return (
    <React.Fragment>
      <Navbar items={items} />
      <h1>Cartelera de Peliculas</h1>
      <h3>Populares</h3>
      <Movies datos={this.state.mP} 
          favoritos={this.state.favoritos}
          enFavoritos = {false}
          agregarFav={this.agregarFavorito}
          quitarFav={this.quitarFavorito} />
      <Footer />
    </React.Fragment>
  );
}
  }

export default Movies;
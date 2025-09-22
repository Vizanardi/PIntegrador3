import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Movies from '../../components/Movies/Movies';
import Series from '../../components/Series/Series';

let items = [
  {pagina:"Home", direccion:"/"},
  {pagina:"Movies", direccion:"/MoviesG"},
  {pagina:"Series", direccion:"/SeriesG"},
  {pagina:"Favoritas", direccion:"/Favorites"}
];

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      series: []
    };
  }

  componentDidMount() {
    let moviesFavs = localStorage.getItem("moviesFavoritas");
    let seriesFavs = localStorage.getItem("seriesFavoritas");

    if (moviesFavs !== null) {
      let arrayMovies = JSON.parse(moviesFavs);
      let moviesAr = []
      arrayMovies.map(id => {
        if (arrayMovies !== null){
          fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=6cd60cc23958a101209d2fbbba580236&language=en-US`)
          .then(res => res.json())
          .then(data => {
            moviesAr.push(data)
            this.setState({
              movies: moviesAr
            });
          })
          .catch(err => console.log(err));
      ;}
    }) 
    }

    if (seriesFavs !== null) {
      let arraySeries = JSON.parse(seriesFavs);
      let seriesAr = []
      arraySeries.map(id => {
        if (arraySeries !== null){
          fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=6cd60cc23958a101209d2fbbba580236&language=en-US`)
          .then(res => res.json())
          .then(data => {
            seriesAr.push(data)
            this.setState({
              series: seriesAr
            });
          })
          .catch(err => console.log(err));
        }
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <Navbar items={items} />
        <div className="page--vertical">
          <h2>Películas Favoritas</h2>
              {this.state.movies.length === 0 ? (
          <p>No tenés películas favoritas.</p>
               ) : (
            <Movies datos={this.state.movies} enFavoritos={true} />)}
          <h2>Series Favoritas</h2>
              {this.state.series.length === 0 ? (
          <p>No tenés series favoritas.</p>
              ) : (
            <Series datos={this.state.series} enFavoritos={true} />)}
        </div>
      </React.Fragment>
    );
  }
}

export default Favorites;
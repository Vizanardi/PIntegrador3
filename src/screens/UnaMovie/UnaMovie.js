import React, { Component } from 'react'; 
import MDetalle from '../../components/Movies/MDetalle';
import Navbar from '../../components/Navbar/Navbar';
import "../../assets/css/index.css"


let items = [{pagina:"Home", direccion:"/"}, {pagina:"Movies", direccion:"/MoviesG"},  {pagina: "Series", direccion:"/SeriesG"}, {pagina: "Favoritas", direccion:"/Favorites"}];


class UnaMovie extends Component{
  constructor(props) {
    super(props);

    this.state = {
        movie: null
    }}

    componentDidMount(){
    const id = this.props.match.params.id

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Y2Q2MGNjMjM5NThhMTAxMjA5ZDJmYmJiYTU4MDIzNiIsIm5iZiI6MTc1NzYwOTI4NS4wMzMsInN1YiI6IjY4YzJmZDQ1OWY1MjQzOTg1MDhkMDU0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s3mwqyuQAAaihkRKOET-E5_lL96It2h3GcUILb_PHZQ'
        }
      };
      
      fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
        .then(res => res.json())
        .then(data => {
          this.setState({movie: data})
        })
        .catch(error => console.log(error))}

  render(){
    const m = this.state.movie
    
    if (m === null) {
      return (
        <React.Fragment>
          <Navbar items={items}/>
          <h1>Más Info</h1>
          <p>Cargando...</p>
        </React.Fragment>
      );
    }

    let generos = "No disponible";
    if (m.genres && m.genres.length > 0) {
      generos = "";
      for (let i = 0; i < m.genres.length; i++) {
        generos += m.genres[i].name;
        if (i < m.genres.length - 1) {
          generos += ", ";
        }
      }
    }

    return (
    <React.Fragment>
      <Navbar items={items}/>
      <h1>Más Info</h1>
      <MDetalle
                key={m.id}
                id={m.id}
                imagen={m.backdrop_path}
                nombre={m.title}
                descripcion = {m.overview}
                calificacion = {m.vote_average}
                genero= {generos}
                fecha = {m.release_date}
                duracion= {m.runtime}
              />
    </React.Fragment>
              
  )};
}

export default UnaMovie;
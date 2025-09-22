import React, { Component } from 'react'; 
import SDetalle from '../../components/Series/SDetalle';
import Navbar from '../../components/Navbar/Navbar';
import "../../assets/css/index.css"



let items = [{pagina:"Home", direccion:"/"}, {pagina:"Movies", direccion:"/MoviesG"},  {pagina: "Series", direccion:"/SeriesG"}, {pagina: "Favoritas", direccion:"/Favorites"}];

class UnaSerie extends Component{
  constructor(props) {
    super(props);

    this.state = {
        serie: null
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
      
      fetch(`https://api.themoviedb.org/3/tv/${id}?language=en-US`, options)
        .then(res => res.json())
        .then(data => {
          this.setState({serie: data})
        })
        .catch(error => console.log(error))}

  render(){
    const s = this.state.serie

    if (s === null) {
      return (
        <React.Fragment>
          <Navbar items={items}/>
          <h1>Más Info</h1>
          <p>Cargando...</p>
        </React.Fragment>
      );
    }

    let generos = "No disponible";
    if (s.genres && s.genres.length > 0) {
      generos = "";
      for (let i = 0; i < s.genres.length; i++) {
        generos += s.genres[i].name;
        if (i < s.genres.length - 1) {
          generos += ", ";
        }
      }
    }

    return (
    <React.Fragment>
      <Navbar items={items}/>
      <h1>Más Info</h1>
      <SDetalle
                key={s.id}
                id={s.id}
                imagen={s.backdrop_path}
                nombre={s.name}
                descripcion = {s.overview}
                calificacion = {s.vote_average}
                genero= {generos}
                fecha= {s.first_air_date}
              />
    </React.Fragment>
              
  )};
}

export default UnaSerie;
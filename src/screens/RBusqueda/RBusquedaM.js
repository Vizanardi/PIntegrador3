import React, { Component } from 'react';
import Filter from '../../components/Filter/Filter';
import Movies from "../../components/Movies/Movies";
import Navbar from '../../components/Navbar/Navbar'


let items = [{pagina:"Home", direccion:"/"}, {pagina:"Movies", direccion:"/MoviesG"},  {pagina: "Series", direccion:"/SeriesG"}, {pagina: "Favoritas", direccion:"/Favorites"}];

class RBusquedaM extends Component{
  constructor(props) {
    super(props);

    this.state = {
      resulatdosM: [],
      arrayBusqueda: [],
      title : props.match.params.title,
    };
  }

    componentDidMount(){
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Y2Q2MGNjMjM5NThhMTAxMjA5ZDJmYmJiYTU4MDIzNiIsIm5iZiI6MTc1NzYwOTI4NS4wMzMsInN1YiI6IjY4YzJmZDQ1OWY1MjQzOTg1MDhkMDU0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s3mwqyuQAAaihkRKOET-E5_lL96It2h3GcUILb_PHZQ'
            }
        };
    
    fetch(`https://api.themoviedb.org/3/search/movie?query=${this.state.title}&include_adult=false&language=en-US&page=1`)
        .then(res => res.json())
        .then(data => {
            this.setState({resulatdosM: data.results, arrayBusqueda: data.results})
        })
        .catch(error => console.log(error))
    }

    filtrarMovie(mov){
      let movie = this.state.resulatdosM.filter(movie => movie.title.toLowerCase().includes(mov))
      this.setState({arrayBusqueda: movie})
    }


    render(){ 
    console.log("arrayBusqueda:", this.state.arrayBusqueda);      
      return (
        <React.Fragment>
          <Navbar items={items}/>
          <Filter filtrar={(mov) => this.filtrarMovie(mov)} />
          <h2>Resultados de Busqueda: {this.state.title}</h2>
          <Movies datos={this.state.arrayBusqueda}/>
        </React.Fragment>
      ) }
};




export default RBusquedaM;
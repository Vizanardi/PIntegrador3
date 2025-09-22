import React, { Component } from 'react';
import "../../../assets/css/index.css"
import Series from '../../../components/Series/Series';
import Filter from '../../../components/Filter/Filter';
import Navbar from '../../../components/Navbar/Navbar'


let items = [{pagina:"Home", direccion:"/"}, {pagina:"Movies", direccion:"/MoviesG"}, {pagina: "Popular Series", direccion:"/SeriesP"}, {pagina: "TopRated Series", direccion:"/SeriesT"}, {pagina: "Favoritas", direccion:"/Favorites"}];

class SeriesT extends Component{
  constructor(props) {
    super(props);

    this.state = {
      sT: [],
      arrayBusqueda: [],
      page:1
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

  fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', options)
    .then(res => res.json())
    .then(data => {
        this.setState({sT: data.results, arrayBusqueda: data.results})
    })
    .catch(err => console.error(err));  
  }

  cargarMas(){
    let next = this.state.page + 1;
    this.setState({ page: next });
  
          fetch(`https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=${next}&api_key=6cd60cc23958a101209d2fbbba580236`)
          .then(response => response.json())
          .then(data => {this.setState({sT: this.state.sT.concat(data.results), arrayBusqueda: this.state.arrayBusqueda.concat(data.results)})})
          .catch(error => console.log(error))
  }

  filtrarSerie(ser){
        let serie = this.state.arrayBusqueda.filter(serie => serie.name.toLowerCase().includes(ser))
        this.setState({sT: serie})
    }

  render() {
    return (
    <div className="page--vertical">
      <Navbar items={items}/>
      <Filter Link to="/RBusquedaS" filtrar={(ser) => this.filtrarSerie(ser)} seccion={"Series"}/>
      <h3>Premiadas</h3>
      <Series datos={this.state.sT} vertical />
      <div className="load-more">
        <button onClick={() => this.cargarMas()}>Mas Series</button>
      </div>
    </div>
  );
}
  }

export default SeriesT;
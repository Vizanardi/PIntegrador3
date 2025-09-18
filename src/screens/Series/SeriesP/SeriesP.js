import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../../../components/Navbar/Navbar";
import Footer from '../../../components/Footer/Footer';
import Series from '../../../components/Series/Series';
import Filter from '../../../components/Filter/Filter';

let items = [{pagina:"Home", direccion:"/"}, {pagina:"Movies", direccion:"/MoviesG"}, {pagina: "Popular Series", direccion:"/SeriesP"}, {pagina: "TopRated Series", direccion:"/SeriesT"}, {pagina: "Favoritas", direccion:"/Favorites"}];

class SeriesP extends Component{
  constructor(props) {
    super(props);

    this.state = {
      sP: [],
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

  fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', options)
    .then(res => res.json())
    .then(data => {
        this.setState({sP: data.results})
    })
    .catch(err => console.error(err));
  }

  filtrarSerie(ser){
        let serie = this.state.sP.filter(serie => serie.name.toLowerCase().includes(ser))
        this.setState({arrayBusqueda: serie})
    }

  render() {
    return (
    <React.Fragment>
      <Navbar items={items} />
      <Filter filtrar={(ser) => this.filtrarSerie(ser)}/>
      <h3>Series más populares</h3>
      <Series datos={this.state.sP} />
          <Link to="/SeriesP">Ver mas...</Link>
      <Footer />
    </React.Fragment>
  );
}
  }

export default SeriesP;
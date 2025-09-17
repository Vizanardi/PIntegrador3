import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../../../components/Navbar/Navbar";
import Footer from '../../../components/Footer/Footer';
import Series from '../../../components/Series/Series';

let items = [{pagina:"Home", direccion:"/"}, {pagina:"Movies", direccion:"/MoviesG"}, {pagina: "Popular Series", direccion:"/SeriesP"}, {pagina: "TopRated Series", direccion:"/SeriesT"}, {pagina: "Favoritas", direccion:"/Favorites"}];

class SeriesT extends Component{
  constructor(props) {
    super(props);

    this.state = {
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
      <h3>Premiadas</h3>
      <Series datos={this.state.sT} />
          <Link to="/SeriesT">Ver mas...</Link>
      <Footer />
    </React.Fragment>
  );
}
  }

export default SeriesT;
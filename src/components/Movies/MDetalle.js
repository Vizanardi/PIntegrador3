import React, {Component} from 'react';
import "../../assets/css/index.css"

class MovieDetalle extends Component {
  constructor(props){
         super(props);
         this.state = {
         valor: props.value,
         enFavs: false
        }}

    agregarAFavs(){
      let favs= localStorage.getItem("moviesFavoritas")
      if(favs === null){
        let favArray= []
        favArray.push(this.props.id)
        let stringFavs = JSON.stringify(favArray)
        localStorage.setItem("moviesFavoritas", stringFavs)
      }
      else{
        let parciado = JSON.parse(favs)
        parciado.push(this.props.id)
        let stringParciado = JSON.stringify(parciado)
        localStorage.setItem("moviesFavoritas", stringParciado)
      }
      this.setState({ enFavs: true})
    }

    quitarFavs(){
      let favs= localStorage.getItem("moviesFavoritas")
      if(favs !== null){
        let parciado = JSON.parse(favs)
        parciado.filter(id => id !== this.props.id)
        let stringParciado = JSON.stringify(parciado)
        localStorage.setItem("moviesFavoritas", stringParciado)
        this.setState({enFavs: false})
      } 
    }

  render(){
    return (
      <article className = "card">
              <img src={`https://image.tmdb.org/t/p/w500${this.props.imagen}`} alt={this.props.nombre} />
              <h2>{this.props.nombre}</h2>
              <p>Trama: {this.props.descripcion}</p>
              <p>Rating: {this.props.calificacion}</p>
              <p>Fecha de estreno: {this.props.fecha}</p>
              <p>Duracion: {this.props.duracion}</p>
              <p>Genero: {this.props.genero}</p>
        

              {this.state.enFavs ? <button onClick={() => this.quitarFavs()} >Quitar de Favoritos</button> : <button onClick={() => this.agregarAFavs()}>Agregar a Favoritos</button>}
    </article>     
    );
  };
}
export default MovieDetalle;
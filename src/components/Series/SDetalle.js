import React, {Component} from 'react';
import "../../assets/css/index.css"

class SerieDetalle extends Component {
  constructor(props){
         super(props);
         this.state = {
         valor: props.value,
         enFavs: false, 
        }}


    agregarAFavs(){
      let favs= localStorage.getItem("seriesFavoritas")
      if(favs === null){
        let favArray= []
        favArray.push(this.props.id)
        let stringFavs = JSON.stringify(favArray)
        localStorage.setItem("seriesFavoritas", stringFavs)
      }
      else{
        let parciado = JSON.parse(favs)
        parciado.push(this.props.id)
        let stringParciado = JSON.stringify(parciado)
        localStorage.setItem("seriesFavoritas", stringParciado)
      }
      this.setState({ enFavs: true})
    }

    quitarFavs(){
      let favs= localStorage.getItem("seriesFavoritas")
      if(favs !== null){
        let parciado = JSON.parse(favs)
        parciado.filter(id => id !== this.props.id)
        let stringParciado = JSON.stringify(parciado)
        localStorage.setItem("seriesFavoritas", stringParciado)
        this.setState({enFavs: false})
      } 
    } 

  render(){
    return (
      <article className = "card">
            <img src={`https://image.tmdb.org/t/p/w500${this.props.imagen}`} alt={this.props.nombre} />
              <h2>{this.props.nombre}</h2>
              <p>Trama: {this.props.descripcion}</p>
              <p>Rating: {this.props.clasificacion}</p>
              <p>Fecha de estreno: {this.props.fecha}</p>
              <p>Genero: {this.props.genero}</p>
              {this.state.enFavs ? <button onClick={() => this.quitarFavs()} >Quitar de Favoritos</button> : <button onClick={() => this.agregarAFavs()}>Agregar a Favoritos</button>}

    </article>     
    );
  };
}
export default SerieDetalle;
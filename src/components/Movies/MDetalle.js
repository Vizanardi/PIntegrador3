import React, {Component} from 'react';
import "../../assets/css/index.css"

class MovieDetalle extends Component {
  constructor(props){
         super(props);
         this.state = {
         enFavs: false
        }}

        componentDidMount() {
          let moviesFavs = localStorage.getItem("moviesFavoritas");
          let arrayMovies = JSON.parse(moviesFavs);

          if (arrayMovies !== null) {
            if (arrayMovies.includes(this.props.id)) {
              this.setState({
                enFavs: true
              })
            }
          }
        }

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
            let actualizado = parciado.filter(id => id !== this.props.id)
            let stringParciado = JSON.stringify(actualizado)
            localStorage.setItem("moviesFavoritas", stringParciado)
            this.setState({enFavs: false})
          } 
        }

  render(){
    return (
      <section className = "detail-card">
        <div className="poster">
            <img src={`https://image.tmdb.org/t/p/w500${this.props.imagen}`} alt={this.props.nombre} />
        </div>
        <div className="info">
          <h2 className='title'>{this.props.nombre}</h2>
          <div className="meta">
            <p className='desc'>{this.props.descripcion}</p>
            <p>Rating: {this.props.calificacion}</p>
            <p>Fecha de estreno: {this.props.fecha}</p>
            <p>Duracion: {this.props.duracion} minutos</p>
            <p>Genero: {this.props.genero}</p>
          </div>
          <div className="actions">
            {this.state.enFavs ? <button onClick={() => this.quitarFavs()} >Quitar de Favoritos</button> : <button onClick={() => this.agregarAFavs()}>Agregar a Favoritos</button>}
          </div>
        </div>
    </section>     
    );
  };
}
export default MovieDetalle;
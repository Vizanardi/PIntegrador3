import { Link } from 'react-router-dom';
import React, {Component} from 'react';
import "../../assets/css/index.css"

class Serie extends Component {
  constructor(props){
         super(props);
         this.state = {
         valor: props.value,
         verMas: false,
         textoBotton: "Ver descripcion",
         enFavs: false
        }}

        componentDidMount() {
          let seriesFavs = localStorage.getItem("seriesFavoritas");
          let arraySeries = JSON.parse(seriesFavs);

          if (arraySeries !== null) {
            if (arraySeries.includes(this.props.id)) {
              this.setState({
                enFavs: true
              })
            }
          }
        }
    

    verMas(){
    if (this.state.verMas === false){
      this.setState({verMas: true, textoBotton: "Ver menos"})

    }else{
      this.setState({verMas: false, textoBotton: "Ver descripcion"})
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
        let actualizado = parciado.filter(id => id !== this.props.id)
        let stringParciado = JSON.stringify(actualizado)
        localStorage.setItem("seriesFavoritas", stringParciado)
        this.setState({enFavs: false})
      } 
    } 

  render(){
    return (
      <article className = "card">
            <Link to={`/Series/id/${this.props.id}`}>
            <img src={`https://image.tmdb.org/t/p/w500${this.props.imagen}`} alt={this.props.nombre} />
              <h2>{this.props.nombre}</h2>
            </Link>

            {this.state.verMas ? <section className="show">
                <p>{this.props.descripcion}</p>
                </section>:""}  

              <p onClick={() => this.verMas()} className="toggle-more">{this.state.textoBotton}</p>

              {this.state.enFavs ? <button onClick={() => this.quitarFavs()} >Quitar de Favoritos</button> : <button onClick={() => this.agregarAFavs()}>Agregar a Favoritos</button>}
    </article>     
    );
  };
}
export default Serie;
import { Link } from 'react-router-dom';
import React, {Component} from 'react';

class Movie extends Component {
  constructor(props){
         super(props);
         this.state = {
         valor: props.value,
         verMas: false,
         textoBotton: "Ver más",
         clase: "hide",
         favorito: this.props.enFavoritos,
         textoFav: this.props.enFavoritos ? "Quitar de favoritos" : "Agregar a favoritos"
        }}

    verMas(){
    if (this.state.verMas === false){
      this.setState({verMas: true, textoBotton: "Ver menos", clase: "show"})

    }else{
      this.setState({verMas: false, textoBotton: "Ver más", clase: "hide"})
    }}

    Favorito(){
      if (this.state.favorito === false){
        this.props.agregarFav(this.props.id);
        this.setState({favorito: true, textoFav: "Quitar de favoritos"})
      }else{
        this.props.quitarFav(this.props.id);
        this.setState({favorito: false, textoFav: "Agregar a favoritos"})
    }}

  render(){
    return (
      <article className = "character-card">
            <Link to={`/rickandmorty/id/${this.props.id}`}>
              <img src={this.props.imagen} alt={this.props.nombre} />
              <h2>{this.props.nombre}</h2>
            </Link>
              <p>{this.props.status}</p>
              <p>{this.props.species}</p>

              <p onClick={() => this.verMas()} className="more">{this.state.textoBotton}</p>
              
              {this.state.verMas ? <section className={`extra ${this.state.clase}`}>
                <p className={this.state.clase}>Origen: {this.props.originName}</p>
                <Link to={this.props.originUrl} className={this.state.clase}>
                  <p className='location'>Location:{this.props.originUrl}</p></Link>
                </section>:""}  
                
              <button onClick={() => this.Favorito(this.props.id)} className="more" >{this.state.textoFav}</button>
  
              <p onClick={() => this.props.onDelete(this.props.id)} className='delete'>Borrar</p>
    </article>     
    );
  };
}
export default CardRM;
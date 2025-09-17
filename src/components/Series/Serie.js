import { Link } from 'react-router-dom';
import React, {Component} from 'react';

class Serie extends Component {
  constructor(props){
         super(props);
         this.state = {
         valor: props.value,
         verMas: false,
         textoBotton: "Ver descripcion",
        }}

    verMas(){
    if (this.state.verMas === false){
      this.setState({verMas: true, textoBotton: "Ver menos"})

    }else{
      this.setState({verMas: false, textoBotton: "Ver descripcion"})
    }}

    

  render(){
    return (
      <article className = "character-card">
            <Link to={`/Series/id/${this.props.key}`}>
            <img src={`https://image.tmdb.org/t/p/w500${this.props.imagen}`} alt={this.props.nombre} />
              <h2>{this.props.nombre}</h2>
            </Link>

              <p onClick={() => this.verMas()} className="more">{this.state.textoBotton}</p>
              
              {this.state.verMas ? <section>
                <p>{this.props.descripcion}</p>
                </section>:""}  

              <Link to={`/Series/id/${this.props.key}`}></Link>
    </article>     
    );
  };
}
export default Serie;
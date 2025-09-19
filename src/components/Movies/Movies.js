import React, { Component } from 'react';
import Movie from './Movie';

class Movies extends Component {
        constructor(props){
                super(props)
                }
        render(){
          return (
            <section className='cards'>
                <section className="cardBody">
                        {this.props.datos.length === 0 ? <h3>Cargando...</h3>: 
                        this.props.datos.map((carta, idx) => {
                           return <Movie  key={idx + carta.id}
                                          id = {carta.id}
                                          imagen={carta.poster_path} 
                                          nombre={carta.title} 
                                          descripcion={carta.overview}
                                          agregarFav={this.props.agregarFav}
                                          enFavoritos={this.props.enFavoritos}
                                          quitarFav={this.props.quitarFav}
                                        />})} 
                </section>
        </section>       
        )}
       
};

export default Movies;


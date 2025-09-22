import React, { Component } from 'react';
import Serie from './Serie';
import "../../assets/css/index.css"

class Series extends Component {
        constructor(props){
                super(props)}
        render(){
          return (
            <section className='cards-grid'>
                <section className="cards-inner">
                        {this.props.datos.length === 0 ? <h3>Cargando...</h3>: 
                        this.props.datos.map((carta, idx) => {
                           return <Serie key={idx + carta.id}
                                          id = {carta.id}
                                          imagen={carta.backdrop_path} 
                                          nombre={carta.name} 
                                          descripcion={carta.overview}
                                        />})} 
                </section>
        </section>       
        )}
       
};

export default Series;


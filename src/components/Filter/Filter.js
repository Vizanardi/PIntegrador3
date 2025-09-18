import Movie from "../Movies/Movie";
import Serie from "../Series/Serie";
import React, { Component } from 'react';

class Filter extends Component {
        constructor(props){
         super(props)
         this.state = {
            busqueda: "",
            arrayBusqueda: [],
            seccion: this.props.seccion,
         }
        }

        evitarSubmit(event){
                event.preventDefault()
        }

        controlarCambios(event){
                this.setState({busqueda: event.target.value}, () => this.props.filtrar(this.state.busqueda.toLowerCase())) 
        }


        render(){
        return (
                <section className='Filter'>
                        <form className='form' onSubmit={(event) => this.evitarSubmit(event)}>
                            <input type="text" placeholder= {`Filtrar ${this.state.seccion}`} onChange={(event) => this.controlarCambios(event)} value={this.state.busqueda}/>
                        </form>
                </section>       
        )}
       
};

export default Filter;


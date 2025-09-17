import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';

class FBusqueda extends Component {
        constructor(props){
         super(props)
         this.state = {
            busqueda: ""
         }
        }

        ejecutarBusqueda(e){
                e.preventDefault()
                this.props.history.push("/RBusqueda/" + this.state.busqueda)
        }

        controlarCambios(event){
                this.setState({busqueda: event.target.value}) 
        }

        render(){
             
        return (
                <section className='FBusqueda'>
                    <form onSubmit={(e) => this.ejecutarBusqueda(e)}>
                        <input type="text" placeholder='Buscar...' onChange={(event) => this.controlarCambios(event)} value={this.state.busqueda}/>
                    </form>
                </section>       
        )}   
};

export default withRouter(FBusqueda);


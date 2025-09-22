import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import "../../assets/css/index.css"

class FBusqueda extends Component {
        constructor(props){
         super(props)
         this.state = {
            busqueda: "",
            categoria: "movie"
         }
        }

        ejecutarBusqueda(e){
                e.preventDefault()
                if(this.state.categoria === "movie"){
                        this.props.history.push("/RBusquedaM/" + this.state.busqueda + "/" +this.state.categoria)
                }
                else{
                        this.props.history.push("/RBusquedaS/" + this.state.busqueda + "/" + this.state.categoria)
                }
                
        }

        controlarCambios(event){
                this.setState({busqueda: event.target.value}) 
        }

        controlarCategoria(cat){
                this.setState({categoria:cat.target.value})
        }

        render(){
             
        return (
                <section className='FBusqueda'>
                    <form className="search" onSubmit={(e) => this.ejecutarBusqueda(e)}>
                        <input type="text" placeholder='Buscar...' onChange={(event) => this.controlarCambios(event)} value={this.state.busqueda}/>
                        <select onChange={(cat) => this.controlarCategoria(cat)}>
                                <option value="movie">Peliculas</option>
                                <option value="tv">Series</option>
                        </select>
                    </form>
                </section>       
        )}   
};

export default withRouter(FBusqueda);


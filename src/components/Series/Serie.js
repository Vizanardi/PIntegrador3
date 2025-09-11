import {Link} from "react-router-dom"
import React, {Component} from "react"

class Serie extends Component{
    constructor(props){
        super(props)
        this.state={
            valor: props.value,
        }};
    render(){
        return (
           <div className="Serie">
                 <Link><img src={this.props.imagen
                        ? this.props.imagen
                        : "https://via.placeholder.com/200x300?text=Sin+imagen"} 
                        alt={this.props.nombre} /> 
                <h2>{this.props.nombre}</h2></Link>
                <p>{this.props.descripcion}</p>
                
           </div> 
        )
    }
}



export default Serie;
import React, {Component} from "react";
import Serie from "./Serie"

class Series extends Component {
    constructor(props){
        super(props)
        this.state={
            SA: [],
            
        }
    }
    apiCall(url, consecuencia){
        fetch(url)
            .then(res => res.json())
            .then(res => consecuencia(res))
            .catch(error => console.log(error));
    }
    traerInfoDeApi(){
        this.apiCall('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1&api_key=6cd60cc23958a101209d2fbbba580236', this.mostrarInfoDeApi)
    }
    mostrarInfoDeApi = (data) => {
        this.setState({SA: data.results})
    }

    componentDidMount(){
        this.traerInfoDeApi()
    }

   render(){
    let contenido;
    if(this.state.SA === ""){
        contenido= <p>Cargando...</p>
    }
    else{
        contenido= this.state.SA.map((carta)=> 
            <Serie imagen={carta.poster_path} nombre={carta.title} descripcion={carta.overview}/>) 
        
    }
    return(
        <section className="contenedor">
            {contenido}
            <button>Cargar Mas</button>
        </section>
    )
   }
}

export default Series;
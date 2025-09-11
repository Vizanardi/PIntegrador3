import React, {Component} from "react";
import Movie from "./Movie"

class Movies extends Component {
    constructor(props){
        super(props)
        this.state={
            MA: [],
            
        }
    }
    apiCall(url, consecuencia){
        fetch(url)
            .then(res => res.json())
            .then(res => consecuencia(res))
            .catch(error => console.log(error));
    }
    traerInfoDeApi(){
        this.apiCall("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=6cd60cc23958a101209d2fbbba580236", this.mostrarInfoDeApi)
    }
    mostrarInfoDeApi = (data) => {
        this.setState({MA: data.results})
    }

    componentDidMount(){
        this.traerInfoDeApi()
    }

   render(){
    let contenido;
    if(this.state.MA === ""){
        contenido= <p>Cargando...</p>
    }
    else{
        contenido= this.state.MA.map((carta)=> 
            <Movie imagen={carta.poster_path} nombre={carta.title} descripcion={carta.overview}/>) 
        
    }
    return(
        <section className="contenedor">
            {contenido}
            <button>Cargar Mas</button>
        </section>
    )
   }
}

export default Movies;
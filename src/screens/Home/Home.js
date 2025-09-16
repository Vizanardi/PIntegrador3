import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar"; 
import Footer from "../../components/Footer/Footer";
import Movies from "../../components/Movies/Movies";
import Series from "../../components/Series/Series";

let items=[{pagina:"Home", direccion:"/"},{pagina:"Series", direccion:"/Series"},{pagina:"Movies", direccion:"/Movies"}, {pagina:"Favorites", direccion:"/Favorites"}];

class Home extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          mR: [],
          mP: [],
          mU: [], 
        };
      }
    
      apiCall(url, array){
        fetch(url)
        .then(res => res.json())
        .then(data => {
            this.setState({[array]: data.results})
        })
        .catch(error => console.log(error))
      }
      peliculasPopulares(){
        this.apiCall("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=6cd60cc23958a101209d2fbbba580236", "mP")
      }
      peliculasRecomendadas(){
        this.apiCall("https://api.themoviedb.org/3/movie/movie_id/recommendations?language=en-US&page=1&api_key=6cd60cc23958a101209d2fbbba580236", "mR")
      }
      peliculasUpComing(){
        this.apiCall("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=6cd60cc23958a101209d2fbbba580236", "mU")
      }
    
      componentDidMount() {
        this.peliculasPopulares();
        this.peliculasRecomendadas();
        this.peliculasUpComing();
      }
    
      agregarFavorito = (id) => {
        let favsN = this.state.favoritos.concat(id);
        localStorage.setItem('favoritos', JSON.stringify(favsN));
        this.setState({
          favoritos: favsN
        })
      }
    
      quitarFavorito = (id) => {
        let favsN = this.state.favoritos.filter(fav => fav !== id);
        localStorage.setItem('favoritos', JSON.stringify(favsN));
        this.setState({
          favoritos: favsN
        });
      }
    render(){
        return(
            <React.Fragment>
                <Navbar items={items} />
                <h1>Cartelera de Peliculas</h1>
                <h3>Populares</h3>
                <Movies datos={this.state.mP} 
                    favoritos={this.state.favoritos}
                    enFavoritos = {false}
                    agregarFav={this.agregarFavorito}
                    quitarFav={this.quitarFavorito} />
                <h3>Recomendadas</h3>
                <Movies datos={this.state.mR} 
                    favoritos={this.state.favoritos}
                    enFavoritos = {false}
                    agregarFav={this.agregarFavorito}
                    quitarFav={this.quitarFavorito} />
                <h3>UpComing</h3>
                <Movies datos={this.state.mU} 
                    favoritos={this.state.favoritos}
                    enFavoritos = {false}
                    agregarFav={this.agregarFavorito}
                    quitarFav={this.quitarFavorito} />
                <Footer />
            </React.Fragment>
        )
    }
}

export default Home;
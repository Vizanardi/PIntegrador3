import Home from "./screens/Home/Home";
import Error from "./screens/Error/Error";
import Favorites from "./screens/Favorites/Favorites";
import MoviesG from "./screens/Movies/MoviesG";
import MoviesP from "./screens/Movies/MoviesP/MoviesP";
import MoviesR from "./screens/Movies/MoviesR/MoviesR";
import MoviesU from "./screens/Movies/MoviesU/MoviesU";
import UnaMovie from "./screens/UnaMovie/UnaMovie";
import SeriesG from "./screens/Series/SeriesG";
import SeriesP from "./screens/Series/SeriesP/SeriesP";
import SeriesT from "./screens/Series/SeriesT/SeriesT";
import UnaSerie from "./screens/UnaSerie/UnaSerie";
import RBusquedaS from "./screens/RBusqueda/RBusquedaS";
import RBusquedaM from "./screens/RBusqueda/RBusquedaM";

import Footer from './components/Footer/Footer';

import {Route, Switch} from "react-router-dom";

let items = [{pagina:"Home", direccion:"/"}, {pagina:"Popular Movies", direccion:"/MoviesP"}, {pagina:"TopRated Movies", direccion:"/MoviesR"}, {pagina:"UpComing Movies", direccion:"/MoviesU"}, {pagina: "Popular Series", direccion:"/SeriesP"}, {pagina: "TopRated Series", direccion:"/SeriesT"}, {pagina: "Favoritas", direccion:"/Favorites"}];

function App() {
  return (
    <div className="App">
      <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/Movies/id/:id" component={UnaMovie} />
          <Route path="/MoviesG" component={MoviesG} />
          <Route path="/MoviesP" component={MoviesP} />
          <Route path="/MoviesR" component={MoviesR} />
          <Route path="/MoviesU" component={MoviesU} />
          <Route path="/Series/id/:id" component={UnaSerie} />
          <Route path="/SeriesG" component={SeriesG} />
          <Route path="/SeriesP" component={SeriesP} />
          <Route path="/SeriesT" component={SeriesT} />
          <Route path="/Favorites" component={Favorites} />
          <Route path="/RBusquedaS/:name/:tipo" component={RBusquedaS}/>
          <Route path= "/RBusquedaM/:title/:tipo" component={RBusquedaM}/>
          <Route component={Error} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;

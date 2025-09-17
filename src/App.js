import Home from "./screens/Home/Home";
import Error from "./screens/Error/Error";
import Favorites from "./screens/Favorites/Favorites";
import FavoritesM from "./screens/Favorites/FavoritesM";
import FavoritesS from "./screens/Favorites/FavoritesS";
import MoviesG from "./screens/Movies/MoviesG";
import MoviesP from "./screens/Movies/MoviesP/MoviesP";
import MoviesR from "./screens/Movies/MoviesR/MoviesR";
import MoviesU from "./screens/Movies/MoviesU/MoviesU";
import UnaMovie from "./screens/UnaMovie/UnaMovie";
import SeriesG from "./screens/Series/SeriesG";
import SeriesP from "./screens/Series/SeriesP/SeriesP";
import SeriesT from "./screens/Series/SeriesT/SeriesT";
import UnaSerie from "./screens/UnaSerie/UnaSerie";
import RBusqueda from "./screens/RBusqueda/RBusqueda";

import {Route, Switch} from "react-router-dom";

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
          <Route path="/Favourites" component={Favorites} />
          <Route path="/FavoritesM" component={FavoritesM} />
          <Route path="/FavoritesS" component={FavoritesS} />
          <Route path="/RBusqueda/:name" component={RBusqueda}/>
          <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;

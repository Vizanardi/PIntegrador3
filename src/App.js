import Home from "./screens/Home/Home";
import Error from "./screens/Error/Error";
import Favorites from "./screens/Favorites/Favorites";
import Movies from "./screens/Movies/Movies";
import UnaMovie from "./screens/UnaMovie/UnaMovie";
import Series from "./screens/Series/Series";
import UnaSerie from "./screens/UnaSerie/UnaSerie";
import RBusqueda from "./screens/RBusqueda/RBusqueda"

import {Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch> 
          <Route path="/" exact={true} component={Home} />
          <Route path="/Movies/id/:id" component={UnaMovie} />
          <Route path="/Movies" component={Movies} />
          <Route path="/Series/id/:id" component={UnaSerie} />
          <Route path="/Series" component={Series} />
          <Route path="/Favorites" component={Favorites} />
          <Route path="/RBusqueda/:name" component={RBusqueda}/>
          <Route path="" component={Error} />
      </Switch>
    </div>
  );
}

export default App;

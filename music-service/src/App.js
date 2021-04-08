import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Album from "./components/Album";
import Artist from "./components/Artist";
import Home from "./components/Home";
import PlayList from "./components/PlayList";
import Song from "./components/Song";

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/playlist/:id" component={PlayList} />
          <Route exact path="/artist/:id" component={Artist} />
          <Route exact path="/album/:id" component={Album} />
          <Route exact path="/song/:id" component={Song} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

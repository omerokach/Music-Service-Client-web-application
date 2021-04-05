import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import PlayList from './components/PlayList'
import Song from './components/Song';
import Artist from './components/Artist'
import Album from './components/Album'
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route path='/' component={Home} />
      <Route path='/playlist/:id' component={PlayList} />
      <Route path='/artist/:id' component={Artist} />
      <Route path='/album/:id' component={Album} />
      <Route path='/song/:id/' component={Song} />
      </BrowserRouter>
    
    </div>
  );
}

export default App;

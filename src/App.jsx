import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/pages/Home.jsx';
import Galerie from './components/pages/Galerie.jsx';
import Login from './components/pages/Login.jsx';


function App() {
  return (

    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/galerie" component={Galerie} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

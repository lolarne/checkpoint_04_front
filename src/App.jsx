import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/pages/Home.jsx';
import Galerie from './components/pages/Galerie.jsx';
import Login from './components/pages/Login.jsx';
import AddIll from './components/pages/AddIllustration.jsx';
import AcceptIll from './components/pages/AcceptIll.jsx';
import ManageIll from './components/pages/ManageIll.jsx';

function App() {
  return (

    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/galerie" component={Galerie} />
          <Route path="/login" component={Login} />
          <Route path="/admin/add" component={AddIll} />
          <Route path="/admin/accept" component={AcceptIll} />
          <Route path="/admin/manage" component={ManageIll} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

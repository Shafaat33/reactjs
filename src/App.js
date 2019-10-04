import React, { Component } from 'react';
import Seats from './components/containers/Seats'
import Form from './components/containers/Form';
import 'materialize-css/dist/css/materialize.min.css';
import Header from './components/presentational/Header';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AdminLogin from './components/containers/AdminLogin';
import ControlRoom from './components/containers/ControlRoom';

class App extends Component {
  render(){
    return (
      <Router>
         <Header />
         <Switch>
            <Route exact path="/" component={Seats} />
            <Route path="/form/:id" component={Form} />
            <Route path="/adminLogin" component={AdminLogin} />
            <Route path="/controlroom" component={ControlRoom} />
         </Switch>
      </Router>
    );
  }
}

export default App;

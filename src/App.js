import React from 'react'; 
import './App.css';
import Art from './components/Art'; 
import Navigation from './components/Navigation';
import Market from './Market';
import Layout from './hocs/Layout';
import Login from './containers/Login';
import Signup from './containers/Signup';
import ResetPassword from './containers/ResetPassword';
import ResetPasswordConfirm from './containers/ResetPasswordConfirm';
import Activate from './containers/Activate';
import Home from './components/Home';
import Artists from './components/Artists';
import About from './components/About'
import Checkout from './components/Checkout'
import { Provider } from 'react-redux';
import Store from './Store';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import { Navbar, Nav, Container, Button, Form, NavDropdown, FormControl } from 'react-bootstrap';


const App = () => (
  
    <Provider store= {Store}>
      <Router>
        <Layout>
            
            
              <Switch> 
                <Route path='/' exact component = {Home} />
                <Route path='/market' exact component = {Market} />
                <Route path ='/artists' component={Artists} />
                <Route path ='/about' component={About} />
                <Route path ='/checkout' component={Checkout} />
                <Route path ='/login' component={Login} />
                <Route path ='/signup' component={Signup} />
                <Route path ='/activate/:uid/:token' component={Activate} />
                <Route path ='/reset-password' component={ResetPassword} />
                <Route path ='/password/reset/confirm/:uid/:token' component={ResetPasswordConfirm} />
            
              </Switch>
        </Layout>
      </Router>
    </Provider>
  );


export default App;

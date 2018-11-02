import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.scss';

// Containers
import { DefaultLayout } from './containers';
// Pages
import { Login, Page404, Page500, Register } from './views/Pages';

// import { renderRoutes } from 'react-router-config';


import {  PrivateRoute } from 'react-router-with-props';

class App extends Component {


  constructor() {
    super();
    this.state = {
      isAuthenticated: false,
    }
  }

  componentWillMount() {
    /*let auth = axios-os check*/
    this.setState({
      isAuthenticated: true
    })
  }

/*  componentDidMount(){
    let auth = axios check;
    auth.then(res => {
      this.setState({
        isAuthenticated: res
      })
    })
  }*/

  render() {

    return (
      <HashRouter>
        <Switch>
          <Route exact path="/login" name="Login Page" component={Login} />
          <Route exact path="/register" name="Register Page" component={Register} />
          <Route exact path="/404" name="Page 404" component={Page404} />
          <Route exact path="/500" name="Page 500" component={Page500} />
          {/*<Route path="/" name="Home" component={DefaultLayout} />*/}
          <PrivateRoute path="/" authed={this.state.isAuthenticated} redirectTo="/login" component={DefaultLayout} text="This is a private route, please login"/>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;

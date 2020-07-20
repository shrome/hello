import React from 'react';
import './index.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Appy,Newinput} from "./component/something/something"
import { Provider } from 'react-redux';
import { store } from "./redux/reducer/reducer"
import Navbar from './component/navbar/navbar';

class App extends React.Component{
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar/>
            <Provider store={store}> 
              <Appy/>
            </Provider>
          </Route>
          <Route exact path="/new">
            <Navbar/>
            <Provider store={store}> 
              <Newinput/>
            </Provider>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;

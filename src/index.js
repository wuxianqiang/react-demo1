import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Home from './components/Home'
import About from './components/About'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
// import {} from 'connected-react-router'
import {Provider} from 'react-redux'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Route path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
      </>
    </Router>
  </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

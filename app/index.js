import React from 'react';
import ReactDom from 'react-dom';
import {Link, Route, BrowserRouter as Router} from 'react-router-dom';
import Home from './containers/Home';
import Second from './containers/Second';
import Roster from './containers/Roster';

ReactDom.render((
  <Router>
    <div>
      <ul>
        <li><Link to="/">主页</Link></li>
        <li><Link to="/hot">热门123</Link></li>
        <li><Link to="/zhuanlan">专栏</Link></li>
      </ul>
      <hr/>
      <Route  exact path="/" component={Home}></Route>
      <Route path="/hot" component={Second} ></Route>
      <Route path="/zhuanlan" component={Roster}></Route>
    </div>
  </Router>
), document.getElementById('app'));
console.log('1234561234123')
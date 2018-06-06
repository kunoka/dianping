import React from 'react';
import { Route, BrowserRouter as Router} from 'react-router-dom';
// import App from '../containers/index';
import Home from '../containers/Home';
import City from '../containers/City';
import User from '../containers/User';
import Search from '../containers/Search';
import Detail from '../containers/Detail';
import Login from '../containers/Login';
// import NotFound from '../containers/404';

export default class RouterMap extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}></Route>
          <Route path="/city" component={City}></Route>
          <Route path="/user" component={User}></Route>
          <Route path="/search/:category/:id" component={Search}></Route>
          <Route exact path="/detail/:id" component={Detail}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/login/:router" component={Login}></Route>
          {/*<Route path="*" component={NotFound}></Route>*/}
        </div>
      </Router>
    );
  }
}
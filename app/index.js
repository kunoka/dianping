import React from 'react';
import ReactDom from 'react-dom';
import RouteMap from './router/routeMap'
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore()
ReactDom.render((
  <Provider store={store}>
    <RouteMap/>
  </Provider>

), document.getElementById('app'));
console.log('1234561234123')
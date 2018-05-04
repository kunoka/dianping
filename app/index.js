import React from 'react';
import ReactDom from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';

export class Home extends React.Component {
  render() {
    return (
      <div>Hello React 1234567890abcdef</div>
    )
  }
}
ReactDom.render(<Home/>, document.getElementById('app'));
console.log("1234561234123")
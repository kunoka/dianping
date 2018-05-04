import React from 'react'
// import {Link} from 'react-router-dom';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initDone: false
    }
  }

  render() {
    return(
      <div>
        {this.state.initDone ? this.props.children : <div>加载中...</div>}
      </div>
    )
  }
}
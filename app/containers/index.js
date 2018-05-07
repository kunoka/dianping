import React from 'react'
// import {Link} from 'react-router-dom';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initDone: false
    }
  }

  componentWillMount() {
    var result = fetch('/api/post', {
      credentials: 'include',
      headers: {
        'Accept': 'application/json, text/palin, */*'
      }
    });
    result.then(res => {
      return res.text()
    }).then(text => {
      console.log(text)
    })
  }
  componentDidMount() {
    console.log(this)
    let that = this;
    setTimeout(function(){
      console.log(this)
      that.setState({initDone:true})
    },1000)
    // setTimeout(() => {
    //   console.log(this)
    //   this.setState({initDone:true})
    // }, 1000);
  }
  render() {
    return(
      <div>
        {this.state.initDone ? this.props.children : <div>加载中...</div>}
      </div>
    )
  }
}
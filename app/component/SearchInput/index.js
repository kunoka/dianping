import React from 'react';
import './style.less';

export default class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.changeHandle = this.changeHandle.bind(this);
    this.KeyUpHandle = this.KeyUpHandle.bind(this);
  }

  componentDidMount() {
    this.setState({
      value: this.props.value || ''
    });
  }

  changeHandle(e) {
    this.setState({
      value: e.target.value
    });
  }

  KeyUpHandle(e) {
    if (e.keyCode !== 13) {
      return;
    }
    this.props.enterHandle(this.state.value);
  }

  render() {
    return (
      <input className="search-input" value={this.state.value} type="text" placeholder="请输入关键字" onChange={this.changeHandle} onKeyUp={this.KeyUpHandle}/>
    );
  }
}
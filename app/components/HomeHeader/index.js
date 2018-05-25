import React from 'react';
import './style.less';
import '../../static/css/common.less';
import '../../static/css/font.css';
import {Link} from 'react-router-dom';
import createHistory from '@/router/history';

export default class HomeHeadr extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kwd: ''
    }
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({
      kwd: e.target.value
    })
  }
  KeyUpHandle (e) {
    if(e.keyCode != 13) {
      return;
    }
    createHistory.push('/search/all/' + encodeURIComponent(this.state.kwd))
  }
  render() {
    return (
      <div id="home-header" className="clear-fix">
        <Link to="/city">
          <div className="home-header-left float-left">
            <span>{this.props.cityName}</span>
            &nbsp;
            <i className="icon-angle-down"></i>
          </div>
        </Link>
        <div className="home-header-right float-right">
          <i className="icon-user"></i>
        </div>
        <div className="home-header-middle">
          <div className="search-container">
            <i className="icon-search"></i>
            <input type="text" value={this.state.kwd} onKeyUp={this.KeyUpHandle.bind(this)} onChange={this.handleChange.bind(this)} placeholder="请输入关键字"/>
          </div>
        </div>

      </div>
    )
  }
}
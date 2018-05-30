import React from 'react';
import './style.less';
import '../../static/css/common.less';
import '../../static/css/font.css';
import {Link, Redirect} from 'react-router-dom';
// import createHistory from '@/router/history';
import SearchInput from 'component/SearchInput'

export default class HomeHeadr extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: '',
      value: ''
    }
    this.enterHandle = this.enterHandle.bind(this);
  }

  componentDidMount() {
  }

  // handleChange(e) {
  //   console.log(e.target.value);
  //   this.setState({
  //     kwd: e.target.value
  //   })
  // }
  // KeyUpHandle (e) {
  //   if(e.keyCode != 13) {
  //     return;
  //   }
  //   createHistory.push('/search/all/' + encodeURIComponent(this.state.kwd))
  // }
  enterHandle(value) {
    this.setState({value: value})
    this.setState({redirect: true})
    // createHistory.push('/search/all/' + encodeURIComponent(value));
  }

  render() {
    if (this.state.redirect) {
      let url = '/search/all/' + encodeURIComponent(this.state.value);
      return <Redirect push to={url} />
    }
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
            <SearchInput value="" enterHandle={this.enterHandle}></SearchInput>
            {/*<input type="text" value={this.state.kwd} onKeyUp={this.KeyUpHandle.bind(this)} onChange={this.handleChange.bind(this)} placeholder="请输入关键字"/>*/}
          </div>
        </div>

      </div>
    )
  }
}
import React from 'react';
import './style.less';
// import createHistory from'@/router/history.js';
import {Link} from 'react-router-dom';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.clickHandle = this.clickHandle.bind(this);
  }

  clickHandle() {
    // this.setState({
    //   url: '/search/category/jingdian'
    // });
    // console.log('url', this.state.url);
  }

  render() {
    // eslint-disable-next-line
    // debugger;
    return (
      <div id="common-header">
        <Link to={this.props.backRouter ? this.props.backRouter : '/'}>
          <span className='back-icon' onClick={this.clickHandle}>
            <i className="icon-chevron-left" />{this.state.url}
          </span>
        </Link>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}
import React from 'react';
import './style.less';
// import createHistory from'@/router/history.js';
import {Link} from 'react-router-dom';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandle = this.clickHandle.bind(this);
  }

  clickHandle() {
  }

  render() {
    // eslint-disable-next-line
    // debugger;
    return (
      <div id="common-header">
        <Link to="/search/category/jingdian">
          <span className='back-icon' onClick={this.clickHandle}>
            <i className="icon-chevron-left"></i>
          </span>
        </Link>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}
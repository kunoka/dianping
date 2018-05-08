import React from 'react';
import './style.less';

export default class HomeHeadr extends React.Component {
  render() {
    return(
      <div className="clear-fix">
        <div className="float-left">
          深圳
          <i className="icon-angle-down"></i>
        </div>
        <div className="float-right">
          <i className="icon-user"></i>
        </div>
        <div className="clear-fix">
          <i className="icon-search"></i>
          <input type="text"/>
        </div>
      </div>
    )
  }
}
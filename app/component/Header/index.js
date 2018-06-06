import React from 'react';
import './style.less';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandle = this.clickHandle.bind(this);
  }
  clickHandle() {
    window.history.back();
  }
  render() {
    return (
      <div id="common-header">
        <span className='back-icon' onClick={this.clickHandle}>
          <i className="icon-chevron-left"></i>
        </span>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}
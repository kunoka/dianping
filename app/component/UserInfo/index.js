import React from 'react';
import './style.less';

export default class UserInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="userinfo">
        <p><i className="icon-user"></i>{this.props.username}</p>
        <p><i className="icon-location"></i>{this.props.city}</p>
      </div>
    );
  }
}
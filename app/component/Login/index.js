import React from 'react';
import './style.less';
import {Link} from 'react-router-dom';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      redirect: false
    };
    this.changeHandle = this.changeHandle.bind(this);
    this.clickHandle = this.clickHandle.bind(this);
  }

  changeHandle(e) {
    this.setState({
      phone: e.target.value
    });
  }

  clickHandle(){
    let username = this.state.phone;
    this.props.loginHandle(username);
    //eslint-disable-next-line
    // debugger;
    // this.setState({
    //   redirect: true
    // })
  }
  render() {
    // eslint-disable-next-line
    // debugger;
    return (
      <div className="login-container">
        <div className="input-container phone-container">
          <i className="icon-mobile2"></i>
          <input type="text" value={this.state.value} onChange={this.changeHandle} placeholder="请输入手机号"/>
        </div>
        <div className="input-container password-container">
          <i className="icon-key"></i>
          <input type="text" placeholder="请输入验证码"/>
          <button>发送验证码</button>
        </div>
        <Link to={this.props.url}>
          <button className="btn-login" onClick={this.clickHandle}>登录</button>
        </Link>
      </div>
    );
  }
}
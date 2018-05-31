import React from 'react';
import './style.less';
import Header from '@/component/Header';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as UserInfoActionsFromOtherFile from '../../actions/userinfo';
import {Redirect} from 'react-router-dom';
// import userinfo from '../../reducers/userinfo';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checking: true,
      redirect: false
    }
  }

  componentDidMount() {
    this.doCheck();
  }

  //登录成功之后的处理
  loginHandle(username) {
    // 保存用户名
    const actions = this.props.userinfoActions;
    let userinfo = this.props.userinfo;
    userinfo.username = username;
    actions.update(userinfo);
    //跳转链接
    const router = this.props.match.params.router;
    if (router) {
      //跳转到指定页面
      this.setState({
        redirect: true
      })
    }else{
      //跳转到默认页面 用户中心
      this.goUserPage()
    }
  }
  doCheck() {
    const userinfo = this.props.userinfo;
    if(userinfo.username) {
      // 已经登录
      this.gotUserPage();
    }else{
      // 尚未登录
      this.setState({
        checking: false
      })
    }
  }

  render() {
    if (this.state.redirect) {
      let url = '/';
      return <Redirect push to={url} />
    }
    return (
      <div>
        <Header title="登录"></Header>
        {
          this.state.checking
            ? <div>{/*等待中*/}</div>
            : <div>这里将展示登录组件</div>
        }
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    userinfo: state.userinfo
  }

}
function mapDispatchToProps(dispatch)
{
  return {
    userinfoActions: bindActionCreators(UserInfoActionsFromOtherFile, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
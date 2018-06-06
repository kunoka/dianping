import React from 'react';
import './style.less';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import * as UserActions from '@/actions/userinfo';
import * as storeActionsFromFile from '@/actions/store';
import BuyAndStore from '@/component/BuyAndStore';
// import userinfo from '../../../reducers/userinfo';
import {Redirect} from 'react-router-dom';

class Buy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isStore: false,
      redirect: false
    };
    this.buyHandle = this.buyHandle.bind(this);
    this.storeHandle = this.storeHandle.bind(this);
  }

  componentDidMount() {
    // console.log('123', this.props.store);
    // console.log('456', this.props.storeActions);
    // this.buyHandle();
    this.checkStoreState();
  }

  buyHandle() {
    //验证登录
    const loginFlag = this.loginCheck();
    if (!loginFlag) {
      return;
    }
    // 购买流程

    // 跳转到用户主页

  }
  // 检验当前商户是否已经被收藏
  checkStoreState() {
    const id = this.props.id;
    const store = this.props.store;
    store.some(item => {
      if(item.id === id) {
        this.setState({
          isStore: true
        });
        return true;
      }
    });
  }
  // 收藏事件
  storeHandle() {
    // 验证登录
    const loginFlag = this.loginCheck();
    if (!loginFlag) {
      return;
    }
    const id = this.props.id;
    const storeActions = this.props.storeActions;
    // 被收藏过，取消收藏
    if (this.state.isStore) {
      // eslint-disable-next-line
      // debugger;
      storeActions.rm({id: id});
    } else { // 增加收藏
      storeActions.add({id: id});
    }
    this.setState({
      isStore: !this.state.isStore
    });
  }

  //验证登录
  loginCheck() {
    const userinfo = this.props.userinfo;
    if (!userinfo.username) {
      // 跳转到登录页面
      this.setState({
        redirect: true
      });
      return false;
    }
    return true;
  }

  render() {
    if (this.state.redirect) {
      const id = this.props.id;
      const url = '/login/' + encodeURIComponent('/detail/' + id);
      console.log(url);
      return (
        <Redirect push to={url}/>
      );
    }
    return (
      <div>
        <BuyAndStore isStore={this.state.isStore} buyHandle={this.buyHandle} storeHandle={this.storeHandle}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userinfo: state.userinfo,
    store: state.store
  };
}

function mapPropsToProps(dispatch) {
  return {
    storeActions: bindActionCreators(storeActionsFromFile, dispatch)
  };
}

export default connect(mapStateToProps, mapPropsToProps)(Buy);
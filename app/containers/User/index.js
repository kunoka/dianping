import React from 'react';
import Header from '@/component/Header';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import UserInfo from '@/component/UserInfo';
import Spliter from '@/component/Spliter';
import OrderList from './subpage/OrderList';

class User extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      redirect: false
    };
  }
  componentDidMount() {
    const userinfo = this.props.userinfo;
    console.log('userinfo', userinfo);
    const username = userinfo.username;
    if(!username) {
      this.setState({
        redirect: false
      });
    }
  }
  render() {
    if (this.state.redirect) {
      let url = '/login/' + encodeURIComponent('/user');
      return <Redirect push to={url} />;
    }
    const userinfo = this.props.userinfo;
    return(
      <div className="user">
        <Header title="用户中心" backRouter="/"/>
        <UserInfo username={userinfo.username} city={userinfo.cityName}></UserInfo>
        <Spliter />
        <OrderList username={userinfo.username}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userinfo: state.userinfo
  };
}

function mapDispatchToProps() {
  return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(User);
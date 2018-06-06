import React from 'react';
import Header from '@/component/Header';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
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
        redirect: true
      });
    }
  }
  render() {
    if (this.state.redirect) {
      let url = '/login/' + encodeURIComponent('/user');
      return <Redirect push to={url} />;
    }
    return(
      <div>
        <Header title="用户中心" backRouter="/"/>
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
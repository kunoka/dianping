import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as UserInfoActionsFromOtherFile from '@/actions/userinfo';
import Header from '@/component/Header';
class City extends React.Component {
  componentDidMount() {
    console.log(this.props.userinfo)
    console.log(this.props.userinfoActions)
  }

  render() {
    return (
      <Header title="选择城市"></Header>
    )
  }
}

function mapStateToProps(state) {
  return {
    userinfo: state.userinfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userinfoActions: bindActionCreators(UserInfoActionsFromOtherFile,dispatch)
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(City)
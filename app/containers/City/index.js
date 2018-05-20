import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as UserInfoActionsFromOtherFile from '@/actions/userinfo';
class City extends React.Component {
  componentDidMount() {
    console.log(this.props.userinfo)
    console.log(this.props.userinfoActions)
  }

  render() {
    return (
      <div>City</div>
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
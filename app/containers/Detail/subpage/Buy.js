import React from 'react';
import './style.less';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import * as UserActions from '@/actions/userinfo';
import BuyAndStore from '@/component/BuyAndStore';

class Buy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isStore: false
    }
    this.buyHandle = this.buyHandle.bind(this);
    this.storeHandle = this.storeHandle.bind(this);
  }

  buyHandle() {

  }

  storeHandle() {

  }
  render() {
    return (
      <div>
        <BuyAndStore isStore={this.state.isStore} buyHandle={this.buyHandle} storeHandle={this.storeHandle}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    userinfo: state.userinfo
  }
}
function mapPropsToProps(dispatch) {
  return {
    UserActions: bindActionCreators(dispatch)
  }
}
export default connect(mapStateToProps,mapPropsToProps)(Buy)
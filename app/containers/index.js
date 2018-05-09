import React from 'react';
import localStore from '../util/localStore';
import {CITYNAME} from '../config/localStoreKey';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as UserInfoActionsFromOtherFile from '../actions/userinfo';
import HomeHeader from '../components/HomeHeader';
import '../static/css/common.less';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initDone: false
    }
  }

  componentWillMount() {
    var result = fetch('/api/post', {
      credentials: 'include',
      headers: {
        'Accept': 'application/json, text/palin, */*'
      }
    });
    result.then(res => {
      return res.text();
    }).then(text => {
      console.log(text);
    })
  }
  componentDidMount() {
    // 从localstorage里面获取城市
    let cityName = localStore.getItem(CITYNAME);
    if (cityName == null) {
      cityName = '深圳'
    }
    // 将城市信息存储到 Redux 中
    this.props.userinfoActions.update({cityName: cityName})
    this.props.userinfoActions.test({
      time: new Date().toISOString()
    })
    this.setState({
      initDone: true
    })
  }
  render() {
    return(
      <HomeHeader></HomeHeader>
    )
  }
}

function mapStateToProps(state) {
  return {
    userinfo: state.userinfo,
    tmptest: state.tmptest
  }
}
function mapDispatchToProps(dispatch) {
  return {
    userinfoActions: bindActionCreators(UserInfoActionsFromOtherFile,dispatch)
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(App)
import React from 'react';
import HomeHeader from '../../components/HomeHeader';
import {CITYNAME} from '../../config/localStoreKey';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as UserInfoActionsFromOtherFile from '../../actions/userinfo';
import localStore from '../../util/localStore';
import Category from '../../Components/Category';
class Home extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    // 从localstorage里面获取城市
    let cityName = localStore.getItem(CITYNAME);
    if (cityName == null) {
      cityName = '北京'
    }
    // 将城市信息存储到 Redux 中
    this.props.userinfoActions.change({
      cityName: cityName
    })

  }

  render() {
    return (
      <div>
        <div>
          <HomeHeader cityName={this.props.userinfo ? this.props.userinfo.cityName : ''}></HomeHeader>
          <Category></Category>
        </div>
      </div>
    )
  }
}

function

mapStateToProps(state) {
  return {
    userinfo: state.userinfo,
    tmptest: state.tmptest
  }
}

function

mapDispatchToProps(dispatch) {
  return {
    userinfoActions: bindActionCreators(UserInfoActionsFromOtherFile, dispatch)
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

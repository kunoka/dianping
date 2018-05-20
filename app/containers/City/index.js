import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as UserInfoActionsFromOtherFile from '@/actions/userinfo';
import Header from '@/component/Header';
import CurrentCity from '@/component/CurrentCity';
import CityList from '@/component/CityList';
import localStore from '../../util/localStore';
class City extends React.Component {
  componentDidMount() {
    console.log(this.props.userinfo)
    console.log(this.props.userinfoActions)
  }

  changeCity(cityName) {
    console.log(cityName)
    this.props.userinfoActions.update({cityName});
    localStore.setItem('cityName', cityName)
  }

  render() {
    return (
      <div>
        <Header title="选择城市"></Header>
        <CurrentCity cityName={this.props.userinfo.cityName}></CurrentCity>
        <CityList clickFn={this.changeCity.bind(this)}></CityList>
      </div>
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
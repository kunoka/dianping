import React from 'react';
import './style.less';

export default class CityList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotCity: ['北京', '上海', '杭州', '广州', '苏州', '深圳', '南京', '天津', '重庆', '厦门', '武汉', '西安']
    }
    this.renderHotCity = this.renderHotCity.bind(this);
    // this.clickHandle= this.clickHandle.bind(this);
  }

  renderHotCity() {
    const cityList = this.state.hotCity;
    return (
      <ul className="hotcity-list">
        {cityList.map((city, index) => {
          return (<li onClick={this.clickHandle.bind(this,city)} className="hotcity-item" key={index}><span>{city}</span></li>)
        })}
      </ul>
    )
  }

  clickHandle(cityName) {
    // //eslint-disable-next-line
    // debugger
    // console.log(cityName)
    this.props.clickFn(cityName);
  }
  render() {
    return (
      <div className="hotcity-container">
        <div>热门城市</div>
        {this.renderHotCity()}
      </div>
    )
  }
}
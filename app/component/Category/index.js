import React from 'react';
import ReactSwipe from 'react-swipe';
import './style.less';
import {getAdData} from '../../../fetch/home/home';

export default class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }
  }

  componentDidMount() {
    let result = getAdData();
    console.log(result)
  }
  render() {
    var opt = {
      auto: 2000,
      callback: function (index) {
        console.log(index)
        this.setState({index: index})
      }.bind(this)
    }
    return (
      <div id="home-category">
        <ReactSwipe className="carousel" swipeOptions={opt}>
          <div className="carousel-item">
            <ul className="clear-fix">
              <li className="float-left jingdian">景点</li>
              <li className="float-left ktv">KTV</li>
              <li className="float-left gouwu">购物</li>
              <li className="float-left shenghoufuwu">生活服务</li>
              <li className="float-left jianshenyundong">健身运动</li>
              <li className="float-left meifa">美发</li>
              <li className="float-left qinzi">亲子22</li>
              <li className="float-left ciaochikuaican">小吃快餐</li>
              <li className="float-left zizhucan">自助餐</li>
              <li className="float-left jiuba">酒吧</li>
            </ul>
          </div>
          <div className="carousel-item">
            <ul className="clear-fix">
              <li className="float-left jingdian">美食</li>
              <li className="float-left ktv">电影</li>
              <li className="float-left gouwu">酒店</li>
              <li className="float-left shenghoufuwu">休闲娱乐</li>
              <li className="float-left jianshenyundong">外卖</li>
              <li className="float-left meifa">火锅</li>
              <li className="float-left qinzi">丽人</li>
              <li className="float-left ciaochikuaican">度假出行</li>
              <li className="float-left zizhucan">足疗按摩</li>
              <li className="float-left jiuba">周边游</li>
            </ul>
          </div>
          <div className="carousel-item">
            <ul className="clear-fix">
              <li className="float-left jingdian">123</li>
              <li className="float-left spa">SPA</li>
              <li className="float-left jiehun">结婚</li>
              <li className="float-left xuexipeixun">学习培训</li>
              <li className="float-left xican">西餐</li>
              <li className="float-left huochejipiao">火车机票</li>
              <li className="float-left shaokao">烧烤</li>
              <li className="float-left jiazhuang">家装</li>
              <li className="float-left chongwu">宠物</li>
              <li className="float-left quanbufenlei">全部分类</li>
            </ul>
          </div>
        </ReactSwipe>
        <div className="index-container">
          <ul>
            <li className={this.state.index === 0 ? 'select' : ''}></li>
            <li className={this.state.index === 1 ? 'select' : ''}></li>
            <li className={this.state.index === 2 ? 'select' : ''}></li>
          </ul>
        </div>
      </div>
    )
  }
}
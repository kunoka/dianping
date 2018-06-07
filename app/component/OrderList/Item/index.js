import React from 'react';
import './style.less';

export default class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props.data;
    return (
      <div className="item">
        <div className="img">
          <img src={data.img} alt=""/>
        </div>
        <div className="content">
          <div className="title">商户：{data.title}</div>
          <div className="count">数量：{data.count}</div>
          <div className="price">价格：￥{data.price}</div>
          <button>评价</button>
        </div>
      </div>
    );
  }
}
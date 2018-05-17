import React from 'react';
import './style.less';

export default class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props.data;
    return (
      <div className="list-item">
        <div className="item-img-container">
          <img src={data.img} alt={data.title}/>
        </div>
        <div className="item-content">
          <div className="item-title-container">
            <div className="title">{data.title}</div>
            <div className="distance">{data.distance}</div>
          </div>
          <div className="item-subtitle">{data.subTitle}</div>
          <div className="item-price-container">
            <div className="price">￥{data.price}</div>
            <div className="number">已售{data.mumber}</div>
          </div>

        </div>
      </div>

    )
  }
}
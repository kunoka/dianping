import React from 'react';
import './style.less';
import Star from '@/component/Star';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props.data;
    return (
      <div id="detail-info-container">
        <div className="info-container">
          <div className="info-img-container">
            <img src={data.img} alt=""/>
          </div>
          <div className="info-content">
            <h1>{data.title}</h1>
            <div className="star-container">
              <Star star={data.star} />
              <span className="price">￥{data.price}</span>
            </div>
            <p className="sub-title">{data.subTitle}</p>
          </div>
        </div>
        <p className="desc" dangerouslySetInnerHTML={{__html: data.desc}}></p>
      </div>
    );
  }
}
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
      <div>
        <img src={data.img} alt=""/>
        <div className="">{data.title}</div>
        <Star className="" star={data.star} />
        <div className="">{data.price}</div>
        <div className="">{data.subTitle}</div>
        <div className="" dangerouslySetInnerHTML={{__html: data.desc}}></div>
      </div>
    )
  }
}
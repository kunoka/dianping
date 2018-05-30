import React from 'react';
import './style.less';

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
        <div className="">{data.star}</div>
        <div className="">{data.price}</div>
        <div className="">{data.subTitle}</div>
        <div className="" dangerouslySetInnerHTML={{__html: data.desc}}></div>
      </div>
    )
  }
}
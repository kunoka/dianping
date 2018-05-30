import React from 'react';
import './style.less';
import Star from '@/component/Star';

export default class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('===item===')
    console.log(this.props.data)
  }

  render() {
    const item = this.props.data;
    return (
      <div className="comment-container">
        <div className="username-wrapper">
          <i className="icon-user"></i>
          <div className="username">{item.username}</div>
        </div>
        <Star className="Star" star={item.star}></Star>
        <div className="comment">{item.comment}</div>
      </div>

    )
  }
}
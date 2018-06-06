import React from 'react';
import './style.less';

export default class BuyAndStore extends React.Component {
  constructor(props) {
    super(props);
    this.storeHandleClick = this.storeHandleClick.bind(this);
  }

  storeHandleClick() {
    this.props.storeHandle();
  }
  render() {
    return (
      <div className="buyandstore">
        <div className="store">
          <button className={this.props.isStore ? 'select' : ''} onClick={this.storeHandleClick}>{this.props.isStore ? '已收藏' : '收藏'}</button>
        </div>
        <div className="buy">
          <button>购买</button>
        </div>
      </div>
    );
  }
}
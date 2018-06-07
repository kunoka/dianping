import React from 'react';
import './style.less';
import {getOrderList} from '../../fetch/orderlist/orderlist';

export default class OrderList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    // 获取订单信息
    const username = this.props.username;
    if (username) {
      this.loadOrderList(username);
    }
  }
  loadOrderList(username) {
    const result = getOrderList(username);
    result.then(res => {
      return res.json();
    }).then(json => {
      console.log(json);
      this.setState({
        data: json
      });
    });
  }
  render() {
    return (
      <div className="order-list-container">
        <h2>您的订单</h2>
        {
          this.state.data.length ? <div>{this.state.data.length}</div> : ''
        }
      </div>
    );
  }
}
import React from 'react';
import './style.less';
import {getOrderList, postComment} from '../../fetch/orderlist/orderlist';
import OrderListComponent from '@/component/OrderList';

export default class OrderList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.submitComment = this.submitComment.bind(this);
  }

  componentDidMount() {
    // 获取订单信息
    const username = this.props.username;
    if (username) {
      this.loadOrderList(username);
    }
  }
  // 获取列表数据
  loadOrderList(username) {
    const result = getOrderList(username);
    result.then(res => {
      return res.json();
    }).then(json => {
      console.log(json);
      this.setState({
        data: json
      });
    }).catch(ex => {
      // 开发环境下提示error
      /*global __DEV__*/
      if(__DEV__) {
        console.error('用户主页"订单列表"获取数据报错,', ex.meassage);
      }
    });
  }
  // 提交评论
  submitComment(id, value, callback) {
    const result = postComment(id, value);
    result.then(res => {
      return res.json();
    }).then(json => {
      if(json.errno === 0) {
        // 已经评价，修改状态
        callback();
      }
    });
  }
  render() {
    return (
      <div className="order-list-container">
        <h2>您的订单</h2>
        {
          this.state.data.length ? <OrderListComponent data={this.state.data} submitComment={this.submitComment} /> : ''
        }
      </div>
    );
  }
}
import React from 'react';
import './style.less';
import CommentList from '@/component/CommentList';
import LoadMore from '@/component/LoadMore';
import {getCommentData} from '@/containers/fetch/detail/detail';

// 初始化一个组件的 state
const initialState = {
  data: [], // 渲染的数据
  hasMore: false, // 是否有更多需要加载的数据
  isLoadingMore: false, // 是否正在加载
  page: 0 // 下一页
};

export default class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    // 获取首页数据
    this.loadFirstPageData();
  }

  // 获取首屏数据
  loadFirstPageData() {
    let page = 0;
    let id = this.props.id;
    let result = getCommentData(id, page);
    this.resultHandle(result);
  }

  // 获取下一页数据
  loadMoreData() {
    // 记录状态
    this.setState({
      isLoadingMore: true
    });
    const cityName = this.props.cityName;
    const page = this.state.page;
    const result = getCommentData(cityName, page);
    this.resultHandle(result);
    // 增加 page 的计数
    this.setState({
      page: page + 1,
      isLoadingMore: false
    });
  }

  resultHandle(result) {
    result.then(res => {
      return res.json();
    }).then(json => {
      const hasMore = json.hasMore;
      const data = json.data;
      this.setState({
        data: this.state.data.concat(data),
        hasMore: hasMore
      });
    });
  }

  render() {
    return (
      <div>
        <h2 className="home-list-title">用户点评</h2>
        <div>
          {this.state.data.length ? <CommentList data={this.state.data}></CommentList> : <div>加载中...</div>}
        </div>
        <div>
          {this.state.hasMore ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}></LoadMore> : ''}
        </div>
      </div>
    );
  }
}
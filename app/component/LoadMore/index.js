import React from 'react';
import './style.less';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  loadMoreHandle() {
    // 执行传递过来的loadMoreData函数
    this.props.loadMoreFn()
  }
  render() {
    const isLoadingMore = this.props.isLoadingMore;
    return (
      <div className="load-more">
        {
          isLoadingMore ? <span>'加载中...'</span> :
            <span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>
        }
      </div>
    )
  }
}
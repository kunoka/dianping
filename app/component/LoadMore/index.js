import React from 'react';
import './style.less';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const loadMoreFn = this.props.loadMoreFn;
    const wrapper = this.refs.wrapper;
    let timeoutId;
    function callback () {
      const top = wrapper.getBoundingClientRect().top;
      const windowHeight = window.screen.height;
      if(top && top < windowHeight) {
        // console.log(top,windowHeight)
        // 当 wrapper 滚动到暴露在页面的可视范围内时刷新
        loadMoreFn()
      }
    }
    window.addEventListener('scroll', function () {
      if (this.props.isLoadingMore) {
        return;
      }
      if(timeoutId) {
        clearTimeout(timeoutId);
      }
      // 节流
      timeoutId = setTimeout(callback, 50);
    }.bind(this), false)
  }

  loadMoreHandle() {
    // 执行传递过来的loadMoreData函数
    this.props.loadMoreFn()
  }

  render() {
    const isLoadingMore = this.props.isLoadingMore;
    return (
      <div className="load-more" ref="wrapper">
        {
          isLoadingMore ? <span>'加载中...'</span> :
            <span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>
        }
      </div>
    )
  }
}
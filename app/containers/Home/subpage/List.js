import React from 'react';
import {getListData} from 'containers/fetch/home/home';
import './style.less';
import ListComponent from 'component/List';
import LoadMore from 'component/LoadMore';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [], // 渲染的数据
      hasMore: false, // 是否有更多需要加载的数据
      isLoadingMore: false, // 是否正在加载
      page: 1 // 下一页
    }
  }

  componentDidMount() {
    // 获取首页数据
    this.loadFirstPageData();
  }

  // 获取首屏数据
  loadFirstPageData() {
    const cityName = this.props.cityName;
    const result = getListData(cityName, 0);
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
    const result = getListData(cityName, page);
    this.resultHandle(result);
    // 增加 page 的计数
    this.setState({
      page: page + 1,
      isLoadingMore: false
    });
  }
  resultHandle(result) {
    result.then(res => {
      return res.json()
    }).then(json => {
      console.log(json)
      const hasMore = json.hasMore;
      const data = json.data;
      this.setState({
        data: this.state.data.concat(data),
        hasMore: hasMore
      })
    })
  }
  render() {
    return (
      <div>
        <h2 className="home-list-title">猜你喜欢</h2>
        <div>
          {this.state.data.length ? <ListComponent data={this.state.data}></ListComponent> : <div>加载中...</div>}
        </div>
        <div>
          {this.state.hasMore ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}></LoadMore> : ''}
        </div>

      </div>
    )
  }
}
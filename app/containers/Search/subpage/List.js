import React from 'react';
import {getListData} from 'containers/fetch/home/home';
import ListComponent from 'component/List';
import LoadMore from 'component/LoadMore';

// 初始化一个组件的 state
const initialState = {
  data: [], // 渲染的数据
  hasMore: false, // 是否有更多需要加载的数据
  isLoadingMore: false, // 是否正在加载
  page: 0 // 下一页
}

export default class SearchList extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    // eslint-disable-next-line
    // 获取首页数据
    this.loadFirstPageData();
  }

  componentDidUpdate() {
  }
  // 获取首屏数据
  loadFirstPageData() {
    const cityName = this.props.cityName;
    const keyword = this.props.keyword || '';
    const category = this.props.category;
    const result = getListData(cityName, 0, category, keyword);
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
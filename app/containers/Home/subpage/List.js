import React from 'react';
import {getListData} from 'containers/fetch/home/home';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      hasMore: false
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

  resultHandle(result) {
    result.then(res => {
      return res.json()
    }).then(json => {
      console.log(json)
      this.setState({
        data: json.data,
        hasMore: json.hasMore
      })
    })
  }
  render() {
    return (
      <div>
        <h2 className="home-list-title"></h2>
        <div>
          {this.state.hasMore.toString()}
          {this.state.data.length}
        </div>
      </div>
    )
  }
}
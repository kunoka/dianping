import React from 'react';
import './style.less';
import {getInfoData} from '@/containers/fetch/detail/detail';

export default class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: false
    }
  }

  componentDidMount() {
    const id = this.props.id;
    let result = getInfoData(id);
    result.then((res) => {
      return res.json()
    }).then((json) => {
      console.log(json);
      this.setState({
        info: json
      })
    })
  }
  render() {
    return (
      <div>{this.state.info ? '有数据' : ''}</div>
    )
  }
}
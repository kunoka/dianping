import React from 'react';
import './style.less';
import {getInfoData} from '@/containers/fetch/detail/detail';
import DetailInfo from '@/component/DetailInfo';

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
      <div>
        {this.state.info ? <DetailInfo data={this.state.info}></DetailInfo> : ''}
      </div>
    )
  }
}
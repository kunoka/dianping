import React from 'react';
import { getAdData } from '../../fetch/home/home';
import HomeAd from '../../../component/HomeAd';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    const result = getAdData();
    result.then((res) => {
      // eslint-disable-next-line
      // debugger//
      return res.json();
    }).then((json) => {
      const data = json;
      if (data.length) {
        this.setState({
          data: data
        })
      }
    })
  }

  render() {
    return (
      <div>{
        this.state.data.length ? <HomeAd data={this.state.data}></HomeAd> : 'loading'
      }
      </div>
    )
  }
}
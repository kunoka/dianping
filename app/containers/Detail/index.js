import React from 'react';
import Header from '@/component/Header';

export default class Detail extends React.Component {
  render() {
    return (
      <div>
        <Header title="商户详情"/>
        {this.props.match.params.id}
      </div>
    )
  }
}
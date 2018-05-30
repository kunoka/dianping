import React from 'react';
import Header from '@/component/Header';
import Info from './subpage/Info';

export default class Detail extends React.Component {
  render() {
    return (
      <div>
        <Header title="商户详情"/>
        <Info id={this.props.match.params.id} />
      </div>
    )
  }
}
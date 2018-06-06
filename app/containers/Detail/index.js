import React from 'react';
import Header from '@/component/Header';
import Info from './subpage/Info';
import Comment from './subpage/Comment';
import Spliter from '@/component/Spliter';
import Buy from  './subpage/Buy';

export default class Detail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this);
  }
  render() {
    const id = this.props.match.params.id;
    return (
      <div>
        <Header title="商户详情"/>
        <Info id={id} />
        <Buy id={id} />
        <Spliter />
        <Comment id={id} />
      </div>
    );
  }
}
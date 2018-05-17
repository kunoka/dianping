import React from 'react';
import './style.less';

export default class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props.data;
    return (
      <p>{data.title}</p>
    )
  }
}
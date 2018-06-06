import React from 'react';
import Item from './Item';
import './style.less';

export default class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>{this.props.data.map((item,index) => {
        return <Item key={index} data={item} category={this.props.category} id={this.props.id}></Item>;
      })}</div>
    );
  }
}
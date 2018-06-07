import React from 'react';
import './style.less';
import Item from './Item';

export default class OrderList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props.data;
    console.log(data);
    return (
      <div>
        {
          data.map((item, index) => {
            return <Item key={index} data={item} />;
          })
        }
      </div>
    );
  }
}
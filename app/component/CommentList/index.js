import React from 'react';
import './style.less';
import Item from './Item';

export default class CommentList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.data)
  }
  render() {
    return (
      <div>
        {this.props.data.map((item, index) => {
          return(<Item key={index} data={item} />)
        })}
      </div>
    )
  }
}
import React from 'react';

export default class Search extends React.Component {
  render() {
    return(
      <div>
        <h1>Search</h1>
        <div>{this.props.match.params.category}</div>
        <div>{this.props.match.params.id}</div>
      </div>
    )
  }
}
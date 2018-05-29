import React from 'react';
import SearchHeader from '@/component/SearchHeader';

export default class Search extends React.Component {
  render() {
    return(
      <div>
        <SearchHeader value={this.props.match.params.id}></SearchHeader>
      </div>
    )
  }
}
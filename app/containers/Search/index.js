import React from 'react';
import SearchHeader from '@/component/SearchHeader';
import SearchList from './subpage/List';

export default class Search extends React.Component {
  render() {
    return (
      <div>
        <SearchHeader value={this.props.match.params.id}></SearchHeader>
        <SearchList category={this.props.match.params.category} keyword={this.props.match.params.id} />
      </div>
    );
  }
}
import React from 'react';
import './style.less';
import '@/static/css/font.css';
import SearchInput from 'component/SearchInput';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';

export default class SearchHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value:'',
      redirect: false,
      nextUrl: ''
    };
    // this.clickHandle = this.clickHandle.bind(this);
    this.enterHandle = this.enterHandle.bind(this);
  }
  enterHandle(value) {
    this.setState({value: value});
    this.setState({
      nextUrl: '/search/all/' + encodeURIComponent(value)
    });
    this.setState({redirect: true});
    // createHistory.push('/search/all/' + encodeURIComponent(value));
  }
  clickHandle() {

  }
  render() {
    if (this.state.redirect) {
      let url = '/search/all/' + encodeURIComponent(this.state.value);
      return <Redirect push to={url} />;
    }
    return (
      <div id="search-header">
        <Link to={this.state.nextUrl}>
          <span className="back-icon" onClick={this.clickHandle}>
            <i className="icon-chevron-left"></i>
          </span>
        </Link>
        <div className="input-container">
          <i className="icon-search"></i>
          &nbsp;
          <SearchInput value={this.props.value || ''} enterHandle={this.enterHandle}></SearchInput>
        </div>
      </div>
    );
  }
}
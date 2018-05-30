import React from 'react';
import './style.less';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    // this.renderStar = this.renderStar.bind(this);
  }

  renderStar() {
    // debugger
    let star = this.props.star || 0;
    if (star > 5) {
      star = star % 5;
    }
    const stars = [1, 2, 3, 4, 5];
    return(
      stars.map((item, index) => {
        const lightClass = star >= item ? 'light' : '';
        return <i key={index} className={'icon-star-full ' + lightClass}/>
      })
    )
  }

  render() {

    return (
      <div>
        {this.renderStar()}
      </div>
    )
  }
}
import React from 'react';
import './style.less';
import '../../static/css/common.less';
export default class HomeAd extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props.data;
    // console.log('=====data======');
    // console.log(data);
    return (
      <div id='home-ad'>
        <h2>超值特惠</h2>
        <div className='ad-container clear-fix'></div>
        {
          data.map((item, index) => {
            return (
              <div key={index} className="ad-item float-left">
                <a className='HomeAd-item' href={item.link} target='_blank'>
                  <img src={item.img} alt="" style={{width: '100px'}}/>
                </a>
              </div>
            )
          })
        }
      </div>
    )
  }
}
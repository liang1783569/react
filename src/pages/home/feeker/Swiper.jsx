import React, { Component } from 'react'

import { Carousel} from 'antd-mobile';

export default class Swiper extends Component {
      state = {
        data: [],
        imgHeight: 180,
      }
      componentDidMount() {
        setTimeout(() => {
          this.setState({
            data: [
            'https://banner01.feekr.com/2019/12/01/0526105de3873250613.jpg!750X360',
            'https://banner01.feekr.com/2019/12/03/0412285de618ec07797.png!750X360',
            'https://banner01.feekr.com/2019/12/03/0413355de6192f8a10d.png!750X360',
            'https://banner01.feekr.com/2019/12/03/0415445de619b0a6de6.png!750X360',
            'https://banner01.feekr.com/2019/12/03/0418035de61a3bee6e5.png!750X360',
            'https://banner01.feekr.com/2019/12/03/0416395de619e72d989.png!750X360',
            'https://banner01.feekr.com/2019/12/03/0420185de61ac2d3ffe.png!750X360',
            ]
          });
        }, 100);
      }
      render() {
        return (
            <Carousel
              autoplay={true}
              infinite
            >
              {this.state.data.map(val => (
                <a
                  key={val}
                  href="http://www.alipay.com"
                  style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                >
                  <img
                    src={val}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                  />
                </a>
              ))}
            </Carousel>
        );
      }
    }

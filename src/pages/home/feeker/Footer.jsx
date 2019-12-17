import React, { Component } from 'react'
import { FooterWrap } from './list-item'
import { withRouter } from 'react-router-dom'

@withRouter
class Footer extends Component {
    handleClick = path => {
        return ()=>{
            this.props.history.push('/'+path)
        }
    }

    render() {
        return (
            <FooterWrap>
                <h3>Feeker</h3>
                <h6>©2016Feekr</h6>
                <div className='first-box'>
                    <img src='https://m.feekr.com/resource/img/icon/feekr_code.png' alt="" />
                </div>
                <p>长按二维码或添加微信：feekr_trip</p>
                <p>关注feekr小众旅行, 获取最新玩法攻略</p>
                <div className="second-box">
                    <p onClick={this.handleClick('about')}>关于Feekr</p>
                    <p onClick={this.handleClick('callus')}>联系我们</p>
                </div>
            </FooterWrap>
        )
    }
}
export default Footer
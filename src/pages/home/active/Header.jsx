import React, { Component } from 'react'

import { HeaderWrap } from './styled-active'
import { withRouter } from 'react-router-dom'

@withRouter
class Header extends Component {
    handleClick = path => {
        return ()=>{
            this.props.history.push('/'+path)
        }
    }
    render() {
        return (
            <HeaderWrap
                width='0 0 1px 0'
            >
                <img src="http://m.cycang.com/Public/build/img/footer-icon/v4/home.png" onClick={this.handleClick('layout')} alt="" />
                <h4>{this.props.title}</h4>
                <img src="http://m.cycang.com/Public/build/img/footer-icon/v4/user.png" onClick={this.handleClick('mine')} alt="" />
            </HeaderWrap>
        )
    }
}
export default Header

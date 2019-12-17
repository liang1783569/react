import React, { Component } from 'react'

import { SingleMenuWrap } from './styled-list'
export default class SingleMenu extends Component {
    state={
        display:'none'
    }
    handleClick = () => {
        if(this.state.display==='none'){
            this.setState(
                {
                    display:'block'
                }
            )
        }else{
            this.setState(
                {
                    display:'none'
                }
            )
        }
            
          

    }
    render() {
        return (
            <SingleMenuWrap>
                <p onClick={this.handleClick}>国内酒店</p>
                <ul style={{display:this.state.display}}>
                    <li>全部分类</li>
                    <li> 国内酒店</li>
                    <li>国外酒店</li>
                    <li>周边游</li>
                    <li>品牌酒店</li>
                    <li>精美民宿</li>
                  
                </ul>
            </SingleMenuWrap>

        )
    }
}

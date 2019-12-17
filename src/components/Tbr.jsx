import React, { Component } from 'react'
import { TbrWrap } from './styled-tables'
// import TbrTitle from './TbrTitle'

export default class Tbr extends Component {
    
    render() {
        return (
            <TbrWrap>
                <div>{this.props.title}</div>
                <div className="tbr-center"></div>
                <div className="tbr-right">
                    更多
                </div>
            </TbrWrap>
        )
    }
}

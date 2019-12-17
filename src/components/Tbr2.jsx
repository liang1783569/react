import React, { Component } from 'react'

import { Tbr2Wrap } from './styled-tables'

export default class Tbr2 extends Component {
    render() {
        return (
            <Tbr2Wrap>
                <div></div>
                <h3>{this.props.title}</h3>
                <p>{this.props.content}</p>
                {
                    this.props.title==='攻略资讯' && (
                        <span className="tbr2-right">
                        更多
                        </span>
                    )
                }
            </Tbr2Wrap>
        )
    }
}

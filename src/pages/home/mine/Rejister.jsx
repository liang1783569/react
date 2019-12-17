import React, { Component } from 'react'

import { RejisterWrap } from './styled-mine'
export default class Rejister extends Component {
    render() {
        return (
            <RejisterWrap>
                <p>
                    手机号
                    <input placeholder="仅支持中国大陆手机号" type="tel"></input>
                </p>
                <p>
                    密码
                    <input placeholder="请输入密码" type="tel"></input>
                </p>
                <p>
                    确认密码
                    <input placeholder="请输入密码" type="tel"></input>
                </p>
                <button className='btn'>
                    注册
                </button>
            </RejisterWrap>
        )
    }
}

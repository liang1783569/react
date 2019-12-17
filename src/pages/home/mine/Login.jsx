import React, { Component } from 'react'

import { LoginWrap } from './styled-mine'
export default class Login extends Component {
    render() {
        return (
            <LoginWrap>
                <p>
                    手机号
                    <input placeholder="仅支持中国大陆手机号" type="tel"></input>
                </p>
                <p>
                    密码
                    <input placeholder="请输入密码" type="tel"></input>
                </p>
                <p>
                    验证码
                    <input placeholder="请输入验证码" type="tel"></input>
                    <button>
                        获取验证码
                    </button>
                </p>
                <button className='btn'>
                    登录
                </button>
            </LoginWrap>
        )
    }
}

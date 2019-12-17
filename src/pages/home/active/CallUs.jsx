import React, { Component } from 'react'

import { CallUsWrap } from './styled-active'
import Header from './Header'
export default class CallUs extends Component {
    render() {
        return (
            <CallUsWrap>
                <Header title='联系我们'></Header>
                <div className='p-box'>
                    <div className='callus'>
                        <h3>联系我们</h3>
                        <div className='callus-box'>
                            <h4>杭州岳纳姗网络科技有限公司</h4>
                            <p>地址: 浙江省杭州市拱墅区小河路500号（运河七区）401室-01</p>
                            <p>邮编: 310012</p>
                            <p>电话: <a href="tel:0571-87352941">0571-87352941</a></p>
                            <p>传真: 0571-87352941</p>
                            <p>产品预订: <a href="tel:4008107770">4008107770</a></p>
                        </div>
                    </div>
                    <div className='phone-box'>
                        <h3>社交账号</h3>
                        <div className='parent-box'>
                            <img src="https://m.feekr.com/resource/img/about/feekrweixin.jpg" alt="" />
                            <div className='box'>
                                <h4>微信公众号</h4>
                                <p>微信搜索“feekr旅行”/</p>
                                <p>“feekr_trip”</p>
                                <p>或长按二维码，即刻关注</p>

                            </div>
                        </div>
                        <div className='parent-box'>
                            <img src="https://m.feekr.com/resource/img/about/feekrweibo.jpg" alt="" />
                            <div className='box'>
                                <h4>官方微博</h4>
                                <p>微信搜索“feekr旅行”/</p>
                                <p>或长按二维码，即刻关注</p>

                            </div>
                        </div>
                        <div className='parent-box'>
                            <img src="https://m.feekr.com/resource/img/about/feekrwangzhan.jpg" alt="" />
                            <div className='box'>
                                <h4>官方网站</h4>
                                <p>长按二维码，即刻了解详情</p>

                            </div>
                        </div>
                    </div>
                    <div className='footer-box'>
                        <h3>商务合作</h3>
                        <p><b>国内度假</b><span>邮箱：sales@feekr.com</span></p>
                        <p><b>海外度假</b><span>邮箱：sales.overseas@feekr.com</span></p>
                        <p><b>市场商务</b><span>邮箱：marketing@feekr.com</span></p>
                    </div>
                </div>
            </CallUsWrap>
        )
    }
}

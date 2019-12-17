import React, { Component } from 'react'

import { ChronicleEventsWrap } from './styled-active'

export default class ChronicleEvents extends Component {
    render() {
        return (
            <ChronicleEventsWrap>
                <h3>大事记</h3>
                <ul>
                    <li className='events-wrap'>
                        <span className='left'>2012</span>
                        <div className="aboutus-timeline">
                            <p className='aboutus'>10月</p>
                            <span className='lit'></span>
                            <p className='aboutus-info'>www.feekr.com网站上线</p>
                        </div>
                    </li>
                    <li className='events-wrap'>
                        <span className='right'>2013</span>
                        <div className="aboutus-timeline">
                            <p className='aboutus'>转战微信公众号</p>
                            <span className='lit' ></span>
                            <p className='aboutus-info'>9月</p>
                        </div>
                        <div className="aboutus-timeline">
                            <p className='aboutus'>第一篇爆帖刷遍朋友圈《如果你来杭州，我才不会带你去西湖》</p>
                            <span className='lit' ></span>
                            <p className='aboutus-info'>11月</p>
                        </div>
                    </li>
                    <li className='events-wrap'>
                        <span className='left'>2014</span>
                        <div className="aboutus-timeline">
                            <p className='aboutus'>10月</p>
                            <span className='lit' ></span>
                            <p className='aboutus-info'>Putike&amp;Feekr合并</p>
                        </div>
                    </li>
                    <li className='events-wrap'>
                        <span className='right'>2015</span>
                        <div className="aboutus-timeline">
                            <p className='aboutus'>常州编辑运营部门、青岛研发中心成立</p>
                            <span className='lit' ></span>
                            <p className='aboutus-info'>6月</p>
                        </div>
                        <div className="aboutus-timeline">
                            <p className='aboutus'>北京办事处成立</p>
                            <span className='lit' ></span>
                            <p className='aboutus-info'>8月</p>
                        </div>
                        <div className="aboutus-timeline">
                            <p className='aboutus'>新品牌【美宿】成立</p>
                            <span className='lit' ></span>
                            <p className='aboutus-info'>12月</p>
                        </div>
                    </li>
                    <li className='events-wrap'>
                        <span className='left'>2016</span>
                        <div className="aboutus-timeline">
                            <p className='aboutus'>4月27</p>
                            <span className='lit' ></span>
                            <p className='aboutus-info'>中国美宿业主论坛-南山论剑</p>
                        </div>
                        <div className="aboutus-timeline">
                            <p className='aboutus'>4月28</p>
                            <span className='lit' ></span>
                            <p className='aboutus-info'>首届美宿风格大会在西子湖畔盛大召开：3000万粉丝1300人的颁奖典远超预期</p>
                        </div>
                    </li>
                    <li className="aboutus-line"></li>
                </ul>
                <p className='more'>持续...</p>

            </ChronicleEventsWrap>
        )
    }
}

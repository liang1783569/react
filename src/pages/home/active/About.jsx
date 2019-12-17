import React, { Component } from 'react'
import { AboutWrap } from './styled-active'
import Header from './Header'
import ChronicleEvents from './ChronicleEvents'

export default class About extends Component {
    render() {
        return (
            <AboutWrap>
                <Header title='联系我们'></Header>
                <div className='parent-box'>
                    <div className='f-child-box'>
                        <img src="https://m.feekr.com/resource/img/about/about_feekr.jpg" alt="" />
                        <p>Feekr旅行即Free Walker,意为“自由行走的人”。</p>
                        <p>旨在发现最具小众特色的旅行体验。</p>
                        <p>我们每天推荐</p>
                        <p>小众特色、私藏冷门、人少好玩的旅游地</p>
                        <p>Feel Free,Fly Fun!</p>
                    </div>
                    <div className='s-child-box'>
                        <h3>我们能为你做什么</h3>
                        <p>在Feekr，做最个性的自由行走者。我们掌握全球各地最小众的景点，最 特色的玩法，最新最好玩的旅游攻略，和你一起分享世界的每一个角落。</p>
                        <p>Feekr为你打造的每一个旅游度假产品都极富特色且兼具当地风情。让我 们告别走马观花，和目的地来一次深入的交流。</p>
                        <p>加入飞小编，你还可以与150w+粉丝分享旅游经历；或是成为城市记者，为 大家介绍你生活的城市......</p>
                        <p>Feekr随时都期待着与你的交流~</p>
                    </div>
                    <ChronicleEvents></ChronicleEvents>
                </div>
            </AboutWrap>
        )
    }
}

import React, { Component } from 'react'
import Tbr from 'components/Tbr'
import Tbr2 from 'components/Tbr2'
import { TbrListWrap } from './list-item'
import TbrItem from './TbrItem'
import TbrItem2 from './TbrItem2'
import TbrItem3 from './TbrItem3'
import TbrItem4 from './TbrItem4'

export default class TbrList extends Component {
    render() {
        return (
            <>
                <TbrListWrap>
                    <Tbr title='新品&独家'></Tbr>
                    <TbrItem
                        url='shop/product/search?style[]=32768&style[]=1024&city[]=&sort=&keyword=&productType[]=1&paymentType=1&page=1&shopid=FK'
                    ></TbrItem>
                    <Tbr title='本周特卖'></Tbr>
                    <TbrItem
                        url='shop/product/search?style[]=4194304&city[]=&sort=4&keyword=&productType[]=1&paymentType=1&page=1&shopid=FK'
                    ></TbrItem>
                </TbrListWrap>
                <TbrListWrap>
                    <Tbr2 title="主题推荐" content="给出最新的出游主题"></Tbr2>
                    <TbrItem2
                        url='shop/product/theme_detail?theme=627&channel=1111&category=&shopid=FK'
                    ></TbrItem2>
                </TbrListWrap>
                <TbrListWrap>
                    <Tbr2 title="攻略资讯" content="推荐城市深度游攻略"></Tbr2>
                    <TbrItem3
                        url='news/lists?id=&count=10&page=1'
                    ></TbrItem3>
                </TbrListWrap>
                <TbrListWrap>
                    <Tbr2 title="猜你喜欢" content="这些也许是你喜欢的"></Tbr2>
                    <TbrItem4></TbrItem4>
                </TbrListWrap>
            </>
        )
    }
}

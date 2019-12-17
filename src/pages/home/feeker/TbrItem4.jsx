import React, { Component } from 'react'
import { TbrItem4Wrap } from './list-item'
import { get } from 'utils/http'
import BScroll from "better-scroll";

export default class TbrItem4 extends Component {
    state = {
        list: [],
        count:2
    }
    async componentDidMount() {
      
        let result = await get({
            url: '/apc/shop/home/guess_like?page=1&shopid=FK'
        })
        let data = result.result.list
        this.setState({
            list: data
        })
        let bScroll = new BScroll(".scroll-box", {
            pullUpLoad: true,
            click: true
        });
        bScroll.on(
            "pullingUp",
            async ()=>{
                this.setState({
                    count:this.state.count
                })
                if(this.state.count===4){
                    return []
                }else{
                    let result = await get({
                        url: '/apc/shop/home/guess_like?page='+ this.state.count +'&shopid=FK'
                    })
                    let data2 = result.result.list
                    // console.log(data2)
                    let lists = [...this.state.list,...data2]
                    this.setState({
                        list: lists
                    })
                    bScroll.finishPullUp();
                    this.state.count++
                }
            }
        )
    }
    render() {
        return (
            <TbrItem4Wrap>
                {
                    this.state.list.map(value => {
                        return (

                            <div className="itembox"
                                key={value.id}
                            >
                                <img
                                    src={value.cover}
                                    alt="" />
                                <span>
                                    {value.productName}
                                </span>
                                <p>
                        ￥{value.currentPrice} 起/{value.unitCount}{value.unit}
                                </p>

                            </div>
                        )
                    })
                }


            </TbrItem4Wrap>
        )
    }
}

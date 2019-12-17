import React, { Component } from 'react'
import { ListItemWrap } from './styled-list'
import { get } from 'utils/http'
import BScroll from "better-scroll";
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
@ withRouter
@connect((state)=>({
    id:state.item.id
}))
class ListItem extends Component {
    state = {
        list: [],
        count:1,
        url:''
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.id !== this.props.id) {  
            let path=this.props.location.pathname.substring(6,8)
            let count = this.state.count  
            if(path==='st'){
                this.setState({
                    url:'/apc/shop/product/search?style[]='+ this.props.id +'&city[]=&sort=&keyword=&productType[]=1&paymentType=1&page='+ count +'&shopid=FK'
                },async ()=>{
                    let result = await get({
                        url: this.state.url
                    })
                    this.setState({
                        list: result.result.list
                    })

                })

            }else if(path==='ci'){
                this.setState({
                    url:'/apc/shop/product/search?style[]=&city[]='+ this.props.id +'&sort=&keyword=&productType[]=1&paymentType=1&page='+ count +'&shopid=FK'
                },async ()=>{
                    let result = await get({
                        url: this.state.url
                    })
                    this.setState({
                        list: result.result.list
                    })

                })
            }else{
                this.setState({
                    url:'/apc/shop/product/search?style[]=&city[]=&sort='+ this.props.id +'&keyword=&productType[]=1&paymentType=1&page='+ count +'&shopid=FK'
                },async ()=>{
                    let result = await get({
                        url: this.state.url
                    })
                    this.setState({
                        list: result.result.list
                    })

                })
            }
            
        }
    }
    async componentDidMount() { 
        let bScroll = new BScroll(".parent-scroll-box", {
            pullUpLoad: true,
            click: true
        })
        bScroll.on(
            "pullingUp",
            async ()=>{
                let path=this.props.location.pathname.substring(6,8)
                let count = this.state.count  
                if(path==='st'){
                    this.setState({
                        url:'/apc/shop/product/search?style[]='+ this.props.id +'&city[]=&sort=&keyword=&productType[]=1&paymentType=1&page='+ count +'&shopid=FK'
                    },async ()=>{
                        let result = await get({
                            url: this.state.url
                        })
                        this.setState({
                            list: result.result.list
                        })
    
                    })
    
                }else if(path==='ci'){
                    this.setState({
                        url:'/apc/shop/product/search?style[]=&city[]='+ this.props.id +'&sort=&keyword=&productType[]=1&paymentType=1&page='+ count +'&shopid=FK'
                    },async ()=>{
                        let result = await get({
                            url: this.state.url
                        })
                        this.setState({
                            list: result.result.list
                        })
    
                    })
                }else{
                    this.setState({
                        url:'/apc/shop/product/search?style[]=&city[]=&sort='+ this.props.id +'&keyword=&productType[]=1&paymentType=1&page='+ count +'&shopid=FK'
                    },async ()=>{
                        let result = await get({
                            url: this.state.url
                        })
                        this.setState({
                            list: result.result.list
                        })
    
                    })
                }
                console.log(this.state)
               
                    let result = await get({
                        url: this.state.url
                    })
                    let data2 = result.result.list
                    let lists = [...this.state.list,...data2]
                    this.setState({
                        list: lists
                    })
                    bScroll.finishPullUp();
                    this.state.count++
                    console.log(this.state.count)
             
            }
        )
    }
    render() {
        return (
            <ListItemWrap className='parent-scroll-box'>
                <div className='scroll-box'>
                {
                    this.state.list.map(value => {
                        return (
                            <div className='item-box'
                                key={value.productId}
                            >
                                <img src={value.productCover} alt="" />
                                <span>￥{value.productPrice}</span>
                                <p className='text-top'>{value.productDesc}</p>
                                <p className='text-bottom'>{value.productName}</p>
                            </div>

                        )
                    })
                }
                </div>
            </ListItemWrap>
        )
    }
}
export default ListItem 
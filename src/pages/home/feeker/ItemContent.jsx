import React, { Component } from 'react'
import { ItemContentWrap } from './list-item'
import { connect } from 'react-redux'
import { GETITEM } from '../action-types'
import { withRouter } from 'react-router-dom'



const mapState = state=>({
    item:state.item.item
})

const mapDispatch = dispatch=>({
    loadData(){
        dispatch({
            type:GETITEM,
            url:'/api/item'
        })
    }
})
@withRouter
class ItemContent extends Component {
    componentDidMount(){
        this.props.loadData()
    }

    handleClick = path => {
        return ()=>{
            this.props.history.push('/list/'+path)
            
        }
    }
       
    // state = {
    //     item: []
    // }
    // componentDidMount() {
    //     this.setState({
    //         // item: [
    //         //     {
    //         //         url: 'https://res01.feekr.com/ecommerce/minapp/banner/icon-guonei-n.png',
    //         //         title: '国内酒店',
    //         //     },
    //         //     {
    //         //         url: 'https://res01.feekr.com/ecommerce/minapp/banner/icon-guowai-n.png',
    //         //         title: '海外酒店',
    //         //     },
    //         //     {
    //         //         url: 'https://res01.feekr.com/ecommerce/minapp/banner/icon-pingpai-n.png',
    //         //         title: '品牌酒店',
    //         //     },
    //         //     {
    //         //         url: 'https://res01.feekr.com/ecommerce/minapp/banner/icon-wanle-n.png',
    //         //         title: '玩乐体验',
    //         //     },
    //         //     {
    //         //         url: 'https://res01.feekr.com/ecommerce/minapp/banner/icon-zhoubian-n.png',
    //         //         title: '周边游',
    //         //     },
    //         //     {
    //         //         url: 'https://res01.feekr.com/ecommerce/minapp/banner/icon-xiaotuan-n.png',
    //         //         title: '精品小团',
    //         //     },

    //         //     {
    //         //         url: 'https://res01.feekr.com/ecommerce/minapp/banner/icon-sijia-n.png',
    //         //         title: '私家定制',
    //         //     },
    //         //     {
    //         //         url: 'https://res01.feekr.com/ecommerce/minapp/banner/icon-gonglv-n.png',
    //         //         title: '攻略推荐'
    //         //     }
    //         // ],


    //     },


    //     );
    // }
    render() {
        return (
            <>
                {
                    this.props.item.map((value) =>
                        (
                            <ItemContentWrap
                                onClick={this.handleClick(value.id)}
                                key={value.id}
                            >
                                <img
                                    src={value.url}

                                    alt="" />
                                <span>
                                    {value.title}
                                </span>

                            </ItemContentWrap>
                        )

                    )


                }
            </>

        )
    }
}


export default connect(mapState,mapDispatch)(ItemContent)
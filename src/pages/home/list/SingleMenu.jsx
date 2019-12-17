import React, { Component } from 'react'

import { SingleMenuWrap } from './styled-list'
import { get } from 'utils/http'
import { GETID } from '../action-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
const mapState=(state)=>({
    id:state.item.id
})


const mapDispatch=dispatch => ({
    getId(id){
        dispatch({
            type:GETID,
            data:id
        })

    }
})
@ withRouter
 class SingleMenu extends Component {
    state = {
        city: [],
        style: [],
        sort: [],
    }
    async componentDidMount() {

        let result = await get({
            url: '/apc/shop/product/search_item?style[]=4194304&city[]=&keyword=&shopid=FK'

        })
        let data = result.result
        this.setState({
            city: data.city,
            style: data.style,
            sort: data.sort
        })
    }

    handleClick = (e) => {
        const nodeName = e.target.nodeName.toUpperCase()
        let tag = e.target;
        if (nodeName === 'LI') {
            let index = parseInt(tag.getAttribute('index'))
            this.props.getId(index)
            let { match } = this.props
            this.props.history.push(match.url + "/" + index)
        }
    }

    render() {
        let list = [];
        let { match } = this.props
        let title = match.url.substring(6)
        if (title === 'city') {
            list = this.state.city
        } else if (title === 'sort') {
            list = this.state.sort
        } else {
            list = this.state.style
        }

        return (
            <SingleMenuWrap >
                <ul onClick={(e)=>this.handleClick(e)}>
                    {
                      list.map(value => {
                            return (
                                <li key={value.id} index={value.id} className={this.state.id === value.id ? 'current' : ''}>
                                  {value.name || value.city}
                                </li>
                            )
                        })

                    }

                </ul>
            </SingleMenuWrap>
        )
    }
}
export default connect(mapState,mapDispatch)(SingleMenu)
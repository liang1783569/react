import React, { Component } from 'react'
import ItemContent from './ItemContent'
import { ListContentWrap } from './list-item'

export default class ListContent extends Component {
    render() {
        return (
            <ListContentWrap>
                <ItemContent></ItemContent>
            </ListContentWrap>
            
        )
    }
}

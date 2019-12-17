import React, { Component } from 'react'
import searchImg from 'assets/images/search.png'

import { SearchWrap, InputWrap } from './list-item'

export default class Search extends Component {
    render() {
        return (
            <SearchWrap>
                <InputWrap 
                    width='1px'
                    radius={5}
                >
                    <img src={searchImg} alt="" />
                    <span>搜索目的地/关键词</span>
                </InputWrap>
            </SearchWrap>




        )
    }
}

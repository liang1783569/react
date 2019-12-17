import React, { Component } from 'react'
import searchImg from 'assets/images/search.png'

import { SearchWrap, InputWrap } from './styled-list'
export default class Search extends Component {
    render() {
        return (
            <SearchWrap>
                <InputWrap 
                    radius={15}
                >
                    <img src={searchImg} alt="" />
                    <input placeholder="搜索目的地/关键词" type="tel"></input>
                </InputWrap>
            </SearchWrap>
        )
    }
}

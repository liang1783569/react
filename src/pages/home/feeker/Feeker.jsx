import React, { Component } from 'react'
// import { 
//     Route,
//     Switch,
//     Redirect,
//     NavLink
//   } from 'react-router-dom'

import Search from './Search'
import Swiper from './Swiper'
import ListContent from './ListContent'
import TbrList from './TbrList'
import Footer from './Footer'
import { FeekerWrap } from './list-item'
export default class Feeker extends Component {
    render() {
        return (
            <FeekerWrap 
                className='scroll-box'>
                <div>
                <Search></Search>
                <Swiper></Swiper>
                <ListContent></ListContent>
                <TbrList></TbrList>
                <Footer></Footer>
                </div>
            </FeekerWrap>

        )
    }
}

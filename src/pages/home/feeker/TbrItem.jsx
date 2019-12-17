import React, { Component } from 'react'
import { TbrItemWrap } from './list-item'
import { get } from 'utils/http'

export default class TbrItem extends Component {
    state = {
        list: []
    }
    async componentDidMount() {
        let result = await get({
            url: `/apc/`+this.props.url
        })
        let data = result.result.list.slice(0, 3)
        this.setState({
            list: data
        })
        // console.log(data)

    }
    render() {
        return (
            <TbrItemWrap

            >
                {
                    this.state.list.map(value => {
                        return (

                            <div className="itembox"
                                key={value.productId}
                            >
                                <img
                                    src={value.productCover}
                                    alt="" />
                                <span>
                                    {value.productName}
                                </span>
                                <p>
                                    ￥{value.productPrice} 起/{value.productUnit}
                                </p>

                            </div>

                        )
                    })
                }


            </TbrItemWrap>
        )
    }
}

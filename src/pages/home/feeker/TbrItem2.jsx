import React, { Component } from 'react'
import { TbrItem2Wrap } from './list-item'
import { get } from 'utils/http'

export default class TbrItem2 extends Component {
    state = {
        list: []
    }
    async componentDidMount() {
        let result = await get({
            url: `/apc/`+this.props.url
        })
        let data = result.result.list.slice(0, 4)
        this.setState({
            list: data
        })

    }
    render() {
        return (
            <TbrItem2Wrap
            >
                {
                    this.state.list.map(value => {
                        return (
                            <div className="itembox"
                                key={value.productId}
                            >
                                <img
                                    src={value.cover}
                                    alt="" />
                                <p>
                                    {value.title}
                                </p>
                            </div>

                        )
                    })
                }


            </TbrItem2Wrap>
        )
    }
}

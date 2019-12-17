import React, { Component } from 'react'
import { TbrItem3Wrap } from './list-item'
import { get } from 'utils/http'

export default class TbrItem3 extends Component {
    state = {
        list: []
    }
    async componentDidMount() {
        let result = await get({
            url: `/apc/` + this.props.url
        })
        let data = result.result.list.slice(0, 3)
        this.setState({
            list: data
        })

    }
    render() {
        return (
            <TbrItem3Wrap
            >
                {
                    this.state.list.map(value => {
                        return (
                        
                                <div className="itembox"
                                    key={value.viewCount}
                                >
                                    <img
                                        src={value.cover}
                                        alt="" />
                                    <div className="itembox-r">
                                        <p>
                                            {value.title}
                                        </p>

                                        <h4>
                                            {value.tags}
                                        </h4>
                                    </div>
                                </div>
                                )
                            })
                        }
            </TbrItem3Wrap>
                        )
                    }
}

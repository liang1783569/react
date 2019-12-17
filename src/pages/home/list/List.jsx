import React, { Component } from 'react'

import { ListWrap } from './styled-list'
import Search from './Search'
import SingleMenu from './SingleMenu'
import { withRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import ListItem from './ListItem'
@withRouter
class List extends Component {
    state = {
        display: 'none',
        pathname:''
    }
    handleClick = title => {
        return () => {
            let { match } = this.props
            this.props.history.push(match.url + "/" + title)
            if (this.state.display === 'none') {
                this.setState(
                    {
                        display: 'block',
                        pathname:match.url
                      
                    }
                )
            } else if (this.state.display !== 'none') {
                this.setState(
                    {
                        display: 'none',
                        pathname:match.url
                    }
                )
            }

        }

    }

    render() {
        return (
            <ListWrap>
                <div className='header-box'>
                    <Search></Search>
                    <div className='menu-box'>
                        <div className='p-box'>
                            <p onClick={this.handleClick('style')}>国内酒店</p>
                            <p onClick={this.handleClick('city')}>目的地</p>
                            <p onClick={this.handleClick('sort')}>排序</p>
                        </div>
                        <div className='menuitem-box' style={{ display: this.state.display }}>
                            <Switch>
                                <Route
                                    path={this.state.pathname + "/:title"}
                                    children={() => (
                                        <SingleMenu></SingleMenu>
                                    )}
                                />
                                {/* <Route
                                    path={this.state.pathname + "/sort"}
                                    children={() => (
                                        <SingleMenuSort title='sort'></SingleMenuSort>
                                    )}
                                />
                                <Route
                                    path={this.state.pathname + "/style"}
                                    children={() => (
                                        <SingleMenuStyle title='style'></SingleMenuStyle>
                                    )}
                                /> */}
                            </Switch>
                        </div>
                    </div>

                </div>

                <ListItem></ListItem>

            </ListWrap>
        )
    }
}

export default List

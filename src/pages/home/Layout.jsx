import React, { Component } from 'react'
import { TabBar } from 'antd-mobile'
import { Feeker } from './index'
import { withRouter } from 'react-router-dom'

@withRouter
class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'index',
            hidden: false,
            fullScreen: true,
            selecte:true
        };
    }
    handleClick=()=>{
        this.props.history.push('/mine')
    }

    render() {
        return (
            <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#000"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    <TabBar.Item
                        title="首页"
                        key="index"
                        icon={<div style={{
                            width: '30px',
                            height: '30px',
                            background: 'url(http://m.cycang.com/Public/build/img/footer-icon/v4/home-on.png) center center /  21px 21px no-repeat'
                        }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '30px',
                            height: '30px',
                            background: 'url(http://m.cycang.com/Public/build/img/footer-icon/v4/home-on.png) center center /  21px 21px no-repeat'
                        }}
                        />
                        }
                        selected={this.state.selectedTab === 'index'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'index',
                            });
                        }}
                        data-seed="logId"
                    >
                        <Feeker></Feeker>
                    </TabBar.Item>
                    <TabBar.Item
                        onPress={
                            this.handleClick
                        }
                        icon={
                            <div style={{
                                width: '30px',
                                height: '30px',
                                background: 'url(http://m.cycang.com/Public/build/img/footer-icon/v4/user.png) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '30px',
                                height: '30px',
                                background: 'url(http://m.cycang.com/Public/build/img/footer-icon/v4/user.png) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        title="我的"
                        key="mine"
                        selected={this.state.selectedTab === 'mine'}
                       
                    >
                        mine
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}
export default Layout
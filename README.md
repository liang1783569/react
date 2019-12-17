This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify



export default class Tbr extends Component {
    render() {
        return (
            <TbrWrap>
                <div className="tbr-left">
                    新品&独家
                </div>
                <div className="tbr-center"></div>
                <div className="tbr-right">
                    更多
                </div>
            </TbrWrap>
        )
    }
}


 // state = {
    //     title: {
    //         display: 'none',
    //         title: ''
    //     },
    //     defaulttitle: '',
    //     list2: [],
    // }
    // static getDerivedStateFromProps(props, state) {
    //     if (props.defaulttitle !== state.defaulttitle) {
    //         return {
    //             defaulttitle: props.defaulttitle,
    //             title: {
    //                 title: props.defaulttitle,
    //             }
    //         }
    //     }
    //     return null
    // }
    // async componentDidMount(title) {
    //     console.log(this.state.title.title)
    //     let result = await get({
    //         url: '/apc/shop/product/search_item?style[]=4194304&city[]=&keyword=&shopid=FK'
    //     })
    //     let data = result.result
    //     this.setState({
    //         list2: data
    //     })
    // }
    // handleClick = title => {
    //     return () => {
    //         if (this.state.title.display === 'none') {
    //             this.setState(
    //                 {
    //                     title: {
    //                         display: 'block',
    //                         title: 'title'
    //                     }
    //                 }
    //             )
    //         } else if (this.state.title.display !== 'none') {
    //             this.setState(
    //                 {
    //                     title: {
    //                         display: 'none',
    //                         title: 'title'
    //                     }
    //                 }
    //             )
    //         }


    //     }

    // }


    // render() {
    //     // let list = null;
    //     // if (this.state.title.title === 'city') {

    //     //     list = this.state.list2.city

    //     // } else if (this.state.title.title === 'sort') {

    //     //     list = this.state.list2.sort

    //     // } else {

    //     //     list = this.state.list2.style

    //     // }
    //     let title = this.props.title
    //     return (
    //         <SingleMenuWrap>
    //             <p onClick={this.handleClick(title)}>{title}</p>
    //             <ul style={{ display: this.state.title.display}}>
    //                 <li>df</li>
    //                 {/* {
    //                     list !== [] && list.map(value => {
    //                         return (
    //                             <li key={value.id}>
    //                                 {value.name || value.city}
    //                             </li>
    //                         )
    //                     })

    //                 } */}

    //             </ul>
    //         </SingleMenuWrap>

    //     )
    // }


       state = {
        title: {
            display: 'none',
            title: ''
        },
        defaulttitle: '',
        city:[],
        style:[],
        sort:[]

    }
    static getDerivedStateFromProps(props, state) {
        console.log(props)
        console.log(state)
        if (props.defaulttitle === state.title.title) {
            return {
                title: {
                    title: props.defaulttitle,
                    display:'none'
                }
            }
        }
        return null
    }
    async componentDidMount(title) {
        console.log(this.state)
        let result = await get({
            url: '/apc/shop/product/search_item?style[]=4194304&city[]=&keyword=&shopid=FK'
        })
        let data = result.result
        this.setState({
            city:data.city,
            style:data.style,
            sort:data.sort
        })
        console.log(this.state)
    }
    handleClick = title => {
        return () => {
            console.log(this.state)
            if (this.state.title.display === 'none') {
                this.setState(
                    {
                        title: {
                            display: 'block',
                            title: title
                        }
                    }
                )
            } else if (this.state.title.display !== 'none') {
                this.setState(
                    {
                        title: {
                            display: 'none',
                            title: title
                        }
                    }
                )
            }
        }

    }


    render() {
        let list = null;
        console.log(this.state.title.title)
        if (this.state.title.title === 'city') {
            list = this.state.city
        } else if (this.state.title.title === 'sort') {
            list = this.state.sort
        } else {
            list = this.state.style
        }
        console.log(list)
        let title = this.props.title
        return (
            <SingleMenuWrap>
                <p onClick={this.handleClick(title)}>{title}</p>
                <ul style={{ display: this.state.title.display}}>
                    {
                        list === [] ? '' : list.map(value => {
                            return (
                                // console.log(list)
                                <li key={value.id}>
                                    {value.name || value.city}
                                </li>
                            )
                        })

                    }

                </ul>
            </SingleMenuWrap>

        )
    }
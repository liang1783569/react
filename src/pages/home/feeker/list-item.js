import styled from 'styled-components'

import border from 'styled/border'
export const FeekerWrap = styled.div`   
    height:100%
`

export const SearchWrap = styled.header`
    padding : .1rem
`
export const InputWrap = border(
    styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    height: .4rem;
    color:#666;
    background :${props => props.background || '#fff'}
    img{
        width:.15rem;
        height:.15rem;
        margin-right: .1rem
    }
    span{
        font-size: .14rem;
        color:#ababab;
        font-family: PingFangSC-Regular, Hiragino Sans GB, sans-serif;
    }

    `
)
export const ListContentWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    background: #fff;
    padding-bottom:.2rem

`

export const ItemContentWrap = styled.div`
    display: flex;
    flex-direction:column;
    width:25%;
    align-items:center;
    padding: .15rem 0 0 0;
    img{
        width:.44rem;
        height:.44rem
    }
    span{
        font-size:.13rem;
        color:#000;
        margin-top:.1rem

    }

`
export const TbrListWrap = styled.div`
    padding: .2rem .1rem;
    margin-top:.1rem;
    background:#fff;
    display: flex;
    justify-content:space-between;
    flex-direction:column;


`

export const TbrItemWrap = styled.div`
    padding-top:.3rem;
    display:flex;
    width:100%;
    justify-content:space-between;
    flex-direction:row
    .itembox{
        display:flex;
        flex-direction:column;
        width:32%;
        padding-bottom: .2rem

        img{
            width:100%;
            height:1.1rem

        }
        span{
            font-family: PingFangSC-Regular,Source Han Sans,Helvetica,Droid Sans,Arial,sans-serif;
            text-align: center;
            font-size:.12rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-top: .06rem;
        }
        p{
            color:#1abc9c;
            font-size:.12rem;
            text-align: center;
            line-height:.25rem
        }

    }
`

export const TbrItem2Wrap = styled.div`
    padding-top:.1rem;
    .itembox{
        width:100%;
        padding-top:.1rem;
        border-bottom : 1px solid #e8e8e8;
        margin-bottom: .1rem
        img{
            width:100%;
            height:1.42rem
        }
        p{
            font-family: PingFangSC-Regular,Source Han Sans,Helvetica,Droid Sans,Arial,sans-serif;
            font-size:.14rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin: .09rem 0 .2rem .09rem;
            color:#000
        }
    }
`

export const TbrItem3Wrap = styled.div`
    padding-top:.1rem;
    .itembox{
        width:100%;
        padding-top:.1rem;
        border-bottom : 1px solid #e8e8e8;
        margin-bottom: .1rem;
        display: flex;
        justify-content:space-between;
        img{
            width:40%;
            height:.94rem
        }
        .itembox-r{
            width:55%;
            padding-left:.1rem
            p{
            font-family: PingFangSC-Regular,Source Han Sans,Helvetica,Droid Sans,Arial,sans-serif;
            font-size:.13rem;
            margin: 0 0 .2rem 0;
            color:#2d2d2d;
            line-height:.2rem;
            
            }
            h4{
                font-size:.12rem;
                color:#888;
                margin: .18rem 0 0;
            }
        }
        
    }
`

export const TbrItem4Wrap = styled.div`
    padding-top:.3rem;
    display:flex;
    width:100%;
    justify-content:space-between;
    flex-wrap:wrap
    .itembox{
        display:flex;
        flex-direction:column;
        width:49%;
        padding-bottom: .2rem
        img{
            width:100%;
            height:1.1rem
        }
        span{
            font-family: PingFangSC-Regular,Source Han Sans,Helvetica,Droid Sans,Arial,sans-serif;
            text-align: center;
            font-size:.12rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-top: .06rem;
        }
        p{
            color:#1abc9c;
            font-size:.12rem;
            text-align: center;
            line-height:.25rem
        }

    }
`


export const FooterWrap =styled.div`
    margin: .1rem 0 .2rem;
    background:#fff;
    display:flex;
    flex-direction:column;
    align-items:center;
    h3{
        font-size:.30rem;
        font-family: PingFangSC-Regular,Source Han Sans,Helvetica,Droid Sans,Arial,sans-serif;
    }
    h6{
        font-size:.12rem;
        color:#888;
    }
    .first-box{
        margin:.2rem 0 0;
        padding:.2rem 0;
        border-top:1px solid #e8e8e8;
        width:40%;
        display: flex;
        justify-content:center;
     
        img{
            width:1rem;
            height:1rem;
        }
    }
    p{
        font-size:.12rem;
        color:#888;
        line-height:.2rem;
    }
    .second-box{
        margin-top:.1rem;
        padding:.15rem 0;
        display: flex;
        width:70%;
        border-top:1px dashed #e8e8e8;
        justify-content:center;
        p{
            width:.9rem;
            height:.3rem;
            text-align:center;
            line-height:.3rem;
            background:#1abc9c;
            color:#fff;
            margin: 0 .1rem;
            font-size:.14rem;
            border-radius:.1rem;
        }
    }




`
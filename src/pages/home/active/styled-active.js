import styled from 'styled-components'

import border from 'styled/border'
export const AboutWrap = styled.div`
    height:100%;

   .parent-box{
        position: absolute;
        width:100%;
        top:.4rem;
        bottom: 0;
        overflow-y: auto;
   }
   .f-child-box{
       background:#fff;
       margin:.1rem 0 0;
       padding:.10rem .12rem;
       align-items:center;
       display: flex;
       flex-direction:column;
       img{
           width:.8rem;
           height:1.15rem;
       }
       p{
           font-size:.12rem;
           line-height:.2rem;
           margin:.1rem;
       }
   }
   .s-child-box{
        background:#fff;
        margin:.1rem 0 0;
        padding:.10rem .12rem;
        display: flex;
        flex-direction:column;
        h3{
            font-size:.18rem;
            line-height:.5rem;
        }
        p{
            text-indent: 2em;
            font-size:.12rem;
            line-height:.25rem;
            font-weight: 400;
        }
       
   }

`

export const CallUsWrap = styled.div`
    height:100%;
    .p-box{
        position: absolute;
        top:.4rem;
        bottom: 0;
        overflow-y: auto;
    }

    .callus{
        margin-top:.1rem;
        background:#fff;
        padding:.1rem .1rem .2rem;
        h3{
            font-size:.18rem;
            line-height:.56rem;
        }
        .callus-box{
            padding:0 .2rem .1rem;
            background:#f8f8f8;
            h4{
                font-size:.14rem;
                line-height:.43rem
            }
            p{
                color:#000;
                font-size:.12rem;
                a{
                    color:#000;
                }
            }
        }
    }
    .phone-box{
        margin-top:.1rem;
        background:#fff;
        padding:.1rem .1rem .2rem;
        h3{
            font-size:.18rem;
            line-height:.56rem;
        }
        .parent-box{
            margin: 0 0 .1rem;
            padding:.2rem .4rem;
            background:#f8f8f8;
            display: flex;
            img{
                width:.8rem;
                height:.8rem;
                margin-right:.2rem;
            }
            .box{
                h4{
                    font-size:.14rem;
                    margin: 0 0 .1rem;
                }
                p{
                    font-size:.12rem;
                    margin-top:.06rem;
                }
            }
        }
    }
    .footer-box{
        margin-top:.1rem;
        background:#fff;
        padding:.1rem .1rem .2rem;
        h3{
            font-size:.18rem;
            line-height:.56rem;
        }
        p{
            height:.32rem;
            margin:0 0 .1rem;
            padding:0 .1rem;
            background:#f8f8f8;
            font-size:.14rem;
            line-height:.32rem;
            color:#000;
            b{
                font-weight:800;
                margin-right:.15rem;
            }
            
        }
    }


`

export const HeaderWrap = border(
    styled.header`
        position:absolute;
        height:.4rem;
        background: #fff;
        display: flex;
        justify-content:space-between;
        align-items:center;
        padding:0 .15rem
        img{
            width:.24rem;
            height:.27rem;
        }
        h4{
            font-family: PingFangSC-Regular,Source Han Sans,Helvetica,Droid Sans,Arial,sans-serif;
            font-size: .15rem;
            line-height: .4rem;
        }

    `
)

export const ChronicleEventsWrap = styled.div`
    background:#fff;
    margin:.1rem 0 0;
    padding:.10rem .12rem;
    display: flex;
    flex-direction:column;
    h3{
        font-size:.18rem;
        line-height:.5rem;
    }
    ul{
       background-color: rgba(26, 188, 156, 0.05);
       padding:.1rem 0;
       position:relative;
       .aboutus-line{
        font-weight: 400;
        list-style: none;
        position: absolute;
        left: 50%;
        top: .1rem;
        bottom: .1rem;
        transform: translateX(-50%);
        width: 2px;
        background-color: #1abc9c;
       }
       .events-wrap{
        font-family: PingFangSC-Regular,Source Han Sans,Helvetica,Droid Sans,Arial,sans-serif;
        font-size: .14rem;
        position: relative;
        .left{
            font-size: .14rem;
            display: inline-block;
            padding: .03rem .12rem;
            margin-left: 50%;
            color: #fff;
            background-color: #1abc9c;
            transform: translateX(-100%);
        }
        .right{
            font-size: .14rem;
            font-weight: 400;
            list-style: none;
            display: inline-block;
            padding: .03rem .12rem;
            margin-left: 50%;
            color: #fff;
            background-color: #1abc9c;
        }
        .aboutus-timeline{
            position: relative;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            margin: .12rem 0;
            font-size: .12rem;
            line-height: .25rem;
            .aboutus{
                font-size: .12rem;
                line-height: .25rem;
                font-weight: 400;
                width: 50%;
                box-sizing: border-box;
                padding-right: .1rem;
                text-align: right;
            }
            .aboutus-info{
                font-size: .12rem;
                line-height: .25rem;
                font-weight: 400;
                width: 50%;
                box-sizing: border-box;
                padding-left: .1rem;
                text-align: left;
            }
            .lit{
                font-weight: 400;
                font-size: .12rem;
                line-height: .25rem;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                width: 6px;
                height: 6px;
                border-radius: 50%;
                background-color: #1abc9c;
            }
            
        }
       }
    }
    .more{
        padding:.1rem 0;
        color:#1abc9c;
        background-color: rgba(26, 188, 156, 0.05);
        text-align:center;
        line-height:.2rem;
        font-size:.14rem;
    }


`
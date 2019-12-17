import styled from 'styled-components'
import border from 'styled/border'
export const ListWrap = styled.div`
    height:100%;
    .header-box{
        position:fixed;
        z-index:1000;
        width:100%;

    }
    .menu-box{
        display:flex;
        justify-content:space-between;
        flex-direction:column;
        .p-box{
            display: flex;
            justify-content:space-between;
            p{
                width:100%;
                height:.3rem;
                font-size:.14rem;
                background:#fff;
                border:0;
                text-align:center;
                border-bottom:1px solid #bababa;
                position:relative;
                }
        }
        .menuitem-box{
            height:2.8rem;
            overflow:hidden;
            position:relative;
        }
    }
 
`

export const SearchWrap = styled.div`
    padding : .15rem .1rem;
    background:#fff;
`

export const InputWrap = border(
    styled.div`
    display: flex;
    padding-left:.2rem;
    align-items:center;
    height: .35rem;
    color:#666;
    background :#f6f6f6;
    img{
        width:.20rem;
        height:.20rem;
        margin-right: .1rem
    }
    input{
        border:0;
        background:#f6f6f6;
        font-size:.12rem
    }
`)


export const SingleMenuWrap = styled.div`
    background:#fff;
    width:100%;
    ul{
        width:100%;
        height:100%;
        position:absolute;
        overflow-y:scroll;
        li{
            width:100%;
            color:#000;
            height:.35rem;
            font-size:.14rem;
            background:#fff;
            line-height:.35rem;
            border-bottom:1px solid #bababa;
            padding:0 .2rem;
        }
    }
    
`

export const ListItemWrap = styled.div`
    height:100%;
   
    .scroll-box{
        padding:1.05rem .1rem 0;


    }
    .item-box{
        width:100%;
        position:relative;
        background:#fff;
        margin-bottom:.15rem;
        img{
            width:100%;
            height:2rem;
        }
        span{
            display:block;
            width:.7rem;
            height:.32rem;
            background-color: rgba(26, 188, 156, 0.8);
            color:#fff;
            line-height:.32rem;
            text-align:center;
            position:absolute;
            top:.15rem;
            left:0
        }
        .text-top{
            font-size:.15rem;
            color:#000;
            line-height:.3rem;
            margin:.19rem 0 0 ;
            text-align:center;

        }
        .text-bottom{
            font-size:.12rem;
            color:#666;
            text-align:center;
            line-height:.3rem;
        }

    }




`
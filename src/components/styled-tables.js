import styled from 'styled-components'

export const TbrWrap = styled.div`
    display: flex;
    background:#fff;
    justify-content:space-between;
    align-items:center;
    .tbr-left{
        font-size:.14rem;
        color:#000;
    }
    .tbr-center{
        width:70%;
        height:.01rem;
        background:#e8e8e8;
    }
    .tbr-right{
        font-size:.12rem;
        color:#1abc9c;
    }
`


export const Tbr2Wrap = styled.div`
    background:#fff;
    display: flex;
    align-items:center;
    position: relative;
    div{
        width:.04rem;
        height:.13rem;
        background:#1abc9c;
        margin-right:.1rem
    }
    h3{
        font-size:.15rem;
        color:#000;
        margin-right:.1rem

    }
    p{
        font-size:.12rem;
        color:#999;
    }
    .tbr2-right{
        position: absolute;
        right:0;
        font-size:.12rem;
        color:#1abc9c;
        align-items:center
    }


`
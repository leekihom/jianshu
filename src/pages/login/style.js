import styled from 'styled-components'
import sin_in from '../../statics/sing_in.png'

export const Sign = styled.div`
    position: relative;
    background:#f1f1f1;
    height: 100vh;
    align-items: center;
    text-align: center;
`;
export const Container = styled.div`
    width: 820px;
    height: 600px;
    top:10vh;
    margin: 0 auto; 
    background-image: url(${sin_in});
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: 45px 0;
    position: relative;
    .download-content{
        width: 252px;
        height: 46px;
        margin-right: 15px;
        background-color: #ea6f5a;
        border-radius: 30px;
        font-size: 18px;
        font-weight: 500;
        color: #fff;
        line-height: 46px;
        cursor: pointer;
        border:0;
        position: absolute;
        left: 60px;
        top: 452px;
        outline:none;
        }
`;
export const Main = styled.div`
    float: right;
    width: 400px;
    margin: 0 auto;
    padding: 50px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgb(0 0 0 / 10%);
    vertical-align: middle;
    display: inline-block;
    h4{
        font-size: 18px;
    }
    a,b{
        padding: 10px;
        color: #969696;
    }
    .title{
        margin: 0 auto 50px;
        font-weight: 400;
        padding: 10px;
    }
    .active{
        font-weight: 700;
        color: #ea6f5a !important;
        border-bottom: 2px solid #ea6f5a;
    }
    
`;
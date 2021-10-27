import styled from "styled-components";

export const AuthorWrapper = styled.div`
    width:960px;
    margin:0 auto;
    padding-top:56px;
    padding: 30px 0 50px;
    text-align: center;
    img{
        width:100%;
    }
    .load{
        width:  38.2%;
        padding: 10px 0;
        margin: 40px 0;
        font-size: 15px;
        border-radius: 20px;
        background-color: #a5a5a5;
        border: none;
        color: #fff;
        display: inline-block;
        text-align: center;
    }
`
export const Wrap = styled.div`
    margin-top: 80px;
    padding: 0 20px;
    border: 1px solid #e6e6e6;
    border-radius: 4px;
    text-align: center;
    height: 320px;
    background-color: hsla(0,0%,71%,.1);
    a{
        color: #333;
    }
    img{
        border-radius: 40px;
        width: 80px;
        height: 80px;
        margin: -40px 0 10px;
        display: inline-block;
        border: 1px solid #ddd;
        background-color: #fff;
    }
    h4{
        font-size: 21px;
        font-weight: 700;
        overflow: hidden;
    }
    p{
        margin: 0 auto 10px;
        max-width: 180px;
        font-size: 13px;
        line-height: 25px;
    }
    .btn{
        width: 100px ;
        display: inline-block;
        padding: 9px 0;
        border-color: #42c02e;
        font-size: 16px;
        font-weight: 400;
        border-radius: 40px;
        color: #fff;
        background-color: #42c02e;
        border: 1px solid transparent;
    }
    hr{
        margin-top: 20px;
        margin-bottom: 20px;
        border: 0;
        border-top: 1px solid #eee;
        box-sizing: content-box;
        height: 0;
    }
    .meta{
        float: left;
        margin-top: -29px;
        padding-right: 10px;
        font-size: 12px;
        color: #969696;
        background-color: #f8f8f8;
    }
    .recent-update{

    }
    .new{
        font-size: 13px;
        line-height: 25px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: block;
    }
`
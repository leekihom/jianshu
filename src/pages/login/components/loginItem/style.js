import styled from 'styled-components'

export const LoginWarpper = styled.div`
button{
    background: #3194d0;
    width: 100%;
    padding: 12px 18px;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    color: #fff;
    outline:none;
    cursor: pointer;
}

.login_info input{
        color: #969696;
        border-bottom: none;
        width: 100%;
        height: 50px;
        margin-bottom: 0;
        padding: 4px 12px 4px 35px;
        border: 1px solid #c8c8c8;
        background-color: hsla(0,0%,71%,.1);
        vertical-align: middle;
        font-size: inherit;
        line-height: inherit;
        outline:none;
    }

.remember{
    float:left;
    margin: 15px auto;
}
.problem{
    float:right;
    margin: 15px auto;
}
button{
    background: #3194d0;
    width: 100%;
    padding: 12px 18px;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    color: #fff;
    outline:none;
    cursor: pointer;
}
.more_login{
    margin-top: 50px;
    
}
h6{
    font-size:12px;
    margin-bottom:10px;
    color:#b5b5b5;
}
h6:before{
    float:left;
    content: "";
    border-top: 1px solid #b5b5b5;
    display: block;
    position: relative;
    width: 60px;
    top: 10px;
    left: 30px;
}
h6:after{
    float:right;
    content: "";
    border-top: 1px solid #b5b5b5;
    display: block;
    position: relative;
    width: 60px;
    top: 10px;
    right: 30px;
}

li{
    width: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0 5px;
    display: inline-block;
}
i{
    font-size: 28px;
}
.weibo{
    color: #e05244;
}
.wechat{
    color: #00bb29;
}
.qq{
    color: #498ad5;
}
.user {
    position: absolute;
    top: 155px;
    left: 470px;
    font-size: 18px;
    color: #969696;
}
.password{
    position: absolute;
    top: 205px;
    left: 480px;
    font-size: 18px;
    color: #969696;
}

`;

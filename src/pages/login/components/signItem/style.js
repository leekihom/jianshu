import styled from 'styled-components'

export const SignWarpper = styled.div`
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

button{
    background: #42c02e;
    width: 100%;
    padding: 12px 18px;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    color: #fff;
    outline:none;
    margin-top: 20px;
    cursor: pointer;
}
.more_sign{
    margin-top: 50px;
   
}
.sign-up-msg{
    margin: 10px 0;
    padding: 0;
    text-align: center;
    font-size: 12px;
    line-height: 20px;
    color: #969696;
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
    left: 475px;
    font-size: 18px;
    color: #969696;
}
.password{
    position: absolute;
    top: 255px;
    left: 480px;
    font-size: 18px;
    color: #969696;
}
.phone{
    position: absolute;
    top: 205px;
    left: 480px;
    font-size: 18px;
    color: #969696;
}


`;

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { PureComponent } from 'react';
import { FooterWrapper,Title,Main } from './style'


class Footer extends PureComponent {
    render() {
        return (
            <FooterWrapper>
                <Title>
                    <a>关于简书</a>
                    <em> · </em>
                    <a>联系我们</a>
                    <em> · </em>
                    <a>加入我们</a>
                    <em> · </em>
                    <a>简书出版</a>
                    <em> · </em>
                    <a>品牌与徽标</a>
                    <em> · </em>
                    <a>帮助中心</a>
                    <em> · </em>
                    <a>合作伙伴</a>
                    <em> · </em>
                    <a>涂檬-原创插画社区</a>
                </Title>
                <Main>
                ©2012-2021 重庆科技学院 / 简书 / 沪ICP备11018329号-5 / 
                <img src="assets/smrz.png" alt="Smrz" />
                沪公网安备31010402002252号 / 
                <br/>
                <img src="assets/wxb.png" alt="Wxb" />
                <img src="assets/weifa.jpg" alt="Weifa" />
                简书网举报电话：021-34770013 / 
                <img src="assets/fanzha.jpg" alt="Fanzha" />
                亲爱的市民朋友，上海警方反诈劝阻电话“962110”系专门针对避免您财产被骗受损而设，请您一旦收到来电，立即接听 / 
                <img src="https://cdn2.jianshu.io/assets/web/zggsrz-5695587dccf490ca3e651f4228f7479e.png" alt="Zggsrz" />
                </Main>
            </FooterWrapper>
        );
    }
}

export default Footer;
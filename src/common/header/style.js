import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

//带样式的标签

export const HeaderLimit = styled.div`
    z-index:1;
    background-color: #fff;
    width: 100%;
    border-bottom: 1px solid #fff;
   /*  padding-bottom: 56px; */
`;

export const HeaderWrapper = styled.div`
    z-index: 1;
    position: relative;
    height: 56px;
    width: 70%;
    margin: 0 auto;
`;
export const Logo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100px;
    height: 56px;
    background: url(${logoPic});
    background-size: contain;
`;
export const Nav = styled.div`
    width: 960px;
    height: 100%;
    padding-right: 20px;
    box-sizing: border-box;
    margin: 0 auto;
`;
export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  cursor: pointer;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
  .iconfont{
    font-size:20px;
  }
`;
export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`;
export const NavSearch = styled.input.attrs({
	placeholder: '搜索'
})`
	width: 200px;
	height: 38px;
	padding: 0 30px 0 20px;
	margin-top: 9px;
	margin-left: 20px;
	box-sizing: border-box;
	border: none;
	outline: none;
	border-radius: 19px;
	background: #eee;
	font-size: 14px;
	color: #666;
	&::placeholder {
		color: #999;
	}
	&.focused {
		width: 300px;
	}
	&.slide-enter {
		transition: all .2s ease-out;
	}
	&.slide-enter-active {
		width: 300px;
	}
	&.slide-exit {
		transition: all .2s ease-out;
	}
	&.slide-exit-active {
		width: 200px;
	}
`;

export const SearchInfo = styled.div`
    position: absolute;
    background: #fff ;
    left: 20px;
    top: 56px;
    width: 240px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
`;

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
    .spin{
      display: block;
      float: left;
      font-size: 15px;
      margin-right: 2px;
      margin-top: 1px;
      transition: all .2s ease-in;
      transform: rotate(0deg);
      trasform-orgin: center center;
    }
`;

export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 14px;
`;

export const SearchInfoItem = styled.a`
    display: block;
    float: left;
    font-size: 12px;
    line-height: 20px;
    padding: 0 5px;
    color: #787878;
    border: 1px solid #ddd;
    border-radius: 3px;
    margin-right: 10px;
    margin-bottom: 10px;
`;

export const SearchInfoList = styled.div`
    overaflow: hidden;

`;

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    heigth: 56px;
`;
export const Button = styled.div`
	float: right;
	margin-top: 9px;
	margin-right: 20px;
	padding: 0 20px;
	line-height: 38px;
	border-radius: 19px;
	border: 1px solid #ec6149;
	font-size: 14px;
	&.reg {
		color: #ec6149;
	}
	&.writting {
		color: #fff;
		background: #ec6149;
	}
`;
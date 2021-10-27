import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {CSSTransition} from 'react-transition-group'
import { message } from 'antd';
import {actionCreators } from './store'
import {actionCreators as loginActionCreators } from '../../pages/login/store'
import {actionCreators as homeActionCreators } from '../../pages/home/store'
import {nanoid} from 'nanoid'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList,
	HeaderLimit,
} from './style'
import axios from "axios";
import {apiServe} from "../../config";
import styled from 'styled-components';



class Header extends PureComponent {
	state={
		search:''
	}
	handleSearchChange=(e)=>{
		this.setState({
			search:e.target.value
		})
	}
	 getListArea(){
		let { focused, list,page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
		// let {page} = this.props;
		const pageList = [];
		const newList = list.toJS()
			for (let index = 0; index < 10; index++) {
					pageList.push(
						<SearchInfoItem key={nanoid(10)}>{newList[page%totalPage]}</SearchInfoItem>
					)
				page ++;
			}
		if (focused || mouseIn) {
			return (
				<SearchInfo 
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch 
							onClick={()=> handleChangePage(page,this.spinRef) }
						>
						<i ref={current => this.spinRef = current} className="iconfont spin">&#xe71d;</i>
						换一批
						</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
						{pageList}
					</SearchInfoList>
				</SearchInfo>
			)
		}else {
			return null;
		}
	}
	handleLogout = ()=>{
		console.log(this.props)
		axios.get(`${apiServe}/loginapi/logout`).then((res)=>{
			const {code,data,Message} = res.data
			if(code === 0){
				message.success(Message)
				this.props.logout()
			}else{
				message.error(Message)
			}
		})
	}
	changeFont = ()=>{
		/* 暂未想好怎么写 */
	}
	render() {
		const { focused,list, handleInputFocus, handleInputBlur,logout,changeHomeData} = this.props;
		console.log(this.props)
		/* const loginCheck = () =>{
			if(sessionStorage.getItem('username') !== null && login !== false){
				this.forceUpdate();
				return	<NavItem className='right' onClick={logout} >{sessionStorage.getItem('username')},退出</NavItem>
				
			} 
			else{
				this.forceUpdate();
				return <Link to='/login'><NavItem className='right'>登陆</NavItem> </Link>
			}
			
		} */
		return (
			<HeaderLimit>
			<HeaderWrapper>
					<Link to='/'>
					<Logo/>
					</Link>
				<Nav>
					
					<Link to='/'>
					<NavItem className='left'>
					<i className="iconfont">&#xeb6e;</i>
						首页
					</NavItem>
					</Link>
					<NavItem className='left'>
					<i className="iconfont">&#xe60f;</i>
						下载App
					</NavItem>
					{
						this.props.login ?
						<NavItem className='right' onClick={this.handleLogout} ><i style={{fontWeight:"bold"}}>{this.props.username}</i>，退出</NavItem>:
						<Link to='/login'><NavItem className='right'>登陆</NavItem> </Link>
					}
					
					<NavItem className='right'>
						<i className="iconfont" onClick={this.changeFont}>&#xe636;</i>
					</NavItem>
					<SearchWrapper>
						<CSSTransition
							in={focused}
							timeout={200}
							classNames="slide"
						>
							<NavSearch
								className={focused ? 'focused': ''}
								onFocus={()=> handleInputFocus(list)}
								onBlur={handleInputBlur}
								value={this.state.search}
								onChange={this.handleSearchChange}
							></NavSearch>
						</CSSTransition>
						<i
							onClick={()=>{
								changeHomeData(this.state.search)
							}}
							className={focused ? 'focused iconfont zoom': 'iconfont zoom'}>
						&#xe674;
						</i>
						{this.getListArea()}
					</SearchWrapper>
				</Nav>
				<Addition>
					<Link to='/write'>
						<Button className='writting'>
							<i className="iconfont">&#xe708;</i>
							写文章
						</Button>
					</Link>
					<Link to='/login/signItem'><Button className='reg'>注册</Button></Link>
				</Addition>
			</HeaderWrapper>
			</HeaderLimit>
		);
	}
}

//state向props传值
const mapStateToProps = (state)=>{
    return{
		focused: state.getIn(['header', 'focused']),
		list: state.getIn(['header', 'list']),
		page: state.getIn(['header', 'page']),
		totalPage: state.getIn(['header', 'totalPage']),
		mouseIn: state.getIn(['header', 'mouseIn']),
		login: state.getIn(['login','login']),
		username:state.getIn(['login','username'])
    }
}
//向reducer注册方法
const mapDispatchToProps = (dispatch)=>{
    return{
		changeHomeData(param){
			dispatch(homeActionCreators.getHomeInfo(param))
		},
        handleInputFocus(list) {
		/* if (list.size === 0) {
			dispatch(actionCreators.getList());
		}	
           dispatch(actionCreators.searchFocus()); */
		   (list.size === 0) && dispatch(actionCreators.getList());
			dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
           dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },
		handleChangePage(page,spinRef){
			//初始角度
			let originAngle = spinRef.style.transform.replace(/[^0-9]/ig, '');
			if (originAngle) {
				originAngle = parseInt(originAngle, 10);
			}else {
				originAngle = 0;
			}
			spinRef.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
			dispatch(actionCreators.changePage(page));
		},
		logout(){
			dispatch(loginActionCreators.changeLogout())
			sessionStorage.clear();
		}
    }
	
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);

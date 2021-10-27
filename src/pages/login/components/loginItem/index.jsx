import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { actionCreators } from '../../store'
import { connect } from 'react-redux'
import {LoginWarpper} from './style'

class LoginItem extends Component {
    render() {
        const { login_state } = this.props;/* 此处if else执行两次的逻辑还没搞明白底层原理 */
        if (!login_state) {
        return (
            <LoginWarpper>
                <div className="login_info">
                    <div>
                    <input placeholder="账号" type="text" ref={current => this.account =current} />
                    <i className="iconfont user"  >&#xe602;</i>
                    </div>
                    <div>
                    <input placeholder="密码" type="password" ref={current => this.password =current} />
                    <i className="iconfont password">&#xe610;</i>
                    </div>
                </div>
                    
                    <div className="remember">
                        <input type="checkbox" checked="checked" readOnly/>
                        <span>记住我</span>
                    </div>
                    <div className="problem">
                    登录遇到问题?
                    </div>
                    <button onClick={ ()=>this.props.login(this.account.value,this.password.value) }>登录</button>
                    <div className="more_login">
                        <h6>社交账号登录</h6>
                    </div>
                    <ul>
                        <li><i className="iconfont weibo">&#xe600;</i></li>
                        <li><i className="iconfont wechat">&#xe665;</i></li>
                        <li><i className="iconfont qq">&#xe6da;</i></li>
                    </ul>
            </LoginWarpper>
        )
    } else {
        console.log("BUG Jump！！！")
        return <Redirect to='/' />
    }
    }
}

const mapStateToProps = (state) =>({
    login_state:state.getIn(['login','login'])
}) 

const mapDispatchToProps = (dispatch) =>({
    login(account,password){
        dispatch(actionCreators.login(account,password))
    }
   
})

export default connect(mapStateToProps,mapDispatchToProps)(LoginItem);
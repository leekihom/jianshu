/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { actionCreators } from '../../store'
import { connect } from 'react-redux'
import  { SignWarpper} from './style'

class SignItem extends Component {
    render() {
        const { sign_state } = this.props;
        if (sign_state <= 0) {
        return (
            <SignWarpper>
                <div className="login_info">
                    <div>
                    <input placeholder="你的昵称" type="text" ref={current => this.account =current} />
                    <i className="iconfont user">&#xe602;</i>
                    </div>
                    <div>
                    <input placeholder="手机号" type="text" ref={current => this.phone =current} />
                    <i className="iconfont phone">&#xe6a1;</i>
                    </div>
                    <div>
                    <input placeholder="设置密码" type="password" ref={current => this.password =current} />
                    <i className="iconfont password">&#xe610;</i>
                    </div>
                </div>
                    
                    <button onClick={ ()=>this.props.sign(this.account.value,this.phone.value,this.password.value) }>注册</button>
                    <p className="sign-up-msg">
                    点击 “注册” 即表示您同意并愿意遵守简书
                    <br/>
                    <a href="http://www.jianshu.com/p/c44d171298ce" >用户协议</a>
                    和  
                    <a href="http://www.jianshu.com/p/2ov8x3" >隐私政策</a>
                    </p>
                    <div className="more_sign">
                        <h6>社交账号直接注册</h6>
                    </div>
                    
                    <ul>
                        <li><i className="iconfont weibo">&#xe600;</i></li>
                        <li><i className="iconfont wechat">&#xe665;</i></li>
                        <li><i className="iconfont qq">&#xe6da;</i></li>
                    </ul>
            </SignWarpper>
        )
    } else {
        return <Redirect to='/login/loginItem' />
    }
    }
}

const mapStateToProps = (state) =>({
    sign_state:state.getIn(['login','sign'])
})

const mapDispatchToProps = (dispatch) =>({
    sign(account,phone,password){
        dispatch(actionCreators.sign(account,phone,password))
    }
   
})

export default connect(mapStateToProps,mapDispatchToProps)(SignItem);
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { PureComponent } from 'react'
import {NavLink, Route, Redirect,Switch} from 'react-router-dom'
import { Container,Main,Sign } from './style'
import  LoginItem  from './components/loginItem'
import  SignItem  from './components/signItem'
 
class Login extends PureComponent {
    render() {
            return (
                <Sign>
                    <Container>
                    <button className="download-content">
                                   下载简书APP
                    </button>
                       <Main>
                           <h4 className="title">
                           <NavLink  to="/login/loginItem">登录</NavLink>
                           <b>·</b>
                           <NavLink  to="/login/signItem">注册</NavLink>
                           </h4>
{/*                           <LoginItem/> */}
                           {<Switch> 
                            {/* 子路由要带上父路由的路径 */}
                            <Route  path='/login/loginItem' component={LoginItem} />
                            <Route  path='/login/signItem' component={SignItem} />
                            <Redirect to='/login/loginItem'component={LoginItem} />
                            </Switch>}
                       </Main>
                    </Container>
                </Sign>
                )
        
    }
}

 
export default Login
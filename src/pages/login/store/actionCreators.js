import axios from 'axios'
import QS from 'qs'
import * as constants from './constants'
import { message } from 'antd'
import { Redirect } from 'react-router-dom'
import {apiServe} from "../../../config";
/* import { fromJS } from 'immutable' */

const changeLogin = (username) =>({
    type:constants.CHANGE_LOGIN,
    value: {
        login:true,
        username
    },
})
const changeSign = () =>({
    type:constants.CHANGE_SIGN,
    value:1,
})

export const changeLogout = () =>({
    type:constants.CHANGE_LOGOUT,
    value:false
})

export const login = (account,password) => {
    return (dispatch)=>{
        axios({
            url:`${apiServe}/loginapi/login`,
            method:'post',
            data:QS.stringify({
                username:account,
                password:password
            })
        }
        ).then(
            res =>{
                /* () => message.success('登陆成功，欢迎你 '+account, 2.5) */
                const {Message,data:result,code} = res.data
                message
                    .loading('登陆中', 2.5)
                    .then(
                        ()=>{
                            if (code === 0) {
                                message.success('登陆成功',2.5)
                                .then(
                                    message.success('欢迎你 '+account, 2.5)
                                )
                                dispatch(changeLogin(result.username))
                                sessionStorage.setItem('username',result.username)
                            } else{
                                message.error(Message,2.5)
                            }
                        }
                    )

                /* console.log(res.data.username) */
            },
            erro =>{
                /* console.log('失败',erro.Message) */
                message.error('登录失败 '+erro.Message);
            }
        )

    }
}

/**
 * 注册
 * @param account
 * @param phone
 * @param password
 * @returns {function(*): void}
 */
export const sign = (account,phone,password) => {
    return (dispatch)=>{
        axios({
            url:`${apiServe}/loginapi/sign`,
            method:'post',
            data:QS.stringify({
                username:account,
                phone:phone,
                password:password
            })
        }
        ).then(
            res =>{
                //接口返回message提示信息
                const {Message,code} = res.data
                message
                    .loading('注册中', 2.5)
                    .then(()=>{
                            if (code === 0) {
                                dispatch(changeSign())
                                /* message.success('注册成功', 2.5) */
                                message.success(Message,2.5)
                            }
                            else{
                                message.error(Message,2.5)
                            }
                        }
                    )
            },
            erro =>{
                /* console.log('错误',erro.Message) */
                message.error("失败， "+erro.Message)
            }
        )

    }
}
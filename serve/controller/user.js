const {
    exec,
    escape
} = require('../db/mysql')
const xss = require('xss')
const uuid = require('node-uuid')
const {
    genPassword
} = require('../utils/crypto.js')
/**
 * login
 * @param username
 * @param password
 * @returns {Promise<*|{}>}
 */
const login = async (username, password) => {
    if(!username){
        return {
            flag:false,
            Message:'用户名不能为空！'
        }
    }
    if(!password){
        return {
            flag:false,
            Message:'密码不能为空！'
        }
    }
    password = genPassword(password)
    const sql = `
    select * from t_user where username=${escape(username)} and password=${escape(password)};`
    return exec(sql).then(resultData => {
        const result = resultData[0]
        if(result){
            return {
                flag:true,
                Message:'登录成功！',
                data:result
            }
        }else{
            return {
                flag:false,
                Message:'登录失败，请确认用户名或密码是否正确！',
            }
        }

    }).catch(err=>{
        return {
            flag:false,
            Message:'很抱歉，登录失败，请稍后重新尝试。',
        }
    })
}
/**
 * register
 * @param registerData
 * @returns {Promise<{id: *}>}
 */
const register = async (registerData = {}) => {
    const id= uuid.v1()
    const username = xss(registerData.username)
    const password = genPassword(xss(registerData.password))
    const phone = xss(registerData.phone)
    const createTime = Date.now()
    if(!username){
        return {
            flag:false,
            Message:'用户名不能为空！'
        }
    }
    if(!phone){
        return {
            flag:false,
            Message:'手机号码不能为空！'
        }
    }
    if(!password){
        return {
            flag:false,
            Message:'密码不能为空！'
        }
    }
    const rows = await exec(`select * from t_user where username=${escape(username)}`)
    if(rows.length>0){
        return {
            flag:false,
            Message:'用户名已存在！'
        }
    }
    const sql = `
    insert into t_user (id,username, password, phone,date)
    values (
        ${escape(id)},
        ${escape(username)},
        ${escape(password)},
        ${escape(phone)},
        ${createTime});
  `
    return exec(sql).then(insertData => {
        return {
            flag:true,
            Message:'恭喜您，注册成功。',
            data:{
                id:id,
                username:username,
            }
        }
   }).catch(err=>{
       console.log(err)
        return {
            flag:false,
            Message:'很抱歉，注册失败，请稍后重新尝试。',
        }
    })
}
module.exports = {
    login,
    register,
}
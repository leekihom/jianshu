const express = require('express');
const {
    login,
    register,
} = require('../controller/user')
const {
    SuccessModel,
    ErrorModel
} = require('../model/resModel')
const loginCheck = require('../middleware/loginCheck')

const router = express.Router()
/**
 * login
 */
router.post('/login', (req, res, next) => {
    const {
        username,
        password,
    } = req.body
    login(username, password).then(result => {
        const {flag,data,Message} = result
        if (flag) {
            req.session.regenerate((err)=>{
                req.session.userId = data.id
                req.session.username = data.username
                res.json(new SuccessModel(
                    {
                        username:data.username,
                    },
                    Message
                ))
            })
        }else {
            res.json(new ErrorModel(Message))
        }
    })
})

/**
 * logout
 */
router.get('/logout',loginCheck, (req, res, next) => {
    req.session.user = null;
    res.json(new SuccessModel('logout success'))
});
/**
 * register
 */
router.post('/sign', (req, res, next) => {
    const {
        username,
        password,
        phone
    } = req.body
    register({username,
        password,
        phone}).then((result) => {
            const {flag,Message,data} =result
            if(flag){
                req.session.regenerate((err)=>{
                    req.session.username = data.username
                    req.session.userId = data.id
                    res.json(new SuccessModel('注册成功'))
                })
            }else{
                res.json(new ErrorModel(Message || '注册失败！'))
            }
    })
        .catch(err=>{
            res.json(new ErrorModel(err || '注册失败'))
        })
})
module.exports = router;

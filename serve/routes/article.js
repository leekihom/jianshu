const {getList,addArticle, getArticle} = require('../controller/article')
const express = require('express');
const {
    SuccessModel,
    ErrorModel
} = require('../model/resModel')
const loginCheck = require('../middleware/loginCheck')
const router = express.Router()
/**
 * 获取文章列表
 */
router.get('/getList', (req, res, next) => {
    getList(req.query).then(result => {
        const {flag,data,Message} = result
        if (flag) {
            res.json(new SuccessModel(data))
        }else {
            res.json(new ErrorModel(Message))
        }
    })
})

/**
 * 获取具体的文章
 */
router.get('/getArticle', (req, res, next) => {
    const {
        id,
    } = req.query
    getArticle(id).then(result => {
        const {flag,data,Message} = result
        if (flag) {
            res.json(new SuccessModel(data))
        }else {
            res.json(new ErrorModel(Message))
        }
    })
});
/**
 * 添加文章
 */
router.post('/addArticle', loginCheck,(req, res, next) => {
    const {
        title,
        content,
        cover,
        description
    } = req.body
    addArticle(
        {
            title,
            content,
            cover,
            author_name:req.session.username,
            author_id:req.session.userId,
            description,
        })
        .then(result => {
            const {flag,data,Message} = result
            if (flag) {
                res.json(new SuccessModel(data,Message))
            }else {
                res.json(new ErrorModel(Message))
          }})
});


module.exports = router;

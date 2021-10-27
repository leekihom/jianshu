const express = require('express');
const {
    SuccessModel,
    ErrorModel
} = require('../model/resModel')
const loginCheck = require('../middleware/loginCheck')
const {getCommentList,addComment,delComment} = require("../controller/comment");

const router = express.Router()
/**
 * 获取评论列表
 */
router.get('/getCommentList', (req, res, next) => {
    req.query.userId = req.session.userId
    getCommentList(req.query).then(result => {
        const {flag,data,Message} = result
        if (flag) {
            res.json(new SuccessModel(data))
        }else {
            res.json(new ErrorModel(Message))
        }
    })
})
/**
 * 添加评论
 */
router.post('/addComment',loginCheck, (req, res, next) => {
    const {
        article_id,
        content,
    } = req.body
    addComment(
        {
            content,
            article_id,
            author_name:req.session.username,
            author_id:req.session.userId
        })
        .then(result => {
            const {flag,data,Message} = result
            if (flag) {
                res.json(new SuccessModel(data,Message))
            }else {
                res.json(new ErrorModel(Message))
          }})
})
/**
 * 删除评论
 */
router.post('/delComment',loginCheck, (req, res, next) => {
    const {
        comment_id,
    } = req.body
    delComment({id:comment_id,author_id: req.session.userId})
        .then(result => {
            const {flag,data,Message} = result
            if (flag) {
                res.json(new SuccessModel(data,Message))
            }else {
                res.json(new ErrorModel(Message))
            }})
})
module.exports = router;

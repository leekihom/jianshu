const {
    exec,
    escape
} = require('../db/mysql')
const uuid = require('node-uuid')
const xss = require('xss')
const {checkCommentOwner} = require("./check");
/**
 * 获取评论列表
 * @param id
 * @returns {Promise | Promise<unknown>}
 */
const getCommentList = (params)=>{
    let sql = `select * from t_comment where article_id=${escape(params.article_id)} and invalid='0' order by date desc;`
    return exec(sql).then(result => {
        if(result){
            return {
                flag:true,
                Message:'获取评论列表成功！',
                data:result.map(item=>{
                    return {...item,owner:item.author_id===params.userId}
                })
            }
        }else{
            return {
                flag:false,
                Message:'获取评论列表失败，请稍后重新尝试。',
            }
        }
    }).catch(err=>{
        console.log(err)
        return {
            flag:false,
            Message:'获取评论列表失败，请稍后重新尝试。',
        }
    })
}
/**
 * 添加评论
 * @param data
 * @returns {Promise<{flag: boolean, data: {article_id: *, date: number, author_name: *, id: string, author_id: *, content: *}, message: string} | {flag: boolean, message: string}>}
 */
const addComment = async (data = {}) => {
    const id= uuid.v1()
    const createTime = Date.now()
    const sql = `
    insert into t_comment (id,content, date,article_id, author_id,author_name)
    values (${escape(id)},${escape(xss(data.content))},${createTime},${escape(xss(data.article_id))},${escape(data.author_id||'')},${escape(data.author_name||'')});`
    return exec(sql).then(insertData => {
        return {
            flag:true,
            Message:'恭喜您，评论发布成功。',
            data:{
                id,
                content: data.content,
                article_id: data.article_id,
                date:createTime,
                author_id:data.author_id,
                author_name:data.author_name
            }
        }
    }).catch(err=>{
        console.log(err)
        return {
            flag:false,
            Message:'很抱歉，评论发布失败，请稍后重新尝试。',
        }
    })
}
/**
 * 删除评论
 * @param id
 * @returns {Promise | Promise<unknown>}
 */
const delComment = async (params)=>{
    const canDel = await checkCommentOwner(params.author_id)
    console.log("canDel");
    if(canDel){
        const sql = `update t_comment set invalid = '1' where id = ${escape(params.id)}`
        const result = await exec(sql)
        const {changedRows} = result
        if(changedRows){
            return {
                flag:true,
                Message:'恭喜您，评论删除成功。',
            }
        }else{
            return {
                flag:false,
                Message:'很抱歉，评论删除失败，请稍后重新尝试。',
            }
        }
    }else{
        return {
            flag:false,
            Message:'很抱歉，权限不足，评论删除失败。',
        }
    }
}
module.exports = {
    getCommentList,
    addComment,
    delComment
}
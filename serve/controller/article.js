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
 * 获取文章列表（附加搜索）
 * @returns {Promise<{flag: boolean, data: *, message: string} | {flag: boolean, message: string} | {flag: boolean, message: string}>}
 * @param params
 */
const getList = async (params) => {
   const {search = '',pageSize=10,page=1} = params
    let sql = '';
    let start = (page-1)*pageSize;
    let total = 0
    if(search.trim().length){
        sql = `select * from t_article where title like ${escape(`%${search}%`)} limit ${start}, ${escape(pageSize)};`
        total = (await exec(`select * from t_article where title like ${escape(`%${search}%`)}`)).length
    }else{
        sql = `select * from t_article limit  ${start}, ${escape(pageSize)};`
        total = (await exec(`select * from t_article`)).length
    }
    return exec(sql).then(result => {
        if(result){
            return {
                flag:true,
                Message:'获取文章列表成功！',
                data:{
                    list:result,
                    total,
                    page,
                    pageSize
                },

            }
        }else{
            return {
                flag:false,
                Message:'获取文章列表失败，请稍后重新尝试。',
            }
        }
    }).catch(err=>{
        console.log(err)
        return {
            flag:false,
            Message:'获取文章列表失败，请稍后重新尝试。',
        }
    })
}
/**
 * 根据文章ID获取文章详情
 * @param articleId
 * @returns {Promise<{flag: boolean, message: string}|{flag: boolean, data: *, message: string}|{flag: boolean, message: string}|{flag: boolean, message: string}>}
 */
const getArticle = async (articleId) => {
    if(!articleId){
        return {
            flag:false,
            Message:'文章ID不能为空！'
        }
    }
    const sql = `select * from t_article where id=${escape(articleId)};`
    return exec(sql).then(resultData => {
        const result = resultData[0]
        if(result){
            return {
                flag:true,
                Message:'获取文章成功！',
                data:result
            }
        }else{
            return {
                flag:false,
                Message:'未找到相关的文章',
            }
        }
    }).catch(err=>{
        console.log(err)
        return {
            flag:false,
            Message:'很抱歉，获取文章失败，请稍后重新尝试。',
        }
    })
}
/**
 *
 * @param articleData
 * @returns {Promise<{flag: boolean, message: string}|{flag: boolean, data: {id: string, username: *}, message: string}|{flag: boolean, message: string}>}
 */
const addArticle = async (articleData = {}) => {
    const id= uuid.v1()
    const title = xss(articleData.title)
    const content = xss(articleData.content)
    /* const content = articleData.content */
    console.log("articleData.cover:",articleData.cover);
    const cover = xss(articleData.cover)
    const createTime = Date.now()
    if(!title){
        return {
            flag:false,
            Message:'标题不能为空！'
        }
    }
    if(!content){
        return {
            flag:false,
            Message:'内容不能为空！'
        }
    }
    console.log("准备执行SQL")
    const sql = `
    insert into t_article (id,title,imgUrl,date,author_name,author_id,content,description) 
    values (${escape(id)},${escape(title)},${escape(cover)},${createTime},${escape(articleData.author_name)},${escape(articleData.author_id)},${escape(content)},${escape(articleData.description||'')});`
    return exec(sql).then(insertData => {
        return {
            flag:true,
            Message:'恭喜您，发布文章成功。',
            data:{
                id:id,
                title,
                content,
                cover,
                date:createTime,
                author_name: articleData.author_name
            }
        }
   }).catch(err=>{
       console.log('error',err)
        return {
            flag:false,
            Message:'很抱歉，文章发布失败，请稍后重新尝试。',
        }
    })
}
module.exports = {
    getList,
    getArticle,
    addArticle,
}
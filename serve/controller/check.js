const {
    exec,
    escape
} = require('../db/mysql')
/**
 * 判断是否为评论的所有者
 * @param author_id
 * @returns {Promise<boolean>}
 */
const checkCommentOwner = async (author_id) => {
    let sql = `select * from t_comment where author_id=${escape(author_id)};`
    const rows = await exec(sql)
    return rows.length>0
}
module.exports = {
    checkCommentOwner,
}
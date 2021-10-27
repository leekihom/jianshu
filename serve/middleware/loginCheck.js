module.exports = (req, res, next) => {
    if (!req.session.username) {
        return res.json({code:-2,Message:'请先登录'})
    }
    next()
}
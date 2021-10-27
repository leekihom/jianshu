const createError = require('http-errors');
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const cors = require('cors');
const userRouter = require('./routes/user');
const articleRouter = require('./routes/article');
const commentRouter = require('./routes/comment');
const ENV = process.env.NODE_ENV;
const FileStore = require('session-file-store')(session);
const identityKey = 'jian';
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'uploads')))
app.use(session({
    name: identityKey,
    secret: 'chyingp', // 用来对session id相关的cookie进行签名
    store: new FileStore({
        path : "./serve/sessions",
    }), // 本地存储session（文本文件，也可以选择其他store，比如redis的）
    saveUninitialized: false, // 是否自动保存未初始化的会话，建议false
    resave: false, // 是否每次都重新保存会话，建议false
    cookie: {
        maxAge: 24 * 60 * 60 * 1000 ,// 有效期，单位是毫秒
        path: '/',  // 默认
        httpOnly: true,  // 默认
    }
}));
app.disable('etag');
//cors
app.use(cors({
    credentials: true,
    origin:'http://localhost:3000'
}))

app.use(express.json({limit: '10mb'}));
// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(__dirname, './logs', 'access.log'), {
    flags: 'a'
});
// setup the logger
if (ENV === 'dev' || ENV === 'test') {
    app.use(logger('dev'));
} else {
    app.use(logger('combined', {
        stream: accessLogStream
    }));
}
app.use(express.urlencoded({
    limit:'10mb',
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// router
app.use('/loginapi', userRouter);
app.use('/api/article', articleRouter);
app.use('/api/comment', commentRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.Message = err.Message;
    res.locals.error = req.app.get('env') === 'dev' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
app.listen(8000, /*"192.168.56.1",*/ function (err) {
    if (err) {
        console.log("监听失败");
        throw err;
    }
    console.log("server 已经开启，默认IP: 127.0.0.1, Port: 8000");
});
module.exports = app;


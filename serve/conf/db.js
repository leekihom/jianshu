const env = process.env.NODE_ENV
let MYSQL_CONF
if(env === 'dev') {
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: 'leekihomnb123',
        port: '3306',
        database: 'jianshu',
        charset:'utf8mb4'  /* 呜呜呜，搞了好久，看了大佬的代码真的是恍然大悟！！！ 不写存储不了表情包*/
    }
}
if(env === 'test') {
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: 'leekihomnb123',
        port: '3306',
        database: 'jianshu',
        charset:'utf8mb4'
    }
}
if(env === 'production') {
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: 'leekihomnb123',
        port: '3306',
        database: 'jianshu',
        charset:'utf8mb4'
    }
}
module.exports = {
    MYSQL_CONF
}
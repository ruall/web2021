/**
 * 封装一个函数，用来生成随机数
 * */
function rand(m, n) {
    return Math.ceil(Math.random() * (n - m + 1) + m - 1)
}

//对外暴露
module.exports = rand;
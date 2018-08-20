var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

// 给NODE_ENV的环境标识为development
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})

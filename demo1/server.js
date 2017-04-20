/**
 * Created by 15061857 on 2017/4/20.
 */
'use strict'
const Hapi = require('hapi');
const server = new Hapi.Server();
server.connection({port:3000,host:'localhost'});

// 关于hapi的路由
server.route({
    method:'GET',
    path:'/',
    handler:function (request,reply) {
        reply('Hello, world');
    }
});

server.route({
    method:'GET',
    path:'/{name}',
    handler:function (request,reply) {
        reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
    }
});

// 支持静态页面  开始代码
server.register(require('inert'),(err) => {
    if (err){
        throw err;
    }
    server.route({
        method:'GET',
        path:'/hello',
        handler:function (request,reply) {
            /*一般情况下要带参数confine:false,否则会出现403错误
            * 还有一种情况要注意，如果server的启动命令是 node ./demo1/server.js 那么相对路径要写成demo1/public的形式，否则报404错误
            * http://npm.taobao.org/package/inert
            * https://hapijs.com/tutorials/serving-files
            * */
            reply.file('demo1/public/hello.html',{confine:false});
        }
    });
});
// 支持静态页面  结束代码
server.start((err) => {
    if (err){
        throw err;
    }
    console.log('Server running at:$(server.info.uri)');
});
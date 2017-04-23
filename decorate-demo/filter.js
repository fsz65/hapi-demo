/**
 * @author Robin Duda
 *
 * Adds proxying and filtering to an existing Hapi server
 * in order to be able to modify requests based on
 * authorization before they are routed.
 * 中文：讲过滤和代理添加到现有的服务器，以便在路由之前可以根据权限修改请求
 */

const Querystring = require('querystring');
const Express = require('express');
const Proxy = require('express-http-proxy');
//const Authentication = require('./authentication');
//const Config = require('./config').load('proxy');

var app = Express();

module.exports = {

  /**
   * Adds proxying in front of an existing Hapi server.
   * Allows requests to be modified by permissions before
   * they are routed.
   */
  proxy: function () {

    app.use('/', Proxy("localhost:3000", {

      filter: function (req, res) {
        return true;
      },

      decorateRequest: function (req) {

        if (req.path.startsWith('/elasticsearch/fff')) {
          //return module.exports.handleSearch(req);
          console.log(req);
          req.bodyContent = new Buffer('{}');
          req.path = '/you%20have%20no%20auth';
          return req;
        } else {
          return req;
        }
      },

      forwardPath: function (req) {
       return require('url').parse(req.url).path;
       }

    }));

    app.listen("8080");
  }
};


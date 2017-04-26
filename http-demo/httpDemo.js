/**
 * Created by 15061857 on 2017/4/21.
 */
var http = require('http');
const querystring = require('querystring');
const postData = querystring.stringify({
    'msg': 'Hello World!'
});
var dataString = null;
const options = {
    hostname: 'minos2sit.cnsuning.com',
    port: 9080,
    path: '/minos2-admin/menu/queryCurUser.htm',
    method: 'GET',
    /*headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
    }*/
    headers:{
        Cookie:'idsLoginUserIdLastTime=15061857',
        'Content-Length': Buffer.byteLength(postData)
    },
    agent:false
};

const req = http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`);
    });
    res.on('end', () => {
        console.log('No more data in response.');
    });
});

req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
});

// write data to request body
req.write(postData);
req.end();
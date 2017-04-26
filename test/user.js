/**
 * Created by 15061857 on 2017/4/24.
 * new and sent a request by cookie
 * if the cookie have no auth to get the user message,then return user a login page
 */
var http = require('http');
const userInfo = (hostname,path,cookie) => {

    return new Promise((resolve,reject) =>{
        console.log("fffff")
        const options = {
            hostname: hostname,
            port: 80,
            path: path,
            method: 'GET',
            /*headers: {
             'Content-Type': 'application/x-www-form-urlencoded',
             'Content-Length': Buffer.byteLength(postData)
             }*/
            headers:{
                Cookie:cookie
            },
            agent:false
        };
        console.log("testtest");
        const req = http.request(options, (res) => {
            var bodyString = '';
            console.log(`STATUS: ${res.statusCode}`);
            console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
            res.setEncoding('utf8');
            res.on('data', (chunk) => {
                //console.log(`BODY: ${chunk}`);
                bodyString = bodyString + chunk;
            });
            res.on('end', () => {
                console.log('No more data in response.');
                var authInfo = {authInfo:bodyString,status:res.statusCode};
                resolve(authInfo);
            });
        });

        req.end();
    });

};

const userAuthInfo = async (hostname,path,cookie) =>{
    //console.log(cookie);
    const userResult = await userInfo(hostname,path,cookie);
    console.log(userResult)
    return userResult;
}
module.exports = {
    userInfo:userAuthInfo
};
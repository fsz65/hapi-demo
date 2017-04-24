/**
 * Created by 15061857 on 2017/4/24.
 */
var http = require('http');
var async = require('async');
var bodyString = '';
function userInfo(callback) {
    const options = {
        hostname: 'mino2.xxx.com',
        port: 80,
        path: '/mino2-admin/event/getAppcodes.htm',
        method: 'GET',
        /*headers: {
         'Content-Type': 'application/x-www-form-urlencoded',
         'Content-Length': Buffer.byteLength(postData)
         }*/
        headers:{
            Cookie:'JSESSIONID=JF6ykeqtumOO8ghZV24ATuM_.master:bserver1; OUTFOX_SEARCH_USER_ID_NCOO=626726906.3653173; _snsr=direct%7Cdirect%7C%7C%7C; _snma=1%7C149301282833344485%7C1493012828333%7C1493012828332%7C1493012862785%7C2%7C1; __ssav=149301282859457430%7C1493012828594%7C1493012863011%7C1493012863044%7C4%7C1%7C1; idsLoginUserIdLastTime=15061857; LtpaToken2=aVNgIogwTOlQP55mdU8kjJ8VfesCoBlm/ZriM1YcjrI3/m9hbTvC0weTVNZchYeZniN2t7OhHO2F45U887z3D0fSiIPXZhdo/ok5aw9/91zKfFR/epd2H1+1Wm9ZmIbRZK+MJksRe7pVabNueJe9VOMEb1xvNBpD5S+RfAcouxKsTTPA9RLAMHEdtQTW0RLqpDGnViEAvILgFhDmh6HGQji7y5KIg/ph+igEgQSWJsVJF0aiP97lCITWuTtKyu84DtAd83AcV/k8QrxMqLnpQ9tv0PM3pIH3ywEsbq99NTb76NeIIqTEYStnEnBJCpFbV8XRKWgte+77Vl9qFg5S/BbNppFO8QsKVcj0a9INx6QWMXR9EozMeasuVBYvE2AGNyppFKlaWKO6Sj5qSDsuAFA80FxqvfgaU9aFFo3RSxOeCHVoslgBUCkhyWZnV7WARyNZ8UzHbgjs8jsHKRU7KjrcflFXNCyVS2U33hn7wFZwskVAzkmQePb67GsFEOQbTCXJ3FA04SWzZxShVCrUOImRNT3DWVvFFJDOPcpbjPtkD8qH1L8njSGqtXEB/wtCOk98OH8Jge9ngsAOdr9/D9iJwmyBl5CJlHXW9hmZtb1zHxooWxzBAhIm+vzNA9D3lAsKgsqQQe5G07kcLojIxvt7O90EvVPwmx1+D87/hcA=; LtpaToken=im+8VZgmf2LVuDmijoOvHKp9yP9cYVe6ZvECECtC3rz/mSw+LnipB98pEHBcWMp6/DlJ3eyfhZSK1Bk8sSBZaBFk/kD4Ri576N1E0AuHlMwENZtGbbVU7ZUfi7dRAemy4mGnw8dzFfrsoxEFNm3PZ06hW/YMOU3SXOBUzyYE5xxAjQMwfL3tjN3WPW9qGQ+vcQkJVy+FmS4c2K5LxrnpjtiBq/VXneK4/1D5UIco6dyBVc8qDKreYV94l6MW4duHnJBJ+3vFvhcoR/phPHAWK2JKv8UMazJlnZuEwq8HmgRDGF/Coz7R8SvIsD/Sw58mWkdGA2n3hCT7CRc5WL93lw==; minos2prd=si2947F7C0A5D4CF2F078474224D433C05'
        },
        agent:false
    };

    const req = http.request(options, (res) => {
        console.log(`STATUS: ${res.statusCode}`);
        console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
            //console.log(`BODY: ${chunk}`);
            bodyString = bodyString + chunk;
        });
        res.on('end', () => {
            console.log('No more data in response.');
            callback(bodyString);
        });
    });

    req.end();
}

userInfo(function (v) {
    console.log(v);
});
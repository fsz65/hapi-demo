/**
 * Created by 15061857 on 2017/4/24.
 */
var rp = require('request-promise');
var options = {
    method:'GET',
    uri: 'http://minos2.cnsuning.com/minos2-admin/event/getAppcodes.htm',
    /*qs: {
        access_token: 'xxxxx xxxxx' // -> uri + '?access_token=xxxxx%20xxxxx'
    },*/
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36',
        'Cookie':'JSESSIONID=JF6ykeqtumOO8ghZV24ATuM_.master:bserver1; OUTFOX_SEARCH_USER_ID_NCOO=626726906.3653173; _snsr=direct%7Cdirect%7C%7C%7C; _snma=1%7C149301282833344485%7C1493012828333%7C1493012828332%7C1493012862785%7C2%7C1; __ssav=149301282859457430%7C1493012828594%7C1493012863011%7C1493012863044%7C4%7C1%7C1; idsLoginUserIdLastTime=15061857; LtpaToken2=aVNgIogwTOlQP55mdU8kjJ8VfesCoBlm/ZriM1YcjrI3/m9hbTvC0weTVNZchYeZniN2t7OhHO2F45U887z3D0fSiIPXZhdo/ok5aw9/91zKfFR/epd2H1+1Wm9ZmIbRZK+MJksRe7pVabNueJe9VOMEb1xvNBpD5S+RfAcouxKsTTPA9RLAMHEdtQTW0RLqpDGnViEAvILgFhDmh6HGQji7y5KIg/ph+igEgQSWJsVJF0aiP97lCITWuTtKyu84DtAd83AcV/k8QrxMqLnpQ9tv0PM3pIH3ywEsbq99NTb76NeIIqTEYStnEnBJCpFbV8XRKWgte+77Vl9qFg5S/BbNppFO8QsKVcj0a9INx6QWMXR9EozMeasuVBYvE2AGNyppFKlaWKO6Sj5qSDsuAFA80FxqvfgaU9aFFo3RSxOeCHVoslgBUCkhyWZnV7WARyNZ8UzHbgjs8jsHKRU7KjrcflFXNCyVS2U33hn7wFZwskVAzkmQePb67GsFEOQbTCXJ3FA04SWzZxShVCrUOImRNT3DWVvFFJDOPcpbjPtkD8qH1L8njSGqtXEB/wtCOk98OH8Jge9ngsAOdr9/D9iJwmyBl5CJlHXW9hmZtb1zHxooWxzBAhIm+vzNA9D3lAsKgsqQQe5G07kcLojIxvt7O90EvVPwmx1+D87/hcA=; LtpaToken=im+8VZgmf2LVuDmijoOvHKp9yP9cYVe6ZvECECtC3rz/mSw+LnipB98pEHBcWMp6/DlJ3eyfhZSK1Bk8sSBZaBFk/kD4Ri576N1E0AuHlMwENZtGbbVU7ZUfi7dRAemy4mGnw8dzFfrsoxEFNm3PZ06hW/YMOU3SXOBUzyYE5xxAjQMwfL3tjN3WPW9qGQ+vcQkJVy+FmS4c2K5LxrnpjtiBq/VXneK4/1D5UIco6dyBVc8qDKreYV94l6MW4duHnJBJ+3vFvhcoR/phPHAWK2JKv8UMazJlnZuEwq8HmgRDGF/Coz7R8SvIsD/Sw58mWkdGA2n3hCT7CRc5WL93lw==; minos2prd=si2947F7C0A5D4CF2F078474224D433C05'
    }
    //json: true // Automatically parses the JSON string in the response
};

rp(options)
    .then(function (repos) {
        console.log("fff");
        //console.log('User has %d repos', repos.length);
        console.log(repos);
    })
    .catch(function (err) {
        console.log(err);
        // API call failed...
    });
console.log("fsz end");
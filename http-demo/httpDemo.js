/**
 * Created by 15061857 on 2017/4/21.
 */
var http = require('http');
const querystring = require('querystring');
const postData = querystring.stringify({
    'msg': 'Hello World!'
});

const options = {
    hostname: 'www.baidu.com',
    port: 80,
    path: '/',
    method: 'GET',
    /*headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
    }*/
    headers:{
        Cookie:'JSESSIONID=akeo5eFbdmEmWvvmB9a2K8Nu.master:bserver1; OUTFOX_SEARCH_USER_ID_NCOO=626726906.3653173; minos2sit=si8D9D349F4FD618614C202F4A975EF46C; secureToken=A6DA9C63D69073053D31BC10E12ACD62; rdasSit=si87245EB18C0A55756D8CB4573B2E540F; LtpaToken2=/7bgf/a5EbE4xldi9JDBVWKX+CmYm0SiW8makGODOvxa1MjxNtGMp5AcGD2ScvJXF1EgbABWUEP3LU0o5fc/8srcvF7QLHRcRjyHiYueO0caiAK6o2kgIJ21+8Jg16iO4Dr2Q/Xza8og1FRnVly+3uJLV8F7o6b+2OW/5bwbqZBQLQVVuSApHbW0hN+WAlYowck5Z89asYY46H5wopxNdeHrT9Es8pMxuek9Y3OBsB0lhYOxWb+dlkoa9LifCNjkoaNagsPmnX6huQAgOJojN7fqX7t7BSvl8TAyMh2PmKYsB6HrEb8PVjtExHEV8S9rwMU++2Af8jwZ+1DPpfBagN3guPG7x0icXXbfHGHfn7bZO0egVFr4q5MFIdaEa12J17EdTUZOS87uAHL9AIGmFMOs+cBmuCcIaB8RrgOsPLxENQJWuEi6lrW9E/SvDAQGLxs1BkrIlEw4E+OOr/8uyoji58pNyKeYnccvjK1spvdQVGDpcnaLfgsVqhWMkwDtKnjporCku6a++Stkw+b/RNJdM59gklKySKaS3drUpwSgE+KhBKlSbB8Rvz+PdiVvFUlI/QWoU7eRhIdeyNik8UAr77ttM8eri3Vq2TTepJkU0os+TlSghVLl74dSw0WJP7erVLXeBmLCGGDn348nM5zElXiZAT0gdfjRIRwxOQI=; LtpaToken=im+8VZgmf2LVuDmijoOvHKp9yP9cYVe6ZvECECtC3rz/mSw+LnipB98pEHBcWMp6/DlJ3eyfhZSK1Bk8sSBZaBFk/kD4Ri57mNDDZFyxV0wENZtGbbVU7ZUfi7dRAemy4mGnw8dzFfrsoxEFNm3PZ06hW/YMOU3SXOBUzyYE5xxAjQMwfL3tjN3WPW9qGQ+vcQkJVy+FmS4c2K5LxrnpjtiBq/VXneK4/1D5UIco6dyBVc8qDKreYV94l6MW4duHnJBJ+3vFvhcoR/phPHAWK2JKv8UMazJlnZuEwq8HmgRDGF/Coz7R8SvIsD/Sw58mWkdGA2n3hCT7CRc5WL93lw==; idsLoginUserIdLastTime=15061857; authId=siAF2E4BC952516F1E1B7114D1ED84A76C; minos2prd=siAF2E4BC952516F1E1B7114D1ED84A76C'
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
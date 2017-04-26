/**
 * Created by 15061857 on 2017/4/25.
 */
const f = () => {
    console.log("async test")
    return new Promise((resolve, reject) => {
        var user = {name:'fsz',age:'18'};
        setTimeout(() => {
            resolve(user);
        }, 2000);
    });
};

const testAsync = async () => {
    const t = await f();
    console.log(t);
    console.log("ffff");
    return t;
};
module.exports = {
    test:testAsync
};
//testAsync();
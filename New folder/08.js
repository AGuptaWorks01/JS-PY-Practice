// let p = new Promise((resolve, reject) => {
//     console.log("it is possible");
//     setTimeout(() => {
//         console.log("this is done");
//         // resolve("resolved");
//         reject(new Error("rejected"));
//     }, 2000);
// })

// p.then((value) => {
//     console.log("done");
// })
// console.log(p);


let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("resolve after 2s");
        resolve(99);
    }, 2000);
})

p1.then((value) => {
    console.log(value);
    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => { resolve("Promise 2") }, 2000);
    })
    return p2

}).then((value) => {
    console.log("we done");
    return 2
}).then((value) => {
    console.log("we finally done");
})
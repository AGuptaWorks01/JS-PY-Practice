// let a = prompt("entrer")
// let b = prompt("entrer")
// let c = prompt("entrer")
// console.log(a, b, c);


let promise = new Promise(function(resolve, reject) {
    resolve(56)
});
setTimeout(function() {
    console.log("hello");
}, 1000)
console.log("me hoon Don" + " js");
console.log(promise);
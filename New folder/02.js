// let marks = {
//     maths: 90,
//     science: 85,
//     english: 95
// }

// for (let i = 0; i < Object.keys(marks).length; i++) {
//     console.log("the marks of ", +Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
// }


// let cn = 42;
// let i
// while (i != cn) {
//     console.log("tyr again");
//     i = prompt("enter number")
// }
// console.log("Done!");



//<<<--------------------------------------------------------->>>


// let boy1 = "the";
// let boy2 = "bye";
// let sentence = `${boy1} is the frind of bye`;
// console.log(sentence);


// let frui = `Bana\na`
// console.log(frui);


// let fname = `abcd\n`;
// console.log(fname.length);


// const sentence = 'the quick brown fox jumped over the lazy dog';
// const word = 'fox2';
// console.log(sentence.includes(word));
// console.log(`the word "${word}" ${sentence.includes(word)?'is':'is not'} in `);


// let str2 = "plx give 1000";
// let amt = str2.slice("plx give".length);
// console.log(amt);


// let a = [1, 2, 3, 4, 5];
// a[2] = 70;
// console.log(a);
// console.log(typeof a);


//<<---------------------------------------------------------------->>

// let num = [1, 2, 3, 4, 5];
// let b = num.toString();
// console.log(b);
// // console.log(typeof b);
// let c = num.join(" and ");
// console.log(c, typeof c);
// num.pop();

// console.log(num);

// let compare = (a, b) => {
//     return b - a
// // }

// let num = [499, 22, 3, 14, 5, 6, 7, 199]
// num.sort((a, b) => a - b);
// console.log(num.reverse());
// console.log(num);


// let num = [1, 2, 3, 4];
// for (let i = 0; i < num.length; i++) {
//     console.log(num);
// }


// let name = "test";
// let arr = Array.from(name);
// console.log(arr);


// let num = [1, 2, 3, 4];
// for (let i in num) {
//     console.log(num);
// }

// for (let i of num) {
//     console.log(num);
// }


// let arr = [1, 2, 3, 4];
// let a = arr.map((value) => {
//     console.log(value);
//     return value + 1
// })
// console.log(a);


// let arr = [10, 20, 3, 4];
// let a1 = arr.filter((a) => {
//     return a < 10
// })
// console.log(a1);
// console.log(arr);


// let arr = [1, 2, 3, 3, 6, 9];
// arr.reduce((h1, h2) => {
//     return h1 + h2
// })
// console.log(arr);


//<<_------------------------------>></_------------------------------>

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let a = prompt("Enter a string")
// a = Number.parseInt(a);
// arr.push(a);
// console.log(arr);


// let arr = [1, 2, 30, 40, 36, 450];
// let n = arr.filter((x) => {
//     return x % 10 == 0;
// })
// console.log(n);


// let arr = [1, 2, 3, 9];
// let n = arr.map((x) => {
//     return x * x
// })
// console.log(n);


let arr = [1, 2, 3, 9];
let n = arr.reduce((x1, x2) => {
    return x1 * x2
})
console.log(n);
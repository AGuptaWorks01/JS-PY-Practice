// let rectangle = {
// length: 2,
// breadth: 3
// };

// // for-in loop
// for (let key in rectangle) {
//     console.log(key, rectangle[key]);
// }

//for-of loop
// for (let key of Object.entries(rectangle)) {
// console.log(key)
// };

// let src = {
//     a: 10,
//     b: 20,
//     c: 30
// };

// let dest = {};
// for (let key in src) {
//     dest[key] = src[key];
// }
// console.log(dest);
// src.a++;
// console.log(dest);

// let src = {
//     a: 1,
//     b: 2,
//     c: 3
// };

// let src1 = { value: 99 };
// let dest = Object.assign({}, src, src1);
// console.log(dest);
// src.a++;
// console.log(dest);

// let src = { a: 1, b: 2, c: 3 };

// let dest = {...src };
// console.log(dest);
// src.a++;
// console.log(dest);

// for( let i= 1;  i<=j; i++){
// 	let pattern = '';
// 	for(let j=1; j<=5; j++){
// 		pattern += "x";
// 	}
// 	console.log(pattern);
// }

// for(let i=1; i<5; i++){
// 	console.log("x".repeat(i));
// }

// for(let i=1; i<=5; i++){
// let pattern = '';
// for(let j=1; j<=i; j++){
// 	pattern += "x";
// }
// console.log(pattern);
// }

// for (let i=5; i>=1; i--) {
// 	let pattern = '';
//   for (let j=i; j>=1; j--) {
//     // document.write("x");
//     pattern += 'x';
//   }
//   console.log(pattern)
// //   document.write("<br>")
// }

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= i; j++) {
//     document.write("x");
//   }
//   document.write("<br>");
// }

// document.write("<br>")

// for(let i=1; i<=5; i++){
//   for(let j=1; j<=i; j++){
//     document.write("*")
//   }document.write("<br>")
// }

// for(let i=5; i>=1; i--){
//   for(let j=i; j>=1; j--){
//     document.write("*")
//   }document.write("<br>")
// }

// for(let i=1; i<=5; i++){
//   for(k=1; k<=5-i; k++){
//     document.write('&nbsp;&nbsp')
//   }
//   for(let j=1; j<=i;j++){
//     document.write("*")
//   }document.write('<br>')
// }

// for(let i= 1; i <=5; i++){
//   for(k=1; k<=5-i; k++){
//     document.write('&nbsp;&nbsp')
//   }
//   for(let j=1; j<=i; j++){
//     document.write("*")
//   }document.write('<br>')
// }

// function a(){
// for(let i=1; i<=5; i++){
//   let row = '';
//   for(let j=1; j<=i; j++){
//     row += '*';
//   }
//   console.log(row);
// }
// }
// a();
// console.log('\n');


function invertedTriangle() {
  for (let i = 5; i >= 1; i--) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row += '*';
    }
    console.log(row);
  }
}

invertedTriangle();
console.log('\n');
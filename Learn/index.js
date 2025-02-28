// let a = 18;
// if (a > 20) {
// 	console.log('a is truthy');
// } else {
// 	console.log('a is falsy');
// }

// console.log(
//     "me hoon js"
// );

// let rect = {
//     length: 1,
//     breath: 2,

//     don: function() {

//         console.log(`don`);
//     }
// };

// function createRectangle(len, bre) {
// 	return rectangle = {
// 		length: len,
// 		breath: bre,

// 		draw() {
// 			console.log("drawing rectangle...");
// 		},
// 	};
// }

// let rectangle01 = createRectangle(5, 4);

// return Rectangle;

// let obj = createobject();


// function Rectangle() {
//     this.length = 1;
//     this.breath = 2;
//     this.draw = function() {
//         console.log("drawing rectangle...");
//     }
// }
// let rectangleObject = new Rectangle(1, 2);

// rectangleObject.color = 'Red'
// console.log(rectangleObject);

// delete rectangleObject.color;

// let Rectangle1 = new Function(
// 	'length', 'breadth',
// 	`this.length = length;
//     this.breadth = breadth;
//     this.draw = function(){
//     console.log("drawing rectangle...")}`);

// let rect = new Rectangle1(2, 3);
// console.log(rect);


// let a = { value: 5 };
// let b = a;

// a.value++;
// console.log(a.value);
// console.log(b.value);


// let a = { value: 10 };

// function inc(a) {
//     a.value++;
// }
// inc(a);
// console.log(a.value);




// function arr() {
//     const arr = [1, 2, 3, 4, 5];
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// console.log(arr());


// let num = 13;
// if (num % 2 === 0) {
//     console.log(num + " is even number");
// } else {
//     console.log(num + " is odd number");
// }

// let num = 11;
// let res = num % 2 === 0 ? `${ num } is even` : `${ num } is odd`
// console.log(res)


// let a = 10;
// let b = 15;
// let c = 20;
// let smallest = Math.min(a, b, c);
// console.log("this is smallest number " + smallest);



// const reverseNumber = n =>
// 	parseInt(n.toString().split('').reverse().join(''));
// console.log(reverseNumber(12345));


// function isPalindrome(n) {
// 	return n == n.toString().split('').reverse().join('');
// }

// console.log(isPalindrome(12345));
// console.log(isPalindrome('pop'));
// console.log(isPalindrome('999'));




// checkPrime = (number) => {
//     let isPrime = true
//     if (number === 1 || number < 1)
//         return 'number is not prime'
//     else {
//         for (let i = 2; i <= number / 2; i++) {
//             if (number % i === 0)
//                 isPrime = false
//         }
//         if (isPrime)
//             return 'Number is prime'
//         else {
//             return 'number is not prime'
//         }
//     }
// }
// console.log(checkPrime(4))


const prime = (n) => {
    if (n <= 1) return 'Number is not prime'
    for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0) return 'not a prime number'
    }
    return 'prime number'
}
console.log(prime(10))
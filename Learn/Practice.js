// const revInt = (num)=>{
// let myRevNum = num.toString().split('').reverse().join()
// console.log(myRevNum)
// }
// revInt(12345)


// let a = prompt('Hello ')
// a = Number.parseInt(a)

// if (a < 0) {
// 	alert("plz enter greter number")
// } else if (a < 9) {
// 	alert('your number is lesss than 9')
// } else if (a < 9 || a < 18) {
// 	alert("your number is between 9 to 18")
// } else {
// 	alert("Is greter than 18")
// }
// console.log(a);


// const day = 2;
// switch (day) {
// 	case 1:
// 		console.log("Day 1 is Monday");
// 		break
// 	case 2:
// 		console.log("Day 2 is Tuesday");
// 		break
// 	case 3:
// 		console.log("Day 3 is Tuesday");
// 		break
// 	case 4:
// 		console.log("Day 4 is Tuesday");
// 		break
// 	case 5:
// 		console.log("Day 5 is Tuesday");
// 		break
// 	case 6:
// 		console.log("Day 6 is Tuesday");
// 		break
// 	case 7:
// 		console.log("Day 7 is Tuesday");
// 		break
// }


// const days = ["Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"];
// const day = 5;
// for (let i = 0; i < days.length; i++) {
// 	if (i + 1 === day) {
// 		console.log(`Day ${day} is ${days[i]}`);
// 		break
// 	}
// }


// let number = prompt("enter a number")
// num = Number.parseInt(number)
// // if (num % 2 == 0 && num % 3 == 0) {
// if (num % 2 == 0) {
// 	("Number is divisible by 2")
// } else if (num % 3 == 0) {
// 	("Number is divisible by 3")
// } else {
// 	("Number is not divisible by 2 and 3")
// }


// function factorial(n) {
// 	return n === 0 ? 1 : n * factorial(n - 1)
// }
// console.log(factorial(5));


// a = 10;
// b = 20;
// b = b - a // 20 - 10 = 10
// a = b + a // 10 + 10 = 20
// console.log("the swap value is A value", a);
// console.log("the swap value is B value", b);


function getSum(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === 0) {
                return [array[i], array[j]]
            }
        }
    }
    return null;
}
const result = getSum([-5, 4, -3, -2, 0, 2, 3, 4, 6, 8])
console.log(result);
// function SmallestOfThree(a, b, c) {
// 	if (a < b && a < c) {
// 		return a;
// 	} else if (b < a && b < c) {
// 		return b
// 	} else if(c < a && c < b) {
// 		return c
// 	}
// 	return a
// }
// console.log(SmallestOfThree(30,1,9));



// //	Revising a array
// const ArrayReverse = (arr) => {
//     let start = 0
//     let end = arr.length - 1
//     while (start < end) {
//         let temp = arr[start]
//         arr[start] = arr[end]
//         arr[end] = temp
//         start++
//         end--
//     }
//     return arr
// }
// let arr = [56, 89, 45, 42, 0]
// ArrayReverse(arr)
// console.log(arr);



let data = [5, 2, 9, 1, 5, 6];
let temp;
function customReverse(data, start, end) {
    console.warn(data)
    if (start <= end) {
        temp = data[start]
        data[start] = data[end]
        data[end] = temp
        customReverse(data, start + 1, end - 1)
    }
}
customReverse(data, 0, data.length - 1)
console.log(data);





// const MinMax = (arr) => {
//     let max = arr[0]
//     let min = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i]
//         }
//         if (arr[i] < min) {
//             min = arr[i]
//         }
//     }
//     return { max, min }
// }
// let data = [50, 26, 1]
// let result = MinMax(data)
// console.log(result.max);
// console.log(result.min);



// function rotateArray(arr, k) {
// 	let n = arr.length;
// 	// isme hum arr ka length  nikal rhe hai jo ki n=5 hai
// 	k = k % n;
// 	// yeha pe k= 2 hai toh 2 = 2 % 5 = 1
// 	reverseArray(arr, 0, n - 1)
// 	reverseArray(arr, 0, k - 1)
// 	reverseArray(arr, k, n - 1)
// 	return arr
// }
// function reverseArray(arr, start, end) {
// 	while (start < end) {
// 		let temp = arr[start]
// 		arr[start] = arr[end]
// 		arr[end] = temp
// 		start++;
// 		end--;
// 	}
// }
// let arr = [1, 2, 3, 4, 5]
// let k = 2
// let rotatedArray = rotateArray(arr, k)
// console.log(rotatedArray);



// function findRepeatedCharacters(str) {
// 	let repeatedChars = ''
// 	let counts = ''
// 	for (let i = 0; i < str.length; i++) {
// 		let count = 0
// 		for (let j = i + 1; j < str.length; j++) {
// 			if (str[i] === str[j]) {
// 				count++
// 			}
// 		}
// 		if (count > 0 && !repeatedChars.includes(str[i])) {
// 			repeatedChars += str[i]
// 			counts += (count + 1) + ' '
// 		}
// 	}
// 	return { repeatedChars, counts };
// }
// let inputString = "anurag";
// let result = findRepeatedCharacters(inputString)
// console.log("Repeated Characters:", result.repeatedChars);
// console.log("Repeated Characters:", result.counts);



// // character repated
// let str = 'hello peter hooo'
// let srtObj = {}
// let maxKey = ''
// for (let i = 0; i < str.length; i++) {
//     let key = str[i];
//     if (key === ' ') continue;
//     if (!srtObj[key]) {
//         srtObj[key] = 0
//     }
//     srtObj[key]++
//     if (maxKey == '' || srtObj[key] > srtObj[maxKey]) {
//         maxKey = key
//     }
// }
// console.log(`${maxKey}:${srtObj[maxKey]}`);
// console.log(srtObj);



// let str = 'anurag'
// let freq = {}
// let count = ''
// for (let i = 0; i < str.length; i++) {
//     let char = str[i]
//     if (!freq[char]) {
//         freq[char] = 1
//     } else {
//         freq[char]++
//     }
//     count++
// }
// for (let char in freq) {
//     if (freq[char] > 1)
//         console.log(`${char}: ${freq[char]}`)
// }
// console.log(freq);




// let str = "anurag gupta";
// let freq = {};
// // Step 1: Calculate character frequencies
// for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (freq[char]) {
//         freq[char]++;
//     } else {
//         freq[char] = 1;
//     }
// }
// // Step 2: Find the maximum frequency
// let maxCount = 0;
// for (let char in freq) {
//     if (freq[char] > maxCount) {
//         maxCount = freq[char];
//     }
// }
// // Step 3: Collect all characters with maxCount
// let mostRepeatedChars = [];
// for (let char in freq) {
//     if (freq[char] === maxCount) {
//         mostRepeatedChars.push(char);
//     }
// }
// // Step 4: Log the result
// console.log(`Most repeated character(s): ${mostRepeatedChars.join(', ')} (appears ${maxCount} times)`);



// let data = [1, 2, 3, 4, 5]
// let data1 = [7, 8, 9, 10]
// let data3 = []
// for (let i = 0; i < data.length; i++) {
//     data3[i] = data[i]
// }
// for (let i = 0; i < data1.length; i++) {
//     data3[data.length + i] = data1[i]
// }
// console.log(data3);



// let data1 = [1, 3, 5, 7, 9, 11];
// let data2 = [2, 4, 6, 8, 10, 13, 15];
// let data3 = [];
// let d1 = 0;
// let d2 = 0;
// let d3 = 0;
// while (d1 < data1.length && d2 < data2.length) {
//     if (data1[d1] < data2[d2]) {
//         data3[d3] = data1[d1]
//         d1++
//         // console.log(d1);
//     } else {
//         data3[d3] = data2[d2]
//         d2++
//     }
//     d3++
//     // console.log(d3);
// }
// while (d1 < data1.length) {
//     data3[d3] = data1[d1]
//     d1++
//     d3++
// }
// while (d2 < data2.length) {
//     data3[d3] = data2[d2]
//     d2++
//     d3++
// }
// console.log(data3.join(', '))



// // sorting array
// let data = [90, 45, 85, 26, 35, 10]
// for (let i = 0; i < data.length; i++) {
//     for (let j = 0; j < data.length; j++) {
//         if (data[j] > data[j + 1]) {
//             let temp = data[j]
//             data[j] = data[j + 1]
//             data[j + 1] = temp
//         }
//     }
// }
// console.log(data);

// // Using bubbleSort shorting Array
// let bub = [89, 13, 56, 4, 26, 9]
// for (let i = 0; i < bub.length; i++) {
//     for (let j = 0; j < bub.length; j++) {
//         if (bub[j] > bub[j + 1]) {
//             let temp = bub[j]
//             bub[j] = bub[j + 1]
//             bub[j + 1] = temp
//         }
//     }
// }
// console.log(bub);



// reversed a string
// let strs = 'anurag'
// let revesed = ''
// for (let i = strs.length - 1; i >= 0; i--) {
// 	revesed += strs[i]
// }
// console.log(revesed);




// // finding factorial
// const fact = (item) => {
//     if (item == 0) {
//         return 1
//     }
//     return item * fact(item - 1)
// }
// let data = 5
// console.log(fact(data));




// let array = [1, 2, 3, 4, 5]
// let sum1 = 0
// for (let i = 0; i < array.length; i++) {
//     sum1 += array[i]
// }
// console.log(sum1);


// ---------------    iterative approach
// function sumOfArray(arr) {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     return sum
// }
// const number = [1, 2, 3, 4, 5]
// console.log("sum of array", sumOfArray(number));



// function reverseString(str) {
//     let reversed = ''
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i]
//     }
//     return reversed
// }
// console.log(reverseString('anurag'));









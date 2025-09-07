// // Even Odd
// function isEven(num) {
//     return (num & 1) === 0;
// }
// console.log(isEven(9))
// console.log(isEven(8))

// //  Formatting Numbers with Units (K, M, B) in JavaScript
// function formatNumber(num) {
//     return num >= 1e9 ? (num / 1e9).toFixed(1) + "B" :
//         num >= 1e6 ? (num / 1e6).toFixed(1) + "M" :
//             num >= 1e3 ? (num / 1e3).toFixed(1) + "K" : num;
// }
// console.log(formatNumber(21000))
// console.log(formatNumber(23000000))
// console.log(formatNumber(29000000000))

// // OTP Generator
// const getOtp = (length = 6) => {
//     let otp = ''
//     for (let i = 0; i < length; i++) {
//         otp += Math.floor(Math.random() * 10)
//     }
//     return otp;
// }
// console.log("OTP:", getOtp())



let array = [1, 2, 3]
for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}


// array.forEach(el => {
//     console.log(el);
// });

// function generateToken() {
//     return `${Math.random().toString(36).substring(2)}`;
// }
// const token = generateToken()
// console.log("Generated Token:", token)

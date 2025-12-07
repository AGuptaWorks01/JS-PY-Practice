// function same(arr1, arr2) {
//     if(arr1.length !== arr2.length) return false;

//     for (let i = 0; i < arr1.length; i++) {
//         let correctIndex = arr2.indexOf(arr1[i] ** 2)
//         if(correctIndex === -1) return false;
//         arr2.splice(correctIndex, 1)
//     }
//     return true;
// }
// console.log(same([1, 2, 3, 4], [1, 4, 9, 16]));


// function same(arr1, arr2) {
//     if (arr1.length !== arr2.length) return false;
//     let frequencyCounter1 = {};
//     let frequencyCounter2 = {};

//     for (const val of arr1) frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
//     for (const val of arr2) frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1

//     for (let key in frequencyCounter1) {
//         if (!(key ** 2 in frequencyCounter2)) return false;
//         if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false
//     }
//     return true;
// }
// console.log(same([1, 2, 3, 4, 55], [1, 4, 9, 16]));


// function same(arr1,arr2){
// if(arr1.length !== arr2.length) return false;

// let freq = {};
//     // Count frequency of arr2 values
//     for(let val of arr2) {
//         freq[val] = (freq[val] || 0) + 1
//     }
//     // Check squares using arr1
//     for (const val of arr1) {
//         let sq = val * val;
//         if (!freq[sq]) return false;     // square nahi mila
//         freq[sq]--; // ek element consume kar diya
//         console.log(freq[sq]--);
//     }
//     return true;
// }
// console.log(same([1, 2, 3, 4,2], [1, 4, 9, 16,4])); 


function same(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    let freq = {};
    // Count frequency of arr2 values
    for (let val of arr2) {
        freq[val] = (freq[val] || 0) + 1
    }
    // console.log(freq);
    // Check squares using arr1
    for (const val of arr1) {
        let sq = val * val;
        if (!freq[sq]) return false;     // square nahi mila
        freq[sq]--; // ek element consume kar diya
    }
    return true;
}
console.log(same([1, 2, 3, 4, 2], [1, 4, 9, 16, 4])); 
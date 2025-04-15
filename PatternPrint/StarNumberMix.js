// function starNumberTriangle(n) {
//     for (let i = 1; i <= n; i++) {
//         let row = ""
//         for (let j = 1; j <= i; j++) {
//             row += "*"
//         }
//         row += i;
//         console.log(row);
//     }

//     for (let i = n ; i >= 1; i--) {
//         let row = ""
//         for (let j = 1; j <= i; j++) {
//             row += "*"
//         }
//         row += i;
//         console.log(row);
//     }
// }
// starNumberTriangle(5);

// function alternateStarNumber(n) {
//     let count = 1;
//     for (let i = 1; i <= n; i++) {
//         let row = ""
//         for (let j = 1; j <= i; j++) {
//             if ((i + j) % 2 === 0) {
//                 row += count + " "
//                 count++
//             } else {
//                 row += "* "
//             }
//         } console.log(row);
//     }
// }
// alternateStarNumber(5);


// function starBorderWithNumbers(n) {
//     let num = 1;
//     for (let i = 1; i <= n; i++) {
//         let row = ""
//         for (let j = 1; j <= n; j++) {
//             if (i === 1 || i === n || j === 1 || j === n) {
//                 row += "* "
//             } else {
//                 row += num + " ";
//                 num++;
//             }
//         }
//         console.log(row);
//     }
// }
// starBorderWithNumbers(5)

// function starNumberPyramid(n) {
//     let num = 1;
//     for (let i = 1; i <= n; i++) {
//         let row = ' '.repeat(n - i);
//         for (let j = 1; j <= 2 * i - 1; j++) {
//             if (i % 2 === 0) {
//                 row += num + " ";
//                 num++;
//             } else {
//                 row += "* "
//             }
//         }
//         console.log(row.trim());
//     }
// }
// starNumberPyramid(5)


// function borderWithDiagonalNumbers(n) {
//     for (let i = 1; i <= n; i++) {
//         let row = ""
//         for (let j = 1; j <= n; j++) {
//             if (i === 1 || i === n || j === 1 || j === n) {
//                 row += "* "
//             } else if (i === j) {
//                 row += (i - 1) + ' '
//             } else {
//                 row += "  "
//             }
//         }
//         console.log(row);
//     }
// } borderWithDiagonalNumbers(5);


// function starNumberCross(n) {
//     for (let i = 1; i <= n; i++) {
//         let row = '';
//         for (let j = 1; j <= n; j++) {
//             if (j === 1 || j === n) {
//                 row += '* ';
//             } else if (j === Math.ceil(n / 2)) {
//                 row += i + ' ';
//             } else {
//                 row += '  ';
//             }
//         }
//         console.log(row);
//     }
// }
// starNumberCross(5);



function starNumberButterfly(n) {
    let num = 1;
    for (let i = 1; i <= n; i++) {
        let row = '';
        // Left stars
        for (let j = 1; j <= i; j++) {
            row += '* ';
        }
        // Middle space
        for (let s = 1; s <= 2 * (n - i); s++) {
            row += ' ';
        }
        // Right numbers
        for (let j = 1; j <= i; j++) {
            row += num + ' ';
            num++;
        }
        console.log(row);
    }
}
starNumberButterfly(4);

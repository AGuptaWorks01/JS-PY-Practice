// function start(n) {
//     for (let i = 0; i <= n; i++) {
//         let data = ""
//         for (let j = 0; j <= i; j++) {
//             data += "*"
//         }
//         console.log(data);
//     }
// }
// start(5)
// console.log();

// function square() {
//     for (let i = 1; i <= 5; i++) {
//         let row = ''
//         for (let j = 1; j <= 5; j++) {
//             row += "*"
//         }
//         console.log(row);
//     }
// }
// square()
// console.log()

// // # Right-Angled Diamond Pattern
// function RightAngled(n) {
//   for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//       row += " *";
//     }
//     console.log(row);
//   }

//   for (let i = n - 1; i >= 1; i--) {
//     let row = "";
//     for (let j = i; j >= 1; j--) {
//       row += " *";
//     }
//     console.log(row);
//   }
// }
// RightAngled(5);

// // Diamond Pattern
// const n = 5;
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= 5 - i; j++) {
//     row += " ";
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     row += "*";
//   }
//   console.log(row);
// }
// for (let i = n - 1; i >= 1; i--) {
//   let row = "";
//   for (let j = 1; j <= n - i; j++) {
//     row += " ";
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     row += "*";
//   }
//   console.log(row);
// }

// function numberTriangle() {
//   for (let i = 1; i <= 5; i++) {
//     let row = '';
//     for (let j = 1; j <= i; j++) {
//       row += j + ' ';
//     }
//     console.log(row);
//   }

//   for (let i = 5-1; i >= 1; i--){
//     let row = ''
//     for (let j = 1; j <= i; j++){
//       row += j + ' '
//     }
//     console.log(row)
//   }
// }
// numberTriangle();

// function NumberTriangle(n) {
//   for (let i = 1; i <= n; i++) {
//     let row = " ";
//     for (let j = 1; j <= i; j++) {
//       row += j + " ";
//     }
//     console.log(row);
//   }
//   for (let i = n - 1; i >= 1; i--) {
//     let row = " ";
//     for (let j = 1; j <= i; j++) {
//       row += j + " ";
//     }
//     console.log(row);
//   }
// }
// NumberTriangle(5);

// function NumberTriangle(n) {
//   for (let i = 1; i <= n; i++) {
//     let row = " ";
//     for (let j = 1; j <= n - i; j++) {
//       row += "  ";
//     }
//     for (let k = 1; k <= 2 * i - 1; k++) {
//       row += i + " ";
//     }
//     console.log(row);
//   }

//   for (let i = n - 1; i >= 1; i--) {
//     let row = " ";
//     for (let j = 1; j <= 5 - i; j++) {
//       row += "  ";
//     }
//     for (let k = 1; k <= 2 * i - 1; k++) {
//       row += k + " ";
//     }
//     console.log(row);
//   }
// }
// NumberTriangle(5);

// function diamondNumberPattern(n) {
//   for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 1; j <= n - i; j++) {
//       row += " ";
//     }
//     for (let j = 1; j <= i; j++) {
//       row += j + " ";
//     }
//     console.log(row);
//   }

//   for (let i = n - 1; i >= 1; i--) {
//     let row = "";
//     for (let j = 1; j <= n - i; j++) {
//       row += " ";
//     }
//     for (let j = 1; j <= i; j++) {
//       row += j + " ";
//     }
//     console.log(row);
//   }
// }
// diamondNumberPattern(5);

// const numberPyramid = (rows) => {
//   for (let i = 1; i <= rows; i++) {
//     let row = " ";
//     for (let j = 1; j <= rows - i; j++) {
//       row += "  ";
//     }
//     for (let j = 1; j <= i; j++) {
//       row += j + " ";
//     }
//     for (let j = i - 1; j >= 1; j--) {
//       row += j + " ";
//     }
//     console.log(row);
//   }

//   for (let i = rows - 1; i >= 1; i--) {
//     let row = " ";
//     for (let j = 1; j <= rows - i; j++) {
//       row += "  ";
//     }
//     for (let j = 1; j <= i; j++) {
//       row += j + " ";
//     }
//     for (let j = i - 1; j >= 1; j--) {
//       row += j + " ";
//     }
//     console.log(row);
//   }
// };
// numberPyramid(5);



// const hollowPyramid = (rows) => {
//   for (let i = 1; i <= rows; i++) {
//     let row = " ";
//     for (let j = 1; j <= rows - i; j++) {
//       row += " ";
//     }
//     for (let k = 1; k <= 2 * i - 1; k++) {
//       if (k === 1 || k === 2 * i - 1 || i === rows) {
//         row += "*";
//       } else {
//         row += " ";
//       }
//     }
//     console.log(row);
//   }

//   for (let i = rows - 1; i >= 1; i--) {
//     let row = " ";
//     for (let j = 1; j <= rows - i; j++) {
//       row += " ";
//     }
//     for (let k = 1; k <= 2 * i - 1; k++) {
//       if (k === 1 || k === 2 * i - 1 || i === rows) {
//         row += "*";
//       } else {
//         row += " ";
//       }
//     }
//     console.log(row);
//   }
// };

// hollowPyramid(5);

// const butterflyPattern = (rows) => {
//   for (let i = 1; i <= rows; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//       row += "*";
//     }
//     for (let j = 1; j <= 2 * (rows - i); j++) {
//       row += " ";
//     }
//     for (let j = 1; j <= i; j++) {
//       row += "*";
//     }
//     console.log(row);
//   }

//   for (let i = rows - 1; i >= 1; i--) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//       row += "*";
//     }
//     for (let j = 1; j <= 2 * (rows - i); j++) {
//       row += " ";
//     }
//     for (let j = 1; j <= i; j++) {
//       row += "*";
//     }
//     console.log(row);
//   }
// };
// butterflyPattern(5);

function crossPattern(n) {
  if (n % 2 === 0) {
    return;
  }

  for (let i = 0; i <= n; i++) {
    let row = ''

    for (let j = 0; j < n; j++) {
      if (i === j || i + j === n - 1) {
        row += "*"
      } else {
        row += ' '
      }
    }
    console.log(row);
  }
}
crossPattern(7)

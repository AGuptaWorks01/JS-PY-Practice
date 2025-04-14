// function start(n) {
//     for (let i = 0; i <= n; i++) {
//         let data = " "
//         for (let j = 0; j <= i; j++) {
//             data += " *"
//         }
//         console.log(data);
//     }
// }
// start(5)


function square() {
    for (let i = 1; i <= 5; i++) {
        let row = ''
        for (let j = 1; j <= 5; j++) {
            row += "*"
        }
        console.log(row);
    }
}
square()


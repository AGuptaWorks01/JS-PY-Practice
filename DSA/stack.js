// let data = []
// let currentSize = data.length
// // let max = 5
// function push(newVal) {
//     // if (currentSize >= max) {
//     //     console.error("stack is full", newVal);
//     // }
//     data[currentSize] = newVal
//     currentSize++
// }
// function pop() {
//     if (currentSize > 0) {
//         currentSize -= 1
//         data.length = currentSize
//     }
//     else {
//         console.warn("stack is already empty")
//     }
// }
// push(20)
// push(10)
// push(30)
// push(40)
// pop()
// pop()
// push(1)
// push(3)
// console.warn(data)



// let data = []
// let currentSize = data.length;
// function push(newVal) {
//     data[currentSize] = newVal
//     currentSize += 1
// }
// function pop() {
//     lastRemovedItem = data[currentSize - 1]
//     currentSize -= 1
//     data.length = currentSize
//     return lastRemovedItem
// }
// function reverseStr(item) {
//     for (let i = 0; i < item.length; i++) {
//         push(item[i])
//     }
//     for (let i = 0; i < item.length; i++) {
//         item[i] = pop()
//     }
// }
// let str = "anurag"
// str = str.split('')
// reverseStr(str)
// console.warn(str.join(''));



// class Stack {
//     item = []
//     currentSize
//     maxSize
//     constructor(size) {
//         this.maxSize = size
//         this.currentSize = this.item.length
//     }
//     push(newVal) {
//         if (this.currentSize >= this.maxSize) {
//             console.log("Stack is Full");
//         } else {
//             this.item[this.currentSize] = newVal
//             this.currentSize++
//         }
//     }
//     pop() {
//         if (this.currentSize > 0) {
//             this.currentSize--
//             this.item.length = this.currentSize
//         } else {
//             console.log("stack is already empty!");
//         }
//     }
//     display() {
//         console.log(this.item);
//     }
// }
// st1 = new Stack()
// st1.push(20)
// st1.display()




// class Stack {
//     item = []
//     currentSize
//     maxSize

//     constructor(size) {
//         this.maxSize = size
//         this.currentSize = this.item.length
//     }

//     push(newVal) {
//         if (this.currentSize >= this.maxSize) {
//             console.log('Stack is Full');
//         } else {
//             this.item[this.currentSize] = newVal
//             this.currentSize++
//         }
//     }
//     pop() {
//         if (this.currentSize > 0) {
//             this.currentSize--
//             this.item.length = this.currentSize
//         } else {
//             console.log("Stack is already emplty!");
//         }
//     }
//     display() {
//         console.log(this.item);
//     }
// }

// function reverseString(str) {
//     let stack = new Stack(str.length)

//     for (let char of str) {
//         stack.push(char)
//     }

//     let reversedStr = ''
//     while (stack.currentSize > 0) {
//         reversedStr += stack.item[stack.currentSize - 1]
//         stack.pop()
//     }
//     return reversedStr
// }
// let str = "Anurag"
// console.log("Unreversed String:", str);
// let reversedStr = reverseString(str)
// console.log("Reversed  String:", reversedStr);
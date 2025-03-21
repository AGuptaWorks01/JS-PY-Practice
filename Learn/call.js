// function thedata(da1, getNextdata) {
//     setTimeout(() => {
//         console.log("data", da1);
//         if (getNextdata) {
//             getNextdata();
//         }
//     }, 2000);
// }

// thedata(1, () => {
//     thedata(2, () => {
//         thedata(3);
//     })
// });


// function getdata(data1, getNextData) {
//     setTimeout(() => {
//         console.log("data", data1);
//         if (getNextData) {
//             getNextData();
//         }
//     }, 2000);
// }

// getdata((1), () => {
//     getdata(2, () => {
//         getdata(3);
//     })
// });



// i = 100;
// if (i <= 10) {
//     console.log("data");
// } else if (i <= 20) {
//     console.log("object not found");
// } else {
//     console.log("object found");
// }



// function fun(funs) {
//     for (let i = 0; i < funs.length; i++) {
//         funs[i]();
//     }
// }
// console.log(funs.length);


// let midex = [1, 2, "there"];
// midex.push(1);
// console.log(midex.length);


// let num = [1, 2, 3, 4];
// let removednum = num.pop();

// console.log(num);
// console.log(removednum);

// let num = [1, 2, 3, 4];
// let removednum = num.shift();
// console.log(num);
// console.log(removednum);

// let num = [1, 2, 3, 4];
// let unshifts = num.unshift(0)
// console.log(num);
// console.log(unshifts);


// let num = [5, 6, 7, 3, 2, 1]
// console.log(num.sort());

// let num = [1, 2, 3];
// console.log(num.reverse());


// let arrstr = ['A', 'B', 'C'];
// console.log(arrstr);
// console.log(...arrstr);

// function sum(x, y, z, a) {
//     return x + y + z + a;
// }

// let numbers = [1, 2, 3, 4];
// console.log(sum(...numbers));


// let arr1 = ['A', 'B', 'C'];
// console.log(arr1);

// let arr2 = ['a', 'D', 'E'];

// console.log(...arr2);


// let arr = [3, 5, 8, 9, 13];
// let [a, , , ...rest] = arr;
// console.log(a, rest);

// let arr = [1, 2, 3, 4];
// let { a, b } = { a: 1, b: 2 }
// let arr1 = [3, 4, 7];
// let obj1 = { c: [...arr1] }

// console.log(obj1);
// console.log(Array);

// const num1 = ['a', 'b', 'c'];
// const newarr = [...num1, 'D'];
// console.log(newarr);
// console.log(...num1);

// const obj1 = { name: "a", age: 10 };
// const obj2 = { name: "b", age: 20 }
// const both = {...obj1, ...obj2 }
// console.log(both);

// const obj1 = { name: "a", age: 10 };
// const obj2 = { city: "New York", country: "USA" };
// const both = { ...obj1, ...obj2 };
// console.log(both);



// const items = ['Books', 'Pen', "Book"];
// const [x, y, z] = items;
// console.log(x);
// console.log(y);
// console.log(z);



// const number = [1, 2, 3, 4, 5, 6, 7, 8];
// const [ , one, , three] = number;

// console.log(one);
// console.log(three);


// const nested = [1, [2, 3],
//     [4, 5]
// ];
// const [one, [two, three],
//     [five, six]
// ] = nested;
// console.log(one);
// console.log(two);
// console.log(five);

// const person = {
//     name: 'coder',
//     age: 10
// };
// console.log(typeof person.name);
// console.log(typeof person.age);

// const person = new Object();
// person.name = 'coder';
// person.age = '10';
// person.profession = "typer";

// console.log(person);

// person.profession = "development";
// console.log(person);

// delete person.profession;
// console.log(person);


// const student = {
//     name: "SOO",
//     marks: {
//         math: 99,
//         science: 90
//     }
// };
// console.log(student.marks);

// const car = {
//     brand: 'Tesla',
//     model: "Model xl",
//     start: function() {
//         console.log(`${this.brand} ${this.model} is started!`);
//     }
// };
// car.start();

let person = {
    fname: "aaa",
    lname: "zzz",
    age: 18
};
Object.keys(person).forEach(key => {
    console.log(`${key} ${person[key]}`);
});


// const [first, second] = ["apple", 'banana', 'orange'];
// console.log(first);
// console.log(second);

// const { name, age } = {
//     name: "John Doe",
//     age: 30
// };

// console.log(name);
// console.log(age);

// function add(a, b) {
//     return a + b;
// }
// console.log(add(2, 3));

// const add = (a, b) => a + b;
// console.log(add(2, 4));


// const a = x => x * x;
// console.log(a(2));


// const sayHello = () => console.log("hello!");
// sayHello();

// function person() {
//     this.age = 25;
//     setTimeout(() => {
//         console.log(this.age);
//     }, 1000);
// }
// new person();
// class Singleton{
//     constructor() {
//         if (Singleton.instance) {
//             return Singleton.instance;
//         }

//         this.data = "I am the only instance";
//         Singleton.instance = this;
//     }
//     show() {
//         console.log(this.data);
//     }
// }

// const a = new Singleton()
// const b = new Singleton()
// console.log(a === b);


// class MyClass{
//     constructor() {
//         this.value = Math.random()
//     }
// }
// const a = new MyClass()
// const b = new MyClass()
// console.log(a.value);
// console.log(b.value);

// class Config {
//     constructor() {
//         if (Config.instance) {
//             return Config.instance;
//         }
//         console.log(Config.instance);

//         this.setting = "dark mode on"
//         console.log(this.setting);

//         Config.instance = this;
//         console.log(Config.instance);
//     }
//     getSetting() {
//         return this.setting;
//     }
// }
// const a = new Config()
// const b = new Config()
// console.log(a === b);



class Counter {
    constructor() {
        if (Counter.instance) return Counter.instance;

        this.count = 0;
        Counter.instance = this;
    }

    increment() {
        this.count++;
        console.log("Count is:", this.count);
    }
}

const c = new Counter();
const c1 = new Counter();
const c2 = new Counter();

c.increment();
c1.increment(); // Count is: 1
c2.increment(); // Count is: 2 (Same object!)
console.log( c1 === c2); // true ✅



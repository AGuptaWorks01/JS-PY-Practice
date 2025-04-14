// class Subject {
//     constructor() {
//         this.observers = []; // sab subscribers yahan store honge
//     }

//     subscribe(observer) {
//         this.observers.push(observer);
//     }

//     unsubscribe(observer) {
//         this.observers = this.observers.filter((obs) => obs !== observer);
//     }

//     notify(data) {
//         this.observers.forEach((observer) => observer.update(data));
//     }
// }
// class Observer1 {
//     update(data) {
//         console.log("Observer 1 received:", data);
//     }
// }

// class Observer2 {
//     update(data) {
//         console.log("Observer 2 got:", data);
//     }
// }
// const subject = new Subject();

// const obs1 = new Observer1();
// const obs2 = new Observer2();

// subject.subscribe(obs1);
// subject.subscribe(obs2);

// subject.notify("Data Changed!");


class a {
    constructor() {
        this.observers = []
    }
    subscribe(observer) {
        this.observers.push(observer)
    }
    unsubscribe(observer) {
        this.observers = this.observers.filter((obs) => obs !== observer)
    }
    notify(data) {
        this.observers.forEach((observer) => observer.update(data))
    }
}
class PhoneDisplay {
    update(data) {
        console.log("PhoneDisplay Heat:", data);
    }
}
class LaptopDisplay {
    update(data) {
        console.log("LaptopDisplay heat:", data);
    }
}
const station = new a()
const phone = new PhoneDisplay()
const laptop = new LaptopDisplay()

station.subscribe(phone)
station.subscribe(laptop)
station.notify(23)
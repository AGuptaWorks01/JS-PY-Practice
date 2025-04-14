class Car { drive() { console.log("Driving a car..."); } }
class Bike { drive() { console.log("Riding a bike..."); } }
class Truck { drive() { console.log("Driving a truck..."); } }

// function vehicleFactory(type) {
//     if (type === 'car') {
//         return new Car()
//     } else if (type === 'bike') {
//         return new Bike()
//     } else if (type === 'truck') {
//         return new Truck()
//     } else {
//         throw new Error("Invalid vehicle type!...")
//     }
// }

const vehicleFactory = (type) => ({
    car: new Car(),
    bike: new Bike(),
    truck: new Truck(),
}[type] || (() => { throw new Error("Invalid type") })());

const myvehicle1 = vehicleFactory("car")
const myvehicle2 = vehicleFactory("bike")
const myvehicle3 = vehicleFactory("truck")

myvehicle1.drive()
myvehicle2.drive()
myvehicle3.drive()
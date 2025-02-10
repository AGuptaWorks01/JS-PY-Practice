// alert("SetTimeOut");
// setTimeout(() => {
//     console.log("the");
// }, 2000);
// console.log("Hello");



// document.write("Hello");
// const sum = (a, b, c) => {
//     console.log("Yes! I am running!");
//     a + b + c
// }
// setTimeout(sum, 1000, 1, 8)




// function displayTime() {
//     const currentTime = new Date().toLocaleTimeString();
//     console.log("Current Time: " + currentTime);
// }

// const intervalId = setInterval(displayTime, 1000);

// setTimeout(() => {
//     clearInterval(intervalId);
//     console.log("Interval cleared!");
// }, 2000);




btn.addEventListener("click", function(e) {
    alert("Button Clicked!");
})

btn.addEventListener("click", function(e) {
    alert("Button 2 Clicked!");
})


let a = prompt("what is your name?")

if (a == "2") {
    btn.addEventListener("click", function(e) {
        alert("Button 3 Clicked!");
    })
}
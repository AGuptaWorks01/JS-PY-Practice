let a = 5;
let b = 10;

a = a + b;
b = a - b;
a = a - b;

a = a ^ b;
b = a ^ b;
a = a ^ b;

[a, b] = [b, a]
console.log(a, b);

function swap(a, b) {
	a = a + b;
	b = a - b;
	a = a - b;
	return [a, b];
}

let num1 = 5;
let num2 = 10;

[num1, num2] = swap(num1, num2);
console.log(num1, num2);


function swap(a, b) {
	return [b, a]
}

let num = 5;
let nums = 10;

[num, nums] = swap(num, num2);
console.log("num", num, "nums", nums);
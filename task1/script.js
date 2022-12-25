let nextNum = document.getElementById("enterNumber"); // input
let btnResult = document.getElementById("btnresult"); // button result
let btnAdd = document.getElementById("next"); //button next
let listArray = document.querySelector(".new-array");
let sumArray = document.querySelector(".sum-array");
let myNumbers = [];

btnAdd.addEventListener("click", function () {
	let a = nextNum.value;
	myNumbers.push(a);
	nextNum.value = "";
});

function compareNumbers(a, b) {
	return a - b;
}

function myArr() {
	let n = [];
	n = myNumbers.sort(compareNumbers);
	return n;
}

btnResult.addEventListener("click", myArr);

btnResult.addEventListener("click", function () {
	listArray.innerHTML = myNumbers.join("<br/>");
});
btnResult.addEventListener("click", function () {
	let counter = 0;
	for (let number of myNumbers) {
		counter = counter + +number;
		sumArray.innerHTML = counter;
	}
});

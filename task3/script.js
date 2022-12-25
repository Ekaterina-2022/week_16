let firstBtn = document.querySelector(".btn-first-elem");
let secBtn = document.querySelector(".btn-clear-array");
let thirdtBtn = document.querySelector(".btn-elem-length");

let firstArray = ["js", "css", "html"];

firstBtn.addEventListener("click", function () {
	document.querySelector(".first-elem").innerHTML = firstArray[0];
});

let secArray = [0, 1, false, 2, undefined, "", 3, null];

secBtn.addEventListener("click", function () {
	const filteredArray = secArray.filter((el) => el);

	document.querySelector(".clear-array").innerHTML = filteredArray;
});

const thirdArray = [
	[1, 2],
	[1, 2, 3],
	[1, 2, 3, 4],
];

thirdtBtn.addEventListener("click", function () {
	const foundIndex = thirdArray.findIndex((el) => el.length > 3);
	document.querySelector(".elem-length").innerHTML = foundIndex;
});

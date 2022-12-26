let form = document.forms[0];
let btnResult = document.querySelector(".btn-result");
let carBrand = document.querySelector("#brands");
let carAge = form.elements.year;
let carEngine = form.elements.engine;
let carOptions = document.querySelectorAll(".car-adds");
let sumPrice;
let finalPrice = document.querySelector(".price");
let add = document.querySelector("#add");
let brandPrice2;
let brandPrice1;
let brandPrice3;
let checkedArray = [];
let counter;
function carYears() {
	for (let i = 0; i < carAge.length; i++) {
		if (carAge[i].checked) {
			brandPrice1 = carAge[i].value;
			break;
		}
	}
}
function carEngines() {
	brandPrice2 = 0;
	for (let i = 0; i < carEngine.length; i++) {
		if (carEngine[i].checked) {
			brandPrice2 = carEngine[i].value;
			break;
		}
	}
}
function addOptions() {
	for (let i = 0; i < carOptions.length; i++) {
		if (carOptions[i].checked) {
			checkedArray.push(carOptions[i].value);
		}
	}
}
/*function addOptionsDel() {
	for (let i = 0; i < carOptions.length; i++) {
		if (carOptions[i].unchecked) {
			checkedArray.pop(carOptions[i].value);
		}
	}
}*/
add.addEventListener("click", addOptions);
//add.addEventListener("click", addOptionsDel);
btnResult.addEventListener("click", function () {
	counter = 0;
	for (let number of checkedArray) {
		counter = counter + +number;
	}
});

btnResult.addEventListener("click", function () {
	sumPrice = +carBrand.value + +carAge.value + +carEngine.value + counter;
	finalPrice.innerHTML = sumPrice;
});
console.log(checkedArray);

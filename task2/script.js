let form = document.forms[0];
let btnResult = document.querySelector(".btn-result");
let carBrand = document.querySelector("#brands");
let carAge = form.elements.year;
let carEngine = form.elements.engine;
let carOptions = document.querySelector(".car-adds");
let sumPrice;
let finalPrice = document.querySelector(".price");
let brandPrice;
let brandPrice2;
let brandPrice1;

function brand() {
	brandPrice = carBrand.value;
	return brandPrice;
}

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
/*function addOptions() {
	let brandPrice3 = 0;
	for (let i = 0; i < carOptions.length; i++) {
		
	}

		if (carOptions[i].checked) {
			brandPrice3 += carOptions[i].value;
			break;
			//console.log(brandPrice);
		}
	}
btnResult.addEventListener("click", function () {
	sumPrice = brandPrice;
	finalPrice.innerHTML = sumPrice;
});
*/

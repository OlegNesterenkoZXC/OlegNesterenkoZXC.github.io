"use strict";

function calculator() {
	let f1 = document.getElementsByName("price");
	let f2 = document.getElementsByName("count");
	let a = f1[0].value;
	let b = f2[0].value;
	a = parseInt(a, 10);
	b = parseInt(b, 10);
	if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
		alert("Неверные данные!");
		return false;
	}
	let r = document.getElementById("result");
	r.value = (a * b);
	return false;
}
window.addEventListener('DOMContentLoaded', function (event) {
	console.log("DOM fully loaded and parsed");
	let button = document.getElementById("final-price");
	button.addEventListener("click", calculator);
});
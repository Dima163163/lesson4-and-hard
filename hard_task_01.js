'use strict';

function algoritmEvklida(a, b) {
	while(a != 0 && b != 0){
		if(a > b) {
			a = a % b;
		} else {
			b = b % a;
		}
	}

	return a + b;
}

console.log(algoritmEvklida(30, 18));

function algoritmEvklida2(a, b) {
	while(a != b){
		if(a > b) {
			a = a - b;
		} else {
			b = b - a;
		}
	}

	return a;
}

console.log(algoritmEvklida2(42, 8));
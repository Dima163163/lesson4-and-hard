'use strict';

const a = +prompt('Введите первое число:');
const b = +prompt('Введите второе число:');

function lesserNumber (a, b) {
	return (a < b)*a + (a > b)*b;
}

console.log(lesserNumber(a, b));
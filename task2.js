'use strict';

function modificstionString (str) {
	return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

console.log(modificstionString('привет Мир'));
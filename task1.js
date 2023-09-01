'use strict';

function converter (piceToEUR) {
	//Переводим EUR в USD
	const priceToUSD = piceToEUR * 1.2;
	//Возвращаем сумму в RUB
	return priceToUSD * 73;
}

console.log(converter(35));
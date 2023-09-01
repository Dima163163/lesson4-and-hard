'use strict';

function calculate(sum, quantity, promocode) {
	if(quantity > 10) {
		sum = sum - (sum * 0.03);
	}

	if(sum > 30000) {
		sum = sum - (sum - 30000) * 0.15;
	}

	if(promocode === 'METHED') {
		sum = sum - (sum * 0.1);
	}

	if(sum > 2000) {
		if(promocode === 'G3H2Z1') {
			sum = sum - 500;
		}
	}

	return sum;
}

console.log(calculate(5000, 11, 'G3H2Z1'));
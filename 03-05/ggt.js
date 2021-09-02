function ggT(a,b) {

	if (typeof a != 'number' || typeof b != 'number') {
		throw new Error('ggT: Nur Zahlen sind erlaubt!');
	}
	

	if (a == 0) return b;
	while ( b != 0 ) {
		let temp = a % b;
		a = b;
		b = temp;
	}
	return a;
}


try {
	ggT('35', 10);
}
catch (error) {
	console.error(error.message);
}


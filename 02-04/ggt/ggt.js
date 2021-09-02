
function ggT(a,b) {

	if (a == 0) return b;
	
	while ( b != 0 ) {
		let temp = a % b;
		a = b;
		b = temp;
	}
	
	return a;
}

module.exports = ggT;



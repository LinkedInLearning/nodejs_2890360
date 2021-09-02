
function ggT(a,b) {

	if (a == 0) return b;
	
	while ( b != 0 ) {
		let temp = a % b;
		a = b;
		b = temp;
	}
	
	return a;
}

function kgV(a,b) {
	if ( a==0 || b==0 ) return 0;
	
	return (a * b) / ggT(a, b);
}

exports.ggT = ggT;
exports.kgV = kgV;



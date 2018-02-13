const romanNumerals = {
	getNumeralsByNumber(num) {
		let lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
      roman = '',
      i;
	  for ( let i in lookup ) {
	    while ( num >= lookup[i] ) {
	      roman += i;
	      num -= lookup[i];
	    }
	  }
  	return roman;
	},

	getNumeralsFor(upperLimit) {
		let res = [];
		for ( let i=1; i <=upperLimit; i++ ) { 
			res.push(this.getNumeralsByNumber(i)); 
		}
		
		return res;
	}
}

module.exports = romanNumerals;
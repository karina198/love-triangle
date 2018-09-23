module.exports = function getLoveTrianglesCount(preferences = []) {
	let count = 0;
	for(let i = 0; i < preferences.length; i++){

		let b = i + 1;
		let c = preferences[b - 1];
		let z = preferences[c - 1];
		let x = preferences[z - 1];

		if(b == x && b !== c){
			count++;
		}
	}
	return count/3;
  }
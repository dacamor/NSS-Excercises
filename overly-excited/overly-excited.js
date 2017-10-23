
let addExcitement = (sentence, char) => { 
	let result = ""
	for (let i = 0; i < sentence.length; i++) {
		const word = sentence[i]
		let newWord = word

		if (i%3 === 2) {
			newWord += char.repeat(Math.floor(i/3) + 1)

		}

		newWord += " "
		result += newWord
		console.log(result)
	}
}


addExcitement(["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"], "#")
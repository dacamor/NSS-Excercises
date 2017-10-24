const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

const planetEl = document.getElementById("planets")

planets.forEach(function (planet) {
	planetEl.innerHTML += `
	<article>${planet}</article>
	`
})

const planetsWithPassion = planets.map(function (planet) {
	return planet.charAt(0).toUpperCase() + planet.slice(1)
})

console.log(planetsWithPassion)

const planetsWithThatSpecialSomething = planets.filter(planet => {
	const gotE = planet.includes("e")
	return gotE
})

console.log(planetsWithThatSpecialSomething)


// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

let sentence = words.reduce(function (theBigWord, theNextWord) {
	return theBigWord + " " + theNextWord
})

const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8]

console.log(integers.filter(int => {
	const isUnder20 = (int < 20)
	return isUnder20
}).sort(function(a, b){return b-a}).map(function(num) {
	return (num*1.5) - 1	
}))
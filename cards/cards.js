
document.getElementById("cardsGoHere").addEventListener("click", function (e) {
	if (e.target.className === "deleteButton") {
		e.target.parentNode.remove()
	}
})


const createCard = function () {
	let cardSlot = document.getElementById("cardsGoHere")
	let cardText = document.getElementById("cardText")

	cardSlot.innerHTML += `
	<div class="card">
	<article>${cardText.value}</article>
	<button class="deleteButton">Delete</button>
	</div>
	`
	cardText.value = ""
}

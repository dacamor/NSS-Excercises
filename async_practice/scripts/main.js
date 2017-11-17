
const outputEl = $(".products")
const selectEl = $("#select")
let dataThings = {}
$.ajax({
	"url": "categories.json",
	"method": "GET"
}).then(function (data) {
	dataThings = data
	getProducts(data)
})


const updateDom = function () {

	$.ajax({
		"url": "products.json",
		"method": "GET"
	}).then(function (stuff) {

		let productHTML = ""
		let price = 0
		let selectedCategory = dataThings.categories.find(category => category.season_discount === $("#select option:selected").text())

		stuff.products.forEach(function(prod) {
			let categoryName = dataThings.categories.find(category => category.id === prod.category_id).name
			if (categoryName === selectedCategory.name) {
				price = (prod.price * selectedCategory.discount).toFixed(2)
			} else {
				price = prod.price
			}
			productHTML += `
		<h2>${prod.name}</h2>
		<section>Category: ${categoryName}</section>
		<section>Price: $${price}</section>
		`
		})
		outputEl.html(productHTML)
	})
}

const getProducts = function (data) {

	let productHTML = ""
	let selectHTML = `
		<select id="select" onchange="updateDom()">
		`
	data.categories.forEach(function (category) {
		selectHTML += `
			<option value="${category.season_discount}">${category.season_discount}</option>
			`
	})
	selectHTML += "</select>"

	selectEl.html(selectHTML)

	updateDom()

}

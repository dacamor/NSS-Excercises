const getReviews = require("./reviewController")

const getProducts = function () {
	const outputEl = $(".products")

	$.ajax({
		"url": "products.json",
		"method": "GET"
	}).then(function (data) {

		let productHTML = ""

		$.ajax({
			"url": "randomShit.json",
			"method": "GET"
		}).then(function (stuff) {
			data.products.forEach(function (prod) {
				debugger

				let reviews = getReviews(stuff)
				productHTML += `
			<img src="${prod.img}">
			<h2>${prod.title}</h2>
			<section>${prod.desc}</section>
			<section>${prod.price}</section>
			<section>${prod.quantity}</section>
			<section id="${prod.title}_reviews">${reviews}</section>
			`
			})
			outputEl.html(productHTML)
		})

	})
}

module.exports = getProducts
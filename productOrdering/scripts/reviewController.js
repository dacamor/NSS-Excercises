

const getReviews = function (data) {

	let reviewHTML = ""

	data.shit.forEach(function (rev) {
		reviewHTML += `
			<div>${rev.review}</div>
			`
	})
	return reviewHTML

}

module.exports = getReviews
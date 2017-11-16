

const generateNavbar = () => {
	// get control of navbar dom element
	const navbarEl = document.getElementById("navbar")

	// build a dom string to populate the navbar
	let navbarItemsString = `
        <div id="nav_name">Betsy</div>
        `

	navbarItemsString += `
		<div id="nav_links">
            <div id="nav_Categories">Categories</div>
            <div id="nav_Orders">Orders</div>
			<div id="nav_Logout">Logout</div>
		</div>
        `


	// post dom string to innerHTML of navbar
	navbarEl.innerHTML = navbarItemsString
}


module.exports = generateNavbar

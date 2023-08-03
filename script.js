const partHeader = document.querySelector('.partHeader');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener("click", () => {
	const visibility = partHeader.getAttribute("data-visible")

	if (visibility === "false") {
		partHeader.setAttribute("data-visible", true);

	} else if (visibility === "true") {
		partHeader.setAttribute("data-visible", false);
	}

});
window.onscroll = function showHeader() {
	// body...
	var header = document.querySelector('.header');
	if (window.pageYOffset > 38) {
		header.classList.add('header_fixed');
	} else {
		header.classList.remove('header_fixed');
	}
}
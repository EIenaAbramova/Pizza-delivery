;
(function () {
	if (window.matchMedia('(max-width: 992px)').matches) {
		return;
	}
	var headerMenu = document.querySelector('.header_menu');
	// console.log(headerMenu)

	window.addEventListener('scroll', function () {
		// console.log(1)
		
		if (window.pageYOffset > 0) {
			headerMenu.classList.add('.is_active');
		} else {
			headerMenu.classList.remove('.is_active');
		}

	})
}());
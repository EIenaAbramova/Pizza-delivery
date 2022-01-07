;
(function () {
	var body = document.querySelector('body');

	var closestItemByClass = function (item, className) {
		var node = item;

		while (node) {
			if (node.classList.contains(className)) {
				return node;
			}
			node = node.parentElement;
			console.log(node)

		}
		return null
	};

	var closestAttr = function (item, attr) {
		var node = item;

		while (node) {
			var attrValue = node.getAttribute(attr);
			if (attrValue) {
				return attrValue;
			}
			node = node.parentElement;

		}
		return null
	};

	var showPopup = function (target) {
		target.classList.add('is_active');
	};
	console.log(showPopup)

	var closePopup = function (target) {
		target.classList.remove('is_active');
	};

	var toggleScroll = function () {
		body.classList.toggle('no-scroll');
	};

	body.addEventListener('click', function (e) {
		var target = e.target;
		// console.log(target) //выводит те элементы по которым щёлкаешь

		var popupClass = closestAttr(target, 'data_popup');
		console.log(popupClass) //щёлканье по кнопки

		if (popupClass === null) {
			return;
		}
		e.preventDefault();
		var popup = document.querySelector('.' + popupClass);

		if (popup) {
			showPopup(popup);
			toggleScroll();
		}
	});

	body.addEventListener('click', function (e) {
		var target = e.target;

		if (target.classList.contains('popup_btn_close') ||
			target.classList.contains('popup_inner')) {
			var popup = closestItemByClass(target, 'popup');

			closePopup(popup);
			toggleScroll();
		}
	});

	// чтобы popup закрывался
	body.addEventListener('keydown', function (e) {
		if (e.keyCode !== 27) {
			return;
		}

		var popup = document.querySelector('.popup.is_active');

		if (popup) {
			closePopup(popup);
			toggleScroll();
		}
	});
}());
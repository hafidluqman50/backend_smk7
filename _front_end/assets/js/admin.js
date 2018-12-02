$(function () {
	var apiBaseUrl = 'http://localhost:8000/';
	$('.data-table').DataTable();
	function writeSessionData(name,value) {
		sessionStorage.setItem(name, value);
		return true;
	};
	function readSessionData(name) {
		var data = sessionStorage.getItem(name);
		if (data == null) {
			data = '';
		}
		return data;
	};
	function deleteSessionData(name) {
		sessionStorage.removeItem(name);
		return true;
	};
	$(document).on('click', 'aside.menu ul.menu-list > li > a.is-dropdown', function(event) {
		event.preventDefault();
		$(this).parent(this).children('ul').slideToggle(200);
	});
	$(document).on('click', 'nav .nav-toggle', function(event) {
		event.preventDefault();
		if ($(window).width() >= 768) {
			$('aside.sidebar').toggle(200);
		} else {
			$('aside.sidebar').slideToggle(200);
		}

		$('main').toggleClass('is-full-tablet');
		$('main').toggleClass('is-two-thirds-tablet');
		$('main').toggleClass('is-full-desktop');
		$('main').toggleClass('is-three-quarters-desktop');
	});
});
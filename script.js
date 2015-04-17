$(document).ready(function() {
	for (var i = 1; i <= 100; i++) {
		if (i % 3 == 0 && i % 5 == 0) {
			$('body').append('<p>fizz buzz');
		}
		else if (i % 3 == 0) {
			$('body').append('<p>fizz');
		}
		else if (i % 5 == 0) {
			$('body').append('<p>buzz');
		}
		else {
			$('body').append('<p>' + i);
		}
	}
});
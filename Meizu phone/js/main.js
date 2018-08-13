
/* display or hide search dialog */

$('.icon_search').on('click', function(event) {
		$('.bg_search').css({'display': 'block'});
	});
    
$('.icon_close').on('click', function(event) {
		$('.bg_search').css({'display': 'none'});
	});

/* interactive change color */
if( screen.width < 1024 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) { 

		/* M6 phone */

	$('.M6.black').on('click', function(event) {
		event.preventDefault();
		$('img.M6').attr('src', 'assets/images/m6-black.png');
		$('figcaption.M6').text('Чёрный');
		return false;
	});

	$('.M6.blue').on('click', function(event) {
		event.preventDefault();
		$('img.M6').attr('src', 'assets/images/m6-blue.png');
		$('figcaption.M6').text('Синий');
		return false;
	});

	$('.M6.gold').on('click', function(event) {
		event.preventDefault();
		$('img.M6').attr('src', 'assets/images/m6-gold.png');
		$('figcaption.M6').text('Золото');
	});

	$('.M6.gray').on('click', function(event) {
		event.preventDefault();
		$('img.M6').attr('src', 'assets/images/m6-silver.png');
		$('figcaption.M6').text('Серебро');
	});

		/* M6s phone */

	$('.M6s.black').on('click', function(event) {
		event.preventDefault();
		$('img.M6s').attr('src', 'assets/images/m6s-black.png');
		$('figcaption.M6s').text('Чёрный');
		return false;
	});

	$('.M6s.blue').on('click', function(event) {
		event.preventDefault();
		$('img.M6s').attr('src', 'assets/images/m6s-blue.png');
		$('figcaption.M6s').text('Синий');
		return false;
	});

	$('.M6s.gold').on('click', function(event) {
		event.preventDefault();
		$('img.M6s').attr('src', 'assets/images/m6s-gold.png');
		$('figcaption.M6s').text('Золото');
	});

	$('.M6s.gray').on('click', function(event) {
		event.preventDefault();
		$('img.M6s').attr('src', 'assets/images/m6s-silver.png');
		$('figcaption.M6s').text('Серебро');
	});

		/* M6note phone */

	$('.M6note.black').on('click', function(event) {
		event.preventDefault();
		$('img.M6note').attr('src', 'assets/images/m6-note-black.png');
		$('figcaption.M6note').text('Чёрный');
		return false;
	});

	$('.M6note.blue').on('click', function(event) {
		event.preventDefault();
		$('img.M6note').attr('src', 'assets/images/m6-note-blue.png');
		$('figcaption.M6note').text('Синий');
		return false;
	});

	$('.M6note.gold').on('click', function(event) {
		event.preventDefault();
		$('img.M6note').attr('src', 'assets/images/m6-note-gold.png');
		$('figcaption.M6note').text('Золото');
	});

	$('.M6note.gray').on('click', function(event) {
		event.preventDefault();
		$('img.M6note').attr('src', 'assets/images/m6-note-gray.png');
		$('figcaption.M6note').text('Серебро');
	});

}

else { 

		/* M6 phone */

	$('.M6.black').on('mouseover', function(event) {
		$('img.M6').attr('src', 'assets/images/m6-black.png');
		$('figcaption.M6').text('Чёрный');
	});

	$('.M6.blue').on('mouseover', function(event) {
		$('img.M6').attr('src', 'assets/images/m6-blue.png');
		$('figcaption.M6').text('Синий');
	});

	$('.M6.gold').on('mouseover', function(event) {
		$('img.M6').attr('src', 'assets/images/m6-gold.png');
		$('figcaption.M6').text('Золото');
	});

	$('.M6.gray').on('mouseover', function(event) {
		$('img.M6').attr('src', 'assets/images/m6-silver.png');
		$('figcaption.M6').text('Серебро');
	});

		/* M6s phone */

	$('.M6s.black').on('mouseover', function(event) {
		$('img.M6s').attr('src', 'assets/images/m6s-black.png');
		$('figcaption.M6s').text('Чёрный');
	});

	$('.M6s.blue').on('mouseover', function(event) {
		$('img.M6s').attr('src', 'assets/images/m6s-blue.png');
		$('figcaption.M6s').text('Синий');
	});

	$('.M6s.gold').on('mouseover', function(event) {
		$('img.M6s').attr('src', 'assets/images/m6s-gold.png');
		$('figcaption.M6s').text('Золото');
	});

	$('.M6s.gray').on('mouseover', function(event) {
		$('img.M6s').attr('src', 'assets/images/m6s-silver.png');
		$('figcaption.M6s').text('Серебро');
	});

		/* M6note phone */

	$('.M6note.black').on('mouseover', function(event) {
		$('img.M6note').attr('src', 'assets/images/m6-note-black.png');
		$('figcaption.M6note').text('Чёрный');
		return false;
	});

	$('.M6note.blue').on('mouseover', function(event) {
		$('img.M6note').attr('src', 'assets/images/m6-note-blue.png');
		$('figcaption.M6note').text('Синий');
		return false;
	});

	$('.M6note.gold').on('mouseover', function(event) {
		$('img.M6note').attr('src', 'assets/images/m6-note-gold.png');
		$('figcaption.M6note').text('Золото');
	});

	$('.M6note.gray').on('mouseover', function(event) {
		$('img.M6note').attr('src', 'assets/images/m6-note-gray.png');
		$('figcaption.M6note').text('Серебро');
	});

}


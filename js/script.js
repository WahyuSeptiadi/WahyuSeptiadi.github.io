// event pada saat link di klik
$('.page-scroll').on('click', function (e) { // tambahan parameter e
	// console.log('ok'); // cara debugging

	// ambil isi href
	var tujuan = $(this).attr('href');
	// tangkap element/section yang bersangkutan
	var elemenTujuan = $(tujuan);

	// cara mengetahui jarak offset element ke atas
	// console.log(elemenTujuan.offset().top); 
	// cara mencari body, dan (scrollTop) jarak antara element ke atas tp berubah2 sesuai scroll
	// console.log($('body').scrollTop());
	// pindahkan ke titik scroll 700
	// $('html, body').scrollTop('700');
	// pindah sesuai element
	// $('body').scrollTop(elemenTujuan.offset().top);

	$('html, body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 1000, 'easeInOutExpo');

	e.preventDefault(); // untuk memanipulasi supaya semua link mati semua

});

// about
$(window).on('load', function () {
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
});


// parallax
$(window).scroll(function () {
	// untuk mengetahui jarak titik scroll ke top
	var wScroll = $(this).scrollTop();

	// jumbotron
	$('.jumbotron img').css({
		'transform': 'translate(0px, ' + wScroll / 5 + '%)'
		// sumbu x diam, sumbu y sesuai wScroll
	});

	$('.jumbotron h1').css({
		'transform': 'translate(0px, ' + wScroll / 2.5 + '%)'
		// sumbu x diam, sumbu y sesuai wScroll
	});

	$('.jumbotron p').css({
		'transform': 'translate(0px, ' + wScroll / 1 + '%)'
		// sumbu x diam, sumbu y sesuai wScroll
	});

	// portfolio
	if (wScroll > $('.portfolio').offset().top - 440) {
		// muncul barengan, tapi gak ada timeout
		// $('.portfolio .thumbnail').addClass('muncul');
		// muncul satu-satu
		$('.portfolio .thumbnail').each(function (i) {
			setTimeout(function () {
				$('.portfolio .thumbnail').eq(i).addClass('muncul');
			}, 400 * (i + 1));
		});
	}
});

$('.get-message').on('click', function (e) {
	var x = document.getElementById("message").value;
	document.getElementById("").innerHTML = x;
});
$(function () {
	var berita = [];
	var profil = [];
	var beritaFilter = undefined;
	const apiBaseUrl = "http://localhost:8000/";
	function dateIndo(a) {
		a = a.split(' ');
		var tgl = a[0].split('-')[2]
		var bln = a[0].split('-')[1]
		var thn = a[0].split('-')[0]
		var jam = a[1].split(':')[0]
		var mnt = a[1].split(':')[1]
		var dtk = a[1].split(':')[2]
		if (bln == '01') {
			bln = 'Januari';
		} else if (bln == '02') {
			bln = 'Februari';
		} else if (bln == '03') {
			bln = 'Maret';
		} else if (bln == '04') {
			bln = 'April';
		} else if (bln == '05') {
			bln = 'Mei';
		} else if (bln == '06') {
			bln = 'Juni';
		} else if (bln == '07') {
			bln = 'Juli';
		} else if (bln == '08') {
			bln = 'Agustus';
		} else if (bln == '09') {
			bln = 'September';
		} else if (bln == '10') {
			bln = 'Oktober';
		} else if (bln == '11') {
			bln = 'November';
		} else {
			bln = 'Desember';
		}
		return [tgl, bln, thn, jam, mnt, dtk];
	}
	function beritaMakeHtml(a, pageNum, elementId) {
		var container = $('section #'+elementId);
		if (container.length == 0) {
			return false;
		}
		var beritaSebenarnya = [];
		for (var i = 0; i < a.length; i++) {
			if (a[i].tipe_konten == elementId) {
				beritaSebenarnya = beritaSebenarnya.concat(a[i]);
			}
		}
		var arrayLength = beritaSebenarnya.length;
		var pageQty;
		if ($(window).width() < 1024 && $(window).width() > 760) {
			pageQty = 4;
		} else {
			pageQty = 3;
		}
		var pageNumber = parseInt(pageNum);
		var floor = arrayLength-((pageNumber)*pageQty) < 0 ? 0 : arrayLength-((pageNumber)*pageQty);
		var baru = beritaSebenarnya.slice(floor, arrayLength-((pageNumber-1)*pageQty));
		for (var i = baru.length - 1; i >= 0; i--) {

			var button;
			if (baru[i].jurusan == 'tkj') {
				button = 'blue-darken';
			} else if (baru[i].jurusan == 'rpl') {
				button = 'orange-darken';
			} else if (baru[i].jurusan == 'mm') {
				button = 'green-darken';
			} else {
				button = 'dark-darken';
			}
			var date = dateIndo(baru[i].waktu_buat);
			var gambar;
			var jurusan;
			if (baru[i].gambar == '') {
				gambar = 'assets/img/no-image-light.png';
			} else {
				gambar = 'uploads/konten/'+baru[i].gambar;
			}
			if (baru[i].jurusan == "umum") {
				jurusan = '<span class="fa icon-smk-01"></span>';
			} else if (baru[i].jurusan == "tkj") {
				jurusan = '<span class="fa icon-tkj-01"></span>';
			} else if (baru[i].jurusan == "mm") {
				jurusan = '<span class="fa icon-mm-01"></span>';
			} else {
				jurusan = '<span class="fa icon-rpl-01"></span>';
			}
			let html = '<div class="column mobile-12 tablet-6 desktop-4">'+
				'<div class="card '+baru[i].jurusan+'" style="display: none;">'+
					'<img src="'+gambar+'" />'+
					'<span class="tag">'+jurusan+'</span>'+
					'<span class="date">'+date[0]+'<div>'+date[1].substr(0,3)+'</div></span>'+
					'<div class="desc">'+
						'<h1>'+baru[i].judul+'</h1>'+
						'<p class="date-desc">'+date[0]+' '+date[1]+' '+date[2]+'</p>'+
						'<div class="description">'+(baru[i].deskripsi.substr(0,225).length == 225 ? baru[i].deskripsi.substr(0,225)+'...' : baru[i].deskripsi.substr(0,225))+'</div>'+
					'</div>'+
					'<div class="read-more">'+
						'<a href="./berita-lebih.html?id='+baru[i].id+'" class="button active '+button+' medium">Baca selengkapnya</a>'+
					'</div>'+
				'</div>'+
			'</div>';
			container.append(html);

		}
		container.children('.column').children('.card').fadeIn(500);
		var paginate = $('.pagination[for='+elementId+']');
		var pageLast = Math.ceil(arrayLength/pageQty);
		console.log("Page Number = "+pageNumber);
		console.log("Page Last = "+pageLast);
		if (pageNumber == 1 && pageLast > 1) {
			paginate.children('.next').removeClass('hidden');
			paginate.children('.prev').addClass('hidden');
			paginate.children('.refresh').addClass('hidden');
		} else if (pageNumber == pageLast && pageLast > 1) {
			paginate.children('.prev').removeClass('hidden');
			paginate.children('.next').addClass('hidden');
			paginate.children('.refresh').addClass('hidden');
		} else if (pageNumber == 1 && pageLast <= 1) {
			paginate.children('.prev').addClass('hidden');
			paginate.children('.next').addClass('hidden');
			paginate.children('.refresh').addClass('hidden');
		} else {
			paginate.children('.prev').removeClass('hidden');
			paginate.children('.next').removeClass('hidden');
			paginate.children('.refresh').addClass('hidden');
		}
		paginate.children('.prev').children('button').attr('data', pageNumber-1);
		paginate.children('.next').children('button').attr('data', pageNumber+1);
	}
	$(document).on('click', '.pagination .column button', function(event) {
		event.preventDefault();
		var text = $(this).html();
		var elementFor = $(this).parent().parent().attr('for');
		var container = $('section #'+elementFor);
		if (container.length == 0) {
			return false;
		}

		if ($(this).parent().hasClass('refresh')) {
			$('#'+elementFor).children('.section-sub-title').removeClass('hidden');
			$.ajax({
				url: apiBaseUrl+'smk/getkonten/',
				type: 'GET',
			})
			.done(function(data) {
				berita = data;
				beritaMakeHtml(berita, 1, elementFor);
				$('#'+elementFor).children('.section-sub-title').addClass('hidden');
			})
			.fail(function(fail) {
				console.log(fail);
				$('.pagination').children('.refresh').removeClass('hidden');
				$('#'+elementFor).children('.section-sub-title').addClass('hidden');
			});
		} else {
			$(this).html('<span class="fa fa-circle-notch fa-spin"></span>');
			var beritaSebenarnya = [];
			for (var i = 0; i < berita.length; i++) {
				if (berita[i].tipe_konten == elementFor) {
					beritaSebenarnya = beritaSebenarnya.concat(berita[i]);
				}
			}
			if ($(this).hasClass('remove')) {
				container.children().remove();
			}
			if (beritaFilter == undefined) {
				beritaMakeHtml(beritaSebenarnya, $(this).attr('data'), elementFor);
			} else {
				beritaMakeHtml(beritaFilter, $(this).attr('data'), elementFor);
			}
		}
		$(this).html(text);
	});
	$(document).on('click', '#filter .column button', function(event) {
		event.preventDefault();
		var text = $(this).html();
		var elementFor = $(this).parent().parent().attr('for');
		var container = $('section #'+elementFor);
		if (container.length == 0) {
			return false;
		}
		var beritaSebenarnya = [];
		for (var i = 0; i < berita.length; i++) {
			if (berita[i].tipe_konten == elementFor) {
				beritaSebenarnya = beritaSebenarnya.concat(berita[i]);
			}
		}
		$(this).html('<span class="fa fa-circle-notch fa-spin"></span>');
		if ($(this).hasClass('active')) {
			$('#filter .column button').removeClass('active');
			container.children().remove();
			beritaFilter = undefined;
			beritaMakeHtml(beritaSebenarnya, 1, elementFor);
		} else {
			$('#filter .column button').removeClass('active');
			$(this).addClass('active');
			beritaFilter = [];
			var beritaTipe = $(this).attr('data');

			for (var i = beritaSebenarnya.length - 1; i >= 0; i--) {
				if (beritaSebenarnya[i].jurusan == beritaTipe) {
					beritaFilter = beritaFilter.concat(beritaSebenarnya[i]);
				}
			}
			container.children().remove();
			beritaMakeHtml(beritaFilter, 1, elementFor);
		}
		$(this).html(text);
	});
	$(window).scroll(function () {
		if ($(window).width() >= 760) {
			if ($(this).scrollTop() > 0) {
				if ($(this).scrollTop() >= $('nav').offset().top) {
					$('nav .brand > img').addClass('active');
				} else {
					$('nav .brand > img').removeClass('active');
				}
			} else {
				$('nav .brand > img').removeClass('active');
			}
		} else {
			return false;
		}
	});
	$(document).on('click', 'nav .nav-toggle', function(event) {
		event.preventDefault();
		if ($('nav .nav-toggle').hasClass('active')) {
			$('nav .nav-toggle').removeClass('active');
			$('nav').css({position:'sticky', width: '100vw'});
			$('aside').css({display:'none'});
			$('body').css('overflow-y', 'auto');
		} else {
			$('nav .nav-toggle').addClass('active');
			$('nav').css({position:'fixed', width: '100vw'});
			$('aside').css({display:'initial'});
			$('body').css('overflow-y', 'hidden');
		}
	});
	$(document).on('click', 'main > #menu-profil button', function(event) {
		event.preventDefault();
		if ($(this).hasClass('active')) return false;
		$('main > #menu-profil button').removeClass('active');
		$('main > section:not(#menu-profil)').hide();
		var data = $(this).attr('data');
		var title;
		if (data == 'visi') {
			title = 'Visi, Misi, dan Tujuan';
		} else if (data == 'jurusan') {
			title = 'Paket Keahlian';
		} else if (data == 'struktur') {
			title = 'Struktur SMK Negeri 7 Samarinda'
		} else {
			title = 'Guru dan Staff';
		}
		$(this).addClass('active');
		$('main > #menu-profil > .section-title').text(title);
		$('main > #'+data).fadeIn(150);
	});
	$(document).on('click', '#jurusan #paket div button', function(event) {
		event.preventDefault();
		if ($(this).hasClass('active')) {
			return false;
		} else {
			var data = $(this).attr('data');
			$('#jurusan #paket div button').removeClass('active');
			$(this).addClass('active');
			$('#keahlian section').addClass('hidden')
			$('#keahlian section.'+data).removeClass('hidden')
		}
	});
	function sendComment(data) {
		alert('comment sudah dikirim');
	}
	$(document).on('submit', '#kontak-form', function(event) {
		event.preventDefault();
		var captcha_required = $('#captcha_required').val();
		if (captcha_required == 0) {
			alert('Please fill the captcha!');
			return false;
		} else {
			var nama = $('#kontak-form input[name=nama]').val();
			var nomor = $('#kontak-form input[name=nomor]').val();
			var email = $('#kontak-form input[name=email]').val();
			var komentar = $('#kontak-form textarea[name=komentar]').val();
			$.ajax({
				url: apiBaseUrl+'smk/inputkontak/',
				type: 'POST',
				data: {
					nama: nama,
					nomor: nomor,
					email: email,
					komentar: komentar,
				},
			})
			.done(function(data) {
				console.log('success');
				window.location.href = "./kontak.html";
			})
			.fail(function() {
				console.log("error");
			});
		}
	});
	$(document).ready(function () {
		var link = $('nav .left ul').html() + $('nav .right ul').html();
		$('aside').html('<ul>'+link+'</ul>');

		var title = $('meta[name=title]').attr('content');
		if (title == 'berita' || title == 'artikel' || title == 'beranda') {
			$.ajax({
				url: apiBaseUrl+'smk/getkonten/',
				type: 'GET',
			})
			.done(function(data) {
				berita = data;
				if (title == 'berita' || title == 'artikel') {
					beritaMakeHtml(berita, 1, 'berita');
					beritaMakeHtml(berita, 1, 'artikel');
					beritaMakeHtml(berita, 1, 'kreasi');
					$('#berita .section-sub-title').addClass('hidden');
					$('#artikel .section-sub-title').addClass('hidden');
					$('#kreasi .section-sub-title').addClass('hidden');
				} else {
					var numBerita = 0;
					var numArtikel = 0;
					var gambar;
					$.each(berita, function(index, el) {
						if (el.gambar == '') {
							gambar = 'assets/img/no-image-light.png';
						} else {
							gambar = apiBaseUrl+'uploads/konten/'+el.gambar;
						}
						if (el.tipe_konten == 'berita') {
							if (numBerita < 4) {
								$('.slider.for-1').append('<div><img src="'+gambar+'" /><div class="caption"><h3><a href="./berita-lebih.html?id='+el.id+'">'+el.judul+'</a></h3></div></div>');
							}
							numBerita++;
						} else if (el.tipe_konten == 'artikel' || el.tipe_konten == 'kreasi') {
							if (numArtikel < 4) {
								$('.slider.for-2').append('<div><img src="'+gambar+'" /><div class="caption"><h3><a href="./berita-lebih.html?id='+el.id+'">'+el.judul+'</a></h3></div></div>');
							}
							numArtikel++;
						}
					});
					$('.slick-for').slick({
						slidesToShow: 1,
				  		centerPadding: '20px',
				  		autoplay: true,
						slidesToScroll: 1,
						arrows: false,
						dots: true,
						fade: true,
					});
				}
			})
			.fail(function(fail) {
				console.log(fail);
				$('.pagination').children('.refresh').removeClass('hidden');
				$('#berita .section-sub-title').addClass('hidden');
				$('#artikel .section-sub-title').addClass('hidden');
				$('#kreasi .section-sub-title').addClass('hidden');
			});
			$(window).on('load', function(event) {
				event.preventDefault();
				$('body, html').delay(300).animate({scrollTop: 0}, 0);
				$('#pre-loader').delay(300).animate({top: '-100vh'}, 500);
			});
		} else if (title == 'galeri') {
			var record = [
				{col: '4', data: '1'},
				{col: '2', data: '2'},
				{col: '4', data: '3'},
				{col: '8', data: '4'},
				{col: '8', data: '5'},
				{col: '8', data: '6'},
				{col: '2', data: '7'},
				{col: '4', data: '8'},
				{col: '4', data: '9'},
				{col: '8', data: '10'},
				{col: '8', data: '11'},
			];

			var column = 12;
			var array1 = [];
			var array2 = [];
			var array3 = [];

			var container = $('#galeri');

			$.each(record, function(index, el) {
				if (array3.length != 0) {
					$.each(array3, function(index, val) {
						if (val == undefined) return false;
						if (column == 0) {
							var html = '<div class="image column mobile-12"><img src="assets/img/no-image-light.png" /></div>';
							container.append(html);
							array3.splice(index, 1);
						};
					});
				};
				if (array2.length != 0) {
					$.each(array2, function(index, val) {
						if (column == 0) column = 12;
						if (val == undefined) return false;
						if (val.col <= column) {
							var col;
							if (val.col == '2') {
								col = ' tablet-3 desktop-2';
							} else if (val.col == '4') {
								col = ' tablet-6 desktop-4';
							} else {
								col = ' tablet-12 desktop-8';
							}
							var html = '<div class="image column mobile-12'+col+'"><img src="assets/img/no-image-light.png" /></div>';
							column = column - val.col;
							container.append(html);
							array2.splice(index, 1);
						} else {
							array3.push(val);
							array2.splice(index, 1);
						};
					});
				};
				if (array1.length != 0) {
					$.each(array1, function(index, vel) {
						if (column == 0) column = 12;
						if (vel == undefined) return false;
						if (vel.col <= column) {
							var col;
							if (vel.col == '2') {
								col = ' tablet-3 desktop-2';
							} else if (vel.col == '4') {
								col = ' tablet-6 desktop-4';
							} else {
								col = ' tablet-12 desktop-8';
							}
							var html = '<div class="image column mobile-12'+col+'"><img src="assets/img/no-image-light.png" /></div>';
							column = column - vel.col;
							container.append(html);
							array1.splice(index, 1);
						} else {
							array2.push(vel);
							array1.splice(index, 1);
						};
					});
				};
				if (column == 0) column = 12;
				if ((record.length - 1) == index) {
					var html = '<div class="image column mobile-12"><img src="assets/img/no-image-light.png" /></div>';
					column = column - el.col;
					container.append(html);
				} else if (el.col <= column) {
					var col;
					if (el.col == '2') {
						col = ' tablet-3 desktop-2';
					} else if (el.col == '4') {
						col = ' tablet-6 desktop-4';
					} else {
						col = ' tablet-12 desktop-8';
					}
					var html = '<div class="image column mobile-12'+col+'"><img src="assets/img/no-image-light.png" /></div>';
					column = column - el.col;
					container.append(html);
				} else {
					array1.push(el);
				};
			});
		} else if (title == 'profil') {
			$.ajax({
				url: apiBaseUrl+'smk/getprofil/',
				type: 'GET',
			})
			.done(function(data) {
				berita = data;
				$('main > #visi h1').remove();
				$.each(berita, function(index, el) {
					if (el.judul == 'visi') {
						$('main > #visi').append('<h1 class="margin-top-4 section-sub-title">Visi</h1>');
						$('main > #visi').append(el.deskripsi);
					} else if (el.judul == 'misi') {
						$('main > #visi').append('<h1 class="margin-top-4 section-sub-title">Misi</h1>');
						$('main > #visi').append(el.deskripsi);
					} else if (el.judul == 'tujuan') {
						$('main > #visi').append('<h1 class="margin-top-4 section-sub-title">Tujuan</h1>');
						$('main > #visi').append(el.deskripsi);
					} else if (el.judul == 'rpl') {
						$('main > #jurusan #keahlian section.rpl div:nth-of-type(2)').append(el.deskripsi);
						$('main > #jurusan #keahlian section.rpl h1').addClass('section-sub-title');
					} else if (el.judul == 'mm') {
						$('main > #jurusan #keahlian section.mm div:nth-of-type(2)').append(el.deskripsi);
						$('main > #jurusan #keahlian section.mm h1').addClass('section-sub-title');
					} else if (el.judul == 'tkj') {
						$('main > #jurusan #keahlian section.tkj div:nth-of-type(2)').append(el.deskripsi);
						$('main > #jurusan #keahlian section.tkj h1').addClass('section-sub-title');
					}
				});
			})
			.fail(function(fail) {
				console.log(fail);
			});
		} else if (title == 'berita-lebih') {
			var url = window.location.href;
			var url = new URL(url);
			var data = url.searchParams.get("id");

			$.ajax({
				url: apiBaseUrl+'smk/getkontendetail/',
				type: 'POST',
				data: {'id': data},
			})
			.done(function(data) {
				$('#berita-content > .header > .section-sub-title').text(data[0].judul);
				$('#berita-content > .header > p:nth-of-type(1)').text("Dibuat oleh "+data[0].penulis);
				var tglIndo = dateIndo((data[0].waktu_ubah == "0000-00-00 00:00:00") ? data[0].waktu_buat : data[0].waktu_ubah);
				$('#berita-content > .header > p:nth-of-type(2)').html('<span class="far fa-clock"></span> '+tglIndo[0]+" "+tglIndo[1]+" "+tglIndo[2]+", "+tglIndo[3]+":"+tglIndo[4]);
				$('#berita-content > .img').html((data[0].gambar == "") ? '' : '<img alt="..." src="'+apiBaseUrl+'uploads/konten/'+data[0].gambar+'">');
				$('#berita-content > .content').html(data[0].deskripsi);
				$('#berita-content > .link-share > .facebook').attr('href', 'http://www.facebook.com/sharer.php?u='+window.location.href);
				$('#berita-content > .link-share > .twitter').attr('href', 'https://twitter.com/share?url='+window.location.href);
				$('#berita-content > .link-share > .gplus').attr('href', 'https://plus.google.com/share?url='+window.location.href);
			})
			.fail(function(fail) {
				console.log(fail);
			});

			$.ajax({
				url: apiBaseUrl+'smk/getkontenpopuler/',
				type: 'GET',
			})
			.done(function(berita) {
				$.each(berita, function(index, el) {
					if (el.gambar == '') {
						gambar = 'assets/img/no-image-dark.png';
					} else {
						gambar = apiBaseUrl+'uploads/konten/'+el.gambar;
					}
					gambar = '<img alt="..." src="'+gambar+'" />';
					var judul = (el.judul.substr(0, 45).length == 45) ? el.judul.substr(0, 45)+'...' : el.judul;
					judul = '<a href="./berita-lebih.html?id='+el.id+'">'+judul+'</a>';
					var htmlPopuler = '<div class="column"><div class="card"><div class="img">'+gambar+'</div><div class="title">'+judul+'</div></div></div>';
					$('#berita-populer .columns').append(htmlPopuler);
				});
			})
			.fail(function(fail) {
				console.log(fail);
			});
		}
	});
});

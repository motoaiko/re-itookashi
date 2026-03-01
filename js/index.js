/* ------------------------------------- */
// ローディング画面
/* ------------------------------------- */

$(window).on('load', function () {
	if (!sessionStorage.getItem('loaderShown')) {
		$('.loader_bg').delay(3000).fadeOut(500);
		// もし一回題していれば表示済みなので
		sessionStorage.setItem('loaderShown', 'true');
	} else {
		// 2回目以降は即座に非表示
		$('.loader_bg').hide();
	}
});

/* ---------------- */
// ハンバーガーメニュー
/* ---------------- */

$(function () {
	$('.hamburger').on('click', function () {
		$('body').toggleClass('open');
	});

	$('.nav a').on('click', function () {
		$('body').removeClass('open');
	});
});

/* ---------------- */
// スクロールフェードアップ
/* ---------------- */
$(function () {
	function fadeInOnScroll() {
		$('.js-fadeup').each(function () {
			var elemTop = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();

			// 判定を調整（スクロール範囲に100px余裕）
			if (scroll > elemTop - windowHeight + 200) {
				$(this).addClass('in-view');
			} else {
				$(this).removeClass('in-view');
			}
		});
	}
	$(window).on('scroll load resize', function () {
		fadeInOnScroll();
	});
});
/* ---------------- */
/* topへ戻るボタン */
/* ---------------- */

document.addEventListener('DOMContentLoaded', function () {
	const pageTopBtn = document.getElementById('pageTop');
	const header = document.getElementById('kv');
	const headerHeight = header.offsetHeight;

	function togglePageTopBtn() {
		if (window.scrollY > headerHeight) {
			pageTopBtn.classList.add('show');
		} else {
			pageTopBtn.classList.remove('show');
		}
	}
	window.addEventListener('scroll', togglePageTopBtn);

	// ▶ トップへ戻るボタンが押されたらハンバーガーメニューを閉じる
	pageTopBtn.addEventListener('click', function () {
		document.body.classList.remove('open');
	});
});

/* ---------------- */
/* slider */
/* ---------------- */

$(document).ready(function () {
	$('.slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 0,
		speed: 5000,
		cssEase: 'linear',
		infinite: true,
		arrows: false,
		pauseOnHover: false,
		pauseOnFocus: false,

		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					centerMode: true,
					centerPadding: '30%',
				},
			},
		],
	});
});
/* ---------------- */
/* 紹介部分slider */
/* ---------------- */
$(document).ready(function () {
	$('.lineup__imgbox')
		.on('init', function () {
			// 最初のスライドに"add-animation"のclassを付ける(data-slick-index="0"が最初のスライドを指す)
			$('.slick-slide[data-slick-index="0"] img').addClass('add-animation');
		})
		// 通常のオプション
		.slick({
			autoplay: true, // 自動再生ON
			fade: true, // フェードON
			arrows: false, // 矢印OFF
			speed: 2000, // スライド、フェードアニメーションの速度
			autoplaySpeed: 3000, // 自動再生速度
			pauseOnFocus: false, // フォーカスで一時停止OFF
			pauseOnHover: false, // マウスホバーで一時停止OFF
		})
		.on({
			// スライドが移動する前に発生するイベント
			beforeChange: function (event, slick, currentSlide, nextSlide) {
				// 表示されているスライドに"add-animation"のclassをつける
				$('.slick-slide', this).eq(nextSlide).find('img').addClass('add-animation');
				// あとで"add-animation"のclassを消すための"remove-animation"classを付ける
				$('.slick-slide', this).eq(currentSlide).find('img').addClass('remove-animation');
			},
			// スライドが移動した後に発生するイベント
			afterChange: function () {
				// 表示していないスライドはアニメーションのclassを外す
				$('.remove-animation').removeClass('remove-animation add-animation');
			},
		});
});

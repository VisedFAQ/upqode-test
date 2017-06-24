$(document).ready(function() {
    new WOW().init();

    $('.slider').slick({
        autoplay: true,
        dots: true
    });
    $('.products-slider').slick({
        autoplay: true,
        autoplaySpeed: 6000,
        dots: true,
        arrows: false
    });

    // Реализация dropdown в футере

    function DropDown(el) {
    this.dd = el;
    this.placeholder = this.dd.children('span');
    this.opts = this.dd.find('ul.dropdown > li');
    this.val = '';
    this.index = -1;
    this.initEvents();
    }
    DropDown.prototype = {
        initEvents : function() {
            var obj = this;

            obj.dd.on('click', function(event){
                $(this).toggleClass('active');
                return false;
            });

            obj.opts.on('click',function(){
                var opt = $(this);
                obj.val = opt.text();
                obj.index = opt.index();
                obj.placeholder.text(obj.val);
            });
        },
        getValue : function() {
            return this.val;
        },
        getIndex : function() {
            return this.index;
        }
    }

    $(function() {

		var dd = new DropDown($('.contact-form__dropdown'));

		$(document).click(function() {
			// all dropdowns
			$('.contact-form__dropdown').removeClass('active');
		});

	});

    // Плавный скролл и подсвечивание пунктов меню в определенной секции




});


$(document).ready(function () {
		$(document).on("scroll", onScroll);

		$('a[href^="#"]').on('click', function (e) {
			e.preventDefault();
			$(document).off("scroll");

			$('a').each(function () {
				$(this).removeClass('active');
			})
			$(this).addClass('active');

			var target = this.hash;
			$target = $(target);
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top+2
			}, 500, 'swing', function () {
				window.location.hash = target;
				$(document).on("scroll", onScroll);
			});
		});
	});

	function onScroll(event){
		var scrollPosition = $(document).scrollTop();
		$('.main-menu a.anchor').each(function () {
			var currentLink = $(this);
			var refElement = $(currentLink.attr("href"));
			if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
				$('.main-menu ul li a.anchor').removeClass("active");
				currentLink.addClass("active");
			}
			else{
				currentLink.removeClass("active");
			}
		});
	}

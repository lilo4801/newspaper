(function () {
  "use strict";

  // iPad and iPod detection
  var isiPad = function () {
    return navigator.platform.indexOf("iPad") != -1;
  };

  var isiPhone = function () {
    return (
      navigator.platform.indexOf("iPhone") != -1 ||
      navigator.platform.indexOf("iPod") != -1
    );
  };

  var fullHeight = function () {
    $(".js-fullheight").css("height", $(window).height());
    $(window).resize(function () {
      $(".js-fullheight").css("height", $(window).height());
    });
  };

  var burgerMenu = function () {
    $(".js-colorlib-nav-toggle").on("click", function (event) {
      event.preventDefault();
      var $this = $(this);
      if ($("body").hasClass("menu-show")) {
        $("body").removeClass("menu-show");
        $("#colorlib-main-nav > .js-colorlib-nav-toggle").removeClass("show");
      } else {
        $("body").addClass("menu-show");
        setTimeout(function () {
          $("#colorlib-main-nav > .js-colorlib-nav-toggle").addClass("show");
        }, 900);
      }
    });
  };

  // Animations

  var contentWayPoint = function () {
    var i = 0;
    $(".animate-box").waypoint(
      function (direction) {
        if (direction === "down" && !$(this.element).hasClass("animated")) {
          i++;

          $(this.element).addClass("item-animate");
          setTimeout(function () {
            $("body .animate-box.item-animate").each(function (k) {
              var el = $(this);
              setTimeout(
                function () {
                  var effect = el.data("animate-effect");
                  if (effect === "fadeIn") {
                    el.addClass("fadeIn animated");
                  } else {
                    el.addClass("fadeInUp animated");
                  }

                  el.removeClass("item-animate");
                },
                k * 200,
                "easeInOutExpo"
              );
            });
          }, 100);
        }
      },
      { offset: "85%" }
    );
  };

  var counter = function () {
    $(".js-counter").countTo({
      formatter: function (value, options) {
        return value.toFixed(options.decimals);
      },
    });
  };

  var counterWayPoint = function () {
    if ($("#colorlib-counter").length > 0) {
      $("#colorlib-counter").waypoint(
        function (direction) {
          if (direction === "down" && !$(this.element).hasClass("animated")) {
            setTimeout(counter, 400);
            $(this.element).addClass("animated");
          }
        },
        { offset: "90%" }
      );
    }
  };
  let owl;
  let owl2;
  let owl3;
  // Owl Carousel
  var owlCarouselFeatureSlide = function () {
    var windowWidth = window.innerWidth;

    if (windowWidth < 769) {
      owl = $(".owl-carousel1");
      owl.owlCarousel({
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        autoplay: false,
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        autoHeight: true,
        lazyLoad: true,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 3,
          },
        },
        navText: [
          "<i class='icon-arrow-left3 owl-direction'></i>",
          "<i class='icon-arrow-right3 owl-direction'></i>",
        ],
      });
    } else {
      owl = $(".owl-carousel1");
      owl.owlCarousel({
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        autoplay: true,
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        autoHeight: true,
        lazyLoad: true,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 3,
          },
        },
        navText: [
          "<i class='icon-arrow-left3 owl-direction'></i>",
          "<i class='icon-arrow-right3 owl-direction'></i>",
        ],
      });
    }

    owl3 = $(".owl-carousel3");
    owl3.owlCarousel({
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      autoplay: true,
      loop: true,
      margin: 0,
      nav: false,
      dots: false,
      autoHeight: true,
      items: 1,
      lazyLoad: true,
      navText: [
        "<i class='icon-arrow-left3 owl-direction'></i>",
        "<i class='icon-arrow-right3 owl-direction'></i>",
      ],
    });

    if (windowWidth < 769) {
      $(".owl-carousel4").owlCarousel({
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        autoplay: false,
        loop: true,
        margin: 0,
        nav: true,
        autoHeight: true,
        lazyLoad: true,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1000: {
            items: 1,
          },
        },
        navText: [
          "<i class='icon-arrow-left3 owl-direction'></i>",
          "<i class='icon-arrow-right3 owl-direction'></i>",
        ],
      });
    } else {
      $(".owl-carousel4").owlCarousel({
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        autoplay: true,
        loop: true,
        margin: 0,
        nav: true,
        autoHeight: true,
        lazyLoad: true,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1000: {
            items: 1,
          },
        },
        navText: [
          "<i class='icon-arrow-left3 owl-direction'></i>",
          "<i class='icon-arrow-right3 owl-direction'></i>",
        ],
      });
    }

    if (windowWidth < 769) {
      $(".owl-carousel5").owlCarousel({
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        autoplay: false,
        loop: true,
        margin: 0,
        nav: true,
        autoHeight: true,
        lazyLoad: true,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1000: {
            items: 1,
          },
        },
        navText: [
          "<i class='icon-arrow-left3 owl-direction'></i>",
          "<i class='icon-arrow-right3 owl-direction'></i>",
        ],
      });
    } else {
      $(".owl-carousel5").owlCarousel({
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        autoplay: true,
        loop: true,
        margin: 0,
        nav: true,
        autoHeight: true,
        lazyLoad: true,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1000: {
            items: 1,
          },
        },
        navText: [
          "<i class='icon-arrow-left3 owl-direction'></i>",
          "<i class='icon-arrow-right3 owl-direction'></i>",
        ],
      });
    }
  };

  // Document on load.
  $(function () {
    fullHeight();
    burgerMenu();
    counterWayPoint();
    contentWayPoint();
    owlCarouselFeatureSlide();

    // $(".lazy").lazy();
    // $(".motsohoatdong .work-img").lazy();

    $(".soluochandleclick").on("click", (event) => {
      let attributeValue = $(event.target).attr("index");
      let dot = $(".owl-carousel4 .owl-dot").eq(attributeValue);
      dot.click();
    });

    $(".banbientaphandleclick").on("click", (event) => {
      let attributeValue = $(event.target).attr("index");
      let dot = $(".owl-carousel5 .owl-dot").eq(attributeValue);
      dot.click();
    });

    let motsohoatdongContent = `<div id="customModal6" class="modal">
	<span class="closeModal">Ă—</span>
	<div class="body">
		<div class="box-img myCarousel">
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage" src="images/21a.png"
							style="object-fit: contain;" alt="Tá»•ng BiĂªn táº­p BĂ¡o HĂ  Giang LĂª Trá»ng Láº­p vĂ  cĂ¡c Ä‘á»“ng chĂ­ PhĂ³ Tá»•ng BiĂªn vá»›i
							lĂ£nh Ä‘áº¡o, cĂ¡n bá»™, phĂ³ng viĂªn, biĂªn táº­p viĂªn BĂ¡o HĂ  Giang nÄƒm 2014"> </img></a>
					<div class="desc">
						<h3>Tá»•ng BiĂªn táº­p BĂ¡o HĂ  Giang LĂª Trá»ng Láº­p vĂ  cĂ¡c Ä‘á»“ng chĂ­ PhĂ³ Tá»•ng BiĂªn vá»›i
							lĂ£nh Ä‘áº¡o, cĂ¡n bá»™, phĂ³ng viĂªn, biĂªn táº­p viĂªn BĂ¡o HĂ  Giang nÄƒm 2014</h3>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage owl-lazy" data-src="images/19a.png"
							style="object-fit: contain;" alt="LĂ£nh Ä‘áº¡o Äáº£ng á»§y khá»‘i CÆ¡ quan - Doanh nghiá»‡p tá»‰nh táº·ng hoa Chi á»§y Chi bá»™ BĂ¡o HĂ  Giang
							khĂ³a X, nhiá»‡m ká»³ 2020 - 2025."> </img></a>
					<div class="desc">
						<h3>LĂ£nh Ä‘áº¡o Äáº£ng á»§y khá»‘i CÆ¡ quan - Doanh nghiá»‡p tá»‰nh táº·ng hoa Chi á»§y Chi bá»™ BĂ¡o HĂ  Giang
							khĂ³a X, nhiá»‡m ká»³ 2020 - 2025.</h3>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage owl-lazy"
							data-src="images/BAN BIEN TAP .png" style="object-fit: contain;" alt="Tá»•ng BiĂªn táº­p BĂ¡o HĂ  Giang Nguyá»…n Trung Thu táº·ng hoa chĂºc má»«ng Äáº¡i há»™i Há»™i Cá»±u chiáº¿n
							binh BĂ¡o HĂ  Giang nhiá»‡m ká»³ 2022 - 2027 (nÄƒm 2022). "> </img></a>
					<div class="desc">
						
						<h3>Tá»•ng BiĂªn táº­p BĂ¡o HĂ  Giang Nguyá»…n Trung Thu táº·ng hoa chĂºc má»«ng Äáº¡i há»™i Há»™i Cá»±u chiáº¿n
							binh BĂ¡o HĂ  Giang nhiá»‡m ká»³ 2022 - 2027 (nÄƒm 2022). </h3>
					</div>
				</div>
			</div>

			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage owl-lazy"
							data-src="images/LANH DAO BAO HA GIANG.png" style="object-fit: contain;" alt="LĂ£nh Ä‘áº¡o BĂ¡o HĂ  Giang táº·ng quĂ  cĂ¡c thĂ nh viĂªn CĂ¢u láº¡c bá»™ HÆ°u trĂ­
							BĂ¡o HĂ  Giang táº¡i lá»… ra máº¯t (31.1.2024)."> </img></a>
					<div class="desc">
						
						<h3>LĂ£nh Ä‘áº¡o BĂ¡o HĂ  Giang táº·ng quĂ  cĂ¡c thĂ nh viĂªn CĂ¢u láº¡c bá»™ HÆ°u trĂ­
							BĂ¡o HĂ  Giang táº¡i lá»… ra máº¯t (31.1.2024). </h3>
					</div>
				</div>
			</div>

			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage owl-lazy"
							data-src="images/ky duyet.png" style="object-fit: contain;" alt="Tá»•ng BiĂªn táº­p BĂ¡o HĂ 
							Giang Nguyá»…n Trung Thu
							duyá»‡t xuáº¥t báº£n sá»‘ bĂ¡o
							thÆ°á»ng ká»³ in 4 máº§u Ä‘áº§u tiĂªn
							(nÄƒm 2020)."> </img></a>
					<div class="desc">
						<h3> </h3>
						<h3>
							Tá»•ng BiĂªn táº­p BĂ¡o HĂ 
							Giang Nguyá»…n Trung Thu
							duyá»‡t xuáº¥t báº£n sá»‘ bĂ¡o
							thÆ°á»ng ká»³ in 4 máº§u Ä‘áº§u tiĂªn
							(nÄƒm 2020).</h3>
					</div>
				</div>
			</div>




			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage owl-lazy"
							data-src="images/nhan ban giao.png" style="object-fit: contain;" alt="BĂ¡o HĂ  Giang
							nháº­n bĂ n giao
							thiáº¿t bá»‹."> </img></a>
					<div class="desc">
						
						<h3>BĂ¡o HĂ  Giang
							nháº­n bĂ n giao
							thiáº¿t bá»‹.</h3>
					</div>
				</div>
			</div>

			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage owl-lazy"
							data-src="images/VUON TAP.png" style="object-fit: contain;" alt="LĂ£nh Ä‘áº¡o BĂ¡o HĂ  Giang vĂ  BĂ¡o TuyĂªn Quang
							há»— trá»£ cĂ¢y giá»‘ng cho xĂ£ LĂ¹ng TĂ¡m (Quáº£n Báº¡) thá»±c
							hiá»‡n chÆ°Æ¡ng trĂ¬nh Cáº£i táº¡o vÆ°á»n táº¡p (nÄƒm 2023)."> </img></a>
					<div class="desc">
						
						<h3>LĂ£nh Ä‘áº¡o BĂ¡o HĂ  Giang vĂ  BĂ¡o TuyĂªn Quang
							há»— trá»£ cĂ¢y giá»‘ng cho xĂ£ LĂ¹ng TĂ¡m (Quáº£n Báº¡) thá»±c
							hiá»‡n chÆ°Æ¡ng trĂ¬nh Cáº£i táº¡o vÆ°á»n táº¡p (nÄƒm 2023).</h3>
					</div>
				</div>
			</div>

			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage owl-lazy"
							data-src="images/BCH CONG DOAN.png" style="object-fit: contain;" alt="LĂ£nh Ä‘áº¡o BĂ¡o HĂ  Giang vĂ  lĂ£nh
							Ä‘áº¡o CĂ´ng Ä‘oĂ n viĂªn chá»©c tá»‰nh táº·ng
							hoa chĂºc má»«ng BCH CÄCS BĂ¡o HĂ 
							Giang khĂ³a má»›i 2023 - 2028."> </img></a>
					<div class="desc">
						
						<h3>LĂ£nh Ä‘áº¡o BĂ¡o HĂ  Giang vĂ  lĂ£nh
							Ä‘áº¡o CĂ´ng Ä‘oĂ n viĂªn chá»©c tá»‰nh táº·ng
							hoa chĂºc má»«ng BCH CÄCS BĂ¡o HĂ 
							Giang khĂ³a má»›i 2023 - 2028.</h3>
					</div>
				</div>
			</div>

			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage owl-lazy" data-src="images/8.png"
							style="object-fit: contain;"
							alt="LĂ£nh Ä‘áº¡o BĂ¡o HĂ  Giang vĂ  Há»™i NhĂ  bĂ¡o tá»‰nh táº·ng hoa chá»‹ em nhĂ¢n ngĂ y 8.3.2024.">
						</img></a>
					<div class="desc">
						
						<h3>LĂ£nh Ä‘áº¡o BĂ¡o HĂ  Giang vĂ  Há»™i NhĂ  bĂ¡o tá»‰nh táº·ng hoa chá»‹ em nhĂ¢n ngĂ y 8.3.2024.</h3>
					</div>
				</div>
			</div>

			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage owl-lazy"
							data-src="images/BCH CHI DOAN.png" style="object-fit: contain;" alt="LĂ£nh Ä‘áº¡o BĂ¡o HĂ 
							Giang; Ä‘áº¡i diá»‡n
							Chi Ä‘oĂ n Äá»“n BiĂªn
							phĂ²ng Cá»­a kháº©u
							Quá»‘c táº¿ Thanh
							Thuá»· táº·ng hoa
							chĂºc má»«ng BCH
							Chi Ä‘oĂ n BĂ¡o HĂ 
							Giang, nhiá»‡m ká»³
							2022 - 2024 (thĂ¡ng
							4.2022)."> </img></a>
					<div class="desc">
						
						<h3>LĂ£nh Ä‘áº¡o BĂ¡o HĂ 
							Giang; Ä‘áº¡i diá»‡n
							Chi Ä‘oĂ n Äá»“n BiĂªn
							phĂ²ng Cá»­a kháº©u
							Quá»‘c táº¿ Thanh
							Thuá»· táº·ng hoa
							chĂºc má»«ng BCH
							Chi Ä‘oĂ n BĂ¡o HĂ 
							Giang, nhiá»‡m ká»³
							2022 - 2024 (thĂ¡ng
							4.2022).</h3>
					</div>
				</div>
			</div>



			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage owl-lazy"
							data-src="images/PV BAO HA GIANG PHONG VAN.png" style="object-fit: contain;" alt="PhĂ³ng viĂªn BĂ¡o HĂ  Giang phá»ng váº¥n lá»±c lÆ°á»£ng diá»…n táº­p phÆ°Æ¡ng Ă¡n phĂ²ng chĂ¡y, chá»¯a chĂ¡y
                            táº¡i chá»£ trung tĂ¢m thĂ nh phá»‘ HĂ  Giang (nÄƒm 2023). Cá»« Lan tĂ¡c nghiá»‡p."> </img></a>
					<div class="desc">
						<h3> </h3>
						<h3>PhĂ³ng viĂªn BĂ¡o HĂ  Giang phá»ng váº¥n lá»±c lÆ°á»£ng diá»…n táº­p phÆ°Æ¡ng Ă¡n phĂ²ng chĂ¡y, chá»¯a chĂ¡y
                        táº¡i chá»£ trung tĂ¢m thĂ nh phá»‘ HĂ  Giang (nÄƒm 2023). Cá»« Lan tĂ¡c nghiá»‡p.</h3>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage owl-lazy"
							data-src="images/giai ve quoc hoi va hdnd.png" style="object-fit: contain;" alt="Giáº£i C Giáº£i bĂ¡o chĂ­ toĂ n quá»‘c vá» Quá»‘c há»™i
							vĂ  HÄND láº§n thá»© Hai (Giáº£i DiĂªn Há»“ng)
							nÄƒm 2024."> </img></a>
					<div class="desc">
						
						<h3>Giáº£i C Giáº£i bĂ¡o chĂ­ toĂ n quá»‘c vá» Quá»‘c há»™i
							vĂ  HÄND láº§n thá»© Hai (Giáº£i DiĂªn Há»“ng)
							nÄƒm 2024.</h3>
					</div>
				</div>
			</div>


			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage owl-lazy"
							data-src="images/1e4ee94106f5aaabf3e4.png" style="object-fit: contain;" alt="Giáº£i Khuyáº¿n khĂ­ch Giáº£i bĂ¡o chĂ­ toĂ n quá»‘c
							vá» Quá»‘c há»™i vĂ  HÄND láº§n thá»© Nháº¥t
							(Giáº£i DiĂªn Há»“ng) nÄƒm 2023."> </img></a>
					<div class="desc">
						
						<h3>Giáº£i Khuyáº¿n khĂ­ch Giáº£i bĂ¡o chĂ­ toĂ n quá»‘c
							vá» Quá»‘c há»™i vĂ  HÄND láº§n thá»© Nháº¥t
							(Giáº£i DiĂªn Há»“ng) nÄƒm 2023.</h3>
					</div>
				</div>
			</div>

			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage owl-lazy"
							data-src="images/9ea81682f93655680c27.png" style="object-fit: contain;" alt="Giáº£i C Giáº£i bĂ¡o chĂ­ toĂ n quá»‘c
							vá» xĂ¢y dá»±ng Äáº£ng (Giáº£i BĂºa
							liá»m vĂ ng) láº§n thá»© VIII - 2023."> </img></a>
					<div class="desc">
						
						<h3>Giáº£i C Giáº£i bĂ¡o chĂ­ toĂ n quá»‘c
							vá» xĂ¢y dá»±ng Äáº£ng (Giáº£i BĂºa
							liá»m vĂ ng) láº§n thá»© VIII - 2023.</h3>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage owl-lazy"
							data-src="images/nhom tac gia.png" style="object-fit: contain;" alt="NhĂ³m tĂ¡c giáº£ BĂ¡o HĂ  Giang Ä‘oáº¡t giáº£i C Giáº£i bĂ¡o chĂ­
							toĂ n quá»‘c vá» xĂ¢y dá»±ng Äáº£ng láº§n thá»© VIII - nÄƒm 2023.
							(Tá»« trĂ¡i qua: Diá»‡u Káº¿, Nguyá»…n PhÆ°Æ¡ng, Kim Tiáº¿n,
							Biá»‡n LuĂ¢n, HoĂ ng Ngá»c, Thu PhÆ°Æ¡ng)."> </img></a>
					<div class="desc">
						
						<h3>NhĂ³m tĂ¡c giáº£ BĂ¡o HĂ  Giang Ä‘oáº¡t giáº£i C Giáº£i bĂ¡o chĂ­
							toĂ n quá»‘c vá» xĂ¢y dá»±ng Äáº£ng láº§n thá»© VIII - nÄƒm 2023.
							(Tá»« trĂ¡i qua: Diá»‡u Káº¿, Nguyá»…n PhÆ°Æ¡ng, Kim Tiáº¿n,
							Biá»‡n LuĂ¢n, HoĂ ng Ngá»c, Thu PhÆ°Æ¡ng).</h3>
					</div>
				</div>
			</div>



			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage owl-lazy"
							data-src="images/1 (57).png" style="object-fit: contain;" alt="BĂ¡o HĂ  Giang Ä‘oáº¡t
							giáº£i nháº¥t Ä‘Ă´i nam
							ná»¯ bĂ³ng bĂ n
							Giao há»¯u thá»ƒ
							thao cĂ¡c Ban
							xĂ¢y dá»±ng Äáº£ng
							nÄƒm
							2023."> </img></a>
					<div class="desc">
						
						<h3>BĂ¡o HĂ  Giang Ä‘oáº¡t
							giáº£i nháº¥t Ä‘Ă´i nam
							ná»¯ bĂ³ng bĂ n
							Giao há»¯u thá»ƒ
							thao cĂ¡c Ban
							xĂ¢y dá»±ng Äáº£ng
							nÄƒm
							2023.</h3>
					</div>
				</div>
			</div>


			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage owl-lazy"
							data-src="images/4 (57).png" style="object-fit: contain;" alt="Giao há»¯u thá»ƒ thao giá»¯a
							BĂ¡o HĂ  Giang vá»›i
							Viettel Post.
							(nÄƒm
							2023)."> </img></a>
					<div class="desc">
						
						<h3>Giao há»¯u thá»ƒ thao giá»¯a
							BĂ¡o HĂ  Giang vá»›i
							Viettel Post.
							(nÄƒm
							2023).</h3>
					</div>
				</div>
			</div>



			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage owl-lazy"
							data-src="images/2 (57).png" style="object-fit: contain;" alt="images/2 (57).png">
						</img></a>
					<div class="desc">
						
						<h3>CĂ¡n bá»™, phĂ³ng viĂªn BĂ¡o HĂ  Giang tham quan CĂ¹ Lao Xanh (T.P Quy nhÆ¡n, BĂ¬nh Äá»‹nh) nÄƒm
							2023. </h3>
					</div>
				</div>
			</div>

			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage owl-lazy"
							data-src="images/3 (57).png" style="object-fit: contain;" alt=""> </img></a>
					<div class="desc">
						
						<h3>CĂ¡n bá»™, phĂ³ng viĂªn BĂ¡o HĂ  Giang tham quan ThĂ¡p Nghinh Phong (tá»‰nh PhĂº YĂªn) nÄƒm 2023.</h3>
					</div>
				</div>
			</div>

			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage owl-lazy"
							data-src="images/6111.png" style="object-fit: contain;" alt=""> </img></a>
					<div class="desc">
						
						<h3>Tá»•ng BiĂªn táº­p BĂ¡o HĂ  Giang Nguyá»…n Trung Thu trao quĂ  cho há»™ nghĂ¨o cĂ¡c xĂ£ biĂªn giá»›i á»Ÿ XĂ­n Máº§n 
                        trong chÆ°Æ¡ng trĂ¬nh "Xuáº¥n biĂªn cÆ°Æ¡ng, áº¥m lĂ²ng dĂ¢n báº£n" nÄƒm 2024.  - Chá»¯ XuĂ¢n</h3>
					</div>
				</div>
			</div>

			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage owl-lazy" data-src="images/4.png"
							style="object-fit: contain;" alt="images/4.png"> </img></a>
					<div class="desc">
						
						<h3>PhĂ³ Tá»•ng BiĂªn táº­p Mai Ngá»c Quá»³nh trao cĂ¢y giá»‘ng cho há»™ nghĂ¨o xĂ£ Sá»§ng ChĂ¡ng (YĂªn Minh)
							cáº£i táº¡o vÆ°á»n táº¡p. </h3>
					</div>
				</div>
			</div>

			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage owl-lazy" data-src="images/moi.png"
							style="object-fit: contain;" alt="images/moi.png"> </img></a>
					<div class="desc">
						
						<h3></h3>
					</div>
				</div>
			</div>

			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage owl-lazy"
							data-src="images/01_1.png" style="object-fit: contain;" alt="PhĂ³ Tá»•ng BiĂªn táº­p BĂ¡o HĂ  Giang Nguyá»…n
							BĂ¬nh Minh táº·ng quĂ  cho há»™ nghĂ¨o xĂ£ LÅ©ng
							PĂ¹, huyá»‡n MĂ¨o Váº¡c."> </img></a>
					<div class="desc">
						
						<h3>PhĂ³ Tá»•ng BiĂªn táº­p BĂ¡o HĂ  Giang Nguyá»…n
							BĂ¬nh Minh táº·ng quĂ  cho há»™ nghĂ¨o xĂ£ LÅ©ng
							PĂ¹, huyá»‡n MĂ¨o Váº¡c.</h3>
					</div>
				</div>
			</div>

			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage owl-lazy"
							data-src="images/DSC_6642.png" style="object-fit: contain;" alt=""> </img></a>
					<div class="desc">
						<h3>LĂ£nh Ä‘áº¡o vĂ  cĂ¡n bá»™ BĂ¡o HĂ  Giang thÄƒm há»™ nghĂ¨o xĂ£ Páº£i Lá»§ng (MĂ¨o Váº¡c) nÄƒm 2018. </h3>
					</div>
				</div>
			</div>

			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage owl-lazy"
							data-src="images/1 T59.png" style="object-fit: contain;" alt="Tá»•ng BiĂªn táº­p BĂ¡o HĂ  Giang Nguyá»…n Trung Thu cĂ¹ng cĂ¡c Ä‘áº¡i biá»ƒu cáº¯t bÄƒng khĂ¡nh thĂ nh
							Ä‘iá»ƒm trÆ°á»ng Máº§m non La ChĂ­ Cháº£i, xĂ£ NĂ n Ma (huyá»‡n XĂ­n Máº§n) do BĂ¡o HĂ  Giang kĂªu gá»i
							há»— trá»£ xĂ¢y dá»±ng (nÄƒm 2022). "> </img></a>
					<div class="desc">
						<h3>Tá»•ng BiĂªn táº­p BĂ¡o HĂ  Giang Nguyá»…n Trung Thu cĂ¹ng cĂ¡c Ä‘áº¡i biá»ƒu cáº¯t bÄƒng khĂ¡nh thĂ nh
							Ä‘iá»ƒm trÆ°á»ng Máº§m non La ChĂ­ Cháº£i, xĂ£ NĂ n Ma (huyá»‡n XĂ­n Máº§n) do BĂ¡o HĂ  Giang kĂªu gá»i
							há»— trá»£ xĂ¢y dá»±ng (nÄƒm 2022). </h3>
					</div>
				</div>
			</div>

			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage owl-lazy"
							data-src="images/5 T59.png" style="object-fit: contain;" alt="Táº·ng quĂ  Táº¿t cho há»™ nghĂ¨o xĂ£ Sá»§ng
							ChĂ¡ng (YĂªn Minh) nhĂ¢n dá»‹p
							XuĂ¢n GiĂ¡p ThĂ¬n
							nÄƒm 2024."> </img></a>
					<div class="desc">
						<h3>Táº·ng quĂ  Táº¿t cho há»™ nghĂ¨o xĂ£ Sá»§ng
							ChĂ¡ng (YĂªn Minh) nhĂ¢n dá»‹p
							XuĂ¢n GiĂ¡p ThĂ¬n
							nÄƒm 2024.</h3>
					</div>
				</div>
			</div>

			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage"
							src="images/2 T59.png" style="object-fit: contain;" alt="BĂ¡o HĂ  Giang váº­n Ä‘á»™ng, káº¿t ná»‘i cĂ¡c nhĂ  háº£o
							tĂ¢m táº·ng quĂ  cho Äiá»ƒm TrÆ°á»ng Máº§m non vĂ 
							Tiá»ƒu há»c Táº£ Lá»§ng (MĂ¨o Váº¡c)."> </img></a>
					<div class="desc">
						<h3>BĂ¡o HĂ  Giang váº­n Ä‘á»™ng, káº¿t ná»‘i cĂ¡c nhĂ  háº£o
							tĂ¢m táº·ng quĂ  cho Äiá»ƒm TrÆ°á»ng Máº§m non vĂ 
							Tiá»ƒu há»c Táº£ Lá»§ng (MĂ¨o Váº¡c).</h3>
					</div>
				</div>
			</div>

		</div>
	</div>
</div>
`;
    $(".motsohoatdong .showImage6").on("click", () => {
      if ($("#customModal6").length <= 0) {
        const modalContainer = document.createElement("div");
        modalContainer.innerHTML = motsohoatdongContent;
        document.body.appendChild(modalContainer);
      }

      $("#customModal6").show();
      if ($("#customModal6 .owl-carousel").length <= 0) {
        $("#customModal6 .myCarousel").owlCarousel({
          animateOut: "fadeOut",
          animateIn: "fadeIn",
          autoplay: true,
          loop: true,
          margin: 0,
          nav: true,
          dots: false,
          autoHeight: true,
          lazyLoad: true,
          responsive: {
            0: {
              items: 1,
            },
            600: {
              items: 1,
            },
            1000: {
              items: 1,
            },
          },
          navText: [
            "<i class='icon-arrow-left3 owl-direction'></i>",
            "<i class='icon-arrow-right3 owl-direction'></i>",
          ],
        });
      }

      $("#customModal6 .closeModal").on("click", () => {
        $("#customModal6").hide();
      });
    });

    let soluocContent = `<div id="customModal1" class="modal">
		<span class="closeModal">Ă—</span>
		<div class="body">
			<div class="box-img myCarousel">
				<!-- 0 -->
				<div class="item active">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage2"
								src="images/t8 sua.png" alt="THá»œI Ká»² 1964 - 1976"> </img></a>
						<div class="desc" style="text-align: center;">
							<!-- <span class="meta">15, Feb 2018</span> -->
							<h2><a>THá»œI Ká»² 1964 - 1976</a></h2>
						</div>
					</div>
				</div>
				<!-- 1 -->
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage2 owl-lazy"
								data-src="images/t9 sua.png" alt="THá»œI Ká»² 1976 - 1991"> </img></a>
						<div class="desc" style="text-align: center;">
							<!-- <span class="meta">15, Feb 2018</span> -->
							<h2><a>THá»œI Ká»² 1976 - 1991</a></h2>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage2 owl-lazy"
								data-src="images/t10 sua.png" alt="THá»œI Ká»² 1976 - 1991"> </img></a>
						<div class="desc" style="text-align: center;">
							<!-- <span class="meta">15, Feb 2018</span> -->
							<h2><a>THá»œI Ká»² 1976 - 1991</a></h2>
						</div>
					</div>
				</div>
				<!-- 3 -->
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage2 owl-lazy"
								data-src="images/T11 SUA.png" alt="THá»œI Ká»² 1991 - NAY"> </img></a>
						<div class="desc" style="text-align: center;">
							<!-- <span class="meta">15, Feb 2018</span> -->
							<h2><a>THá»œI Ká»² 1991 - NAY</a></h2>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage2 owl-lazy"
								data-src="images/T12 SUA.png" alt="THá»œI Ká»² 1991 - NAY"> </img></a>
						<div class="desc" style="text-align: center;">
							<!-- <span class="meta">15, Feb 2018</span> -->
							<h2><a>THá»œI Ká»² 1991 - NAY</a></h2>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage2 owl-lazy" data-src="images/6.png"
								alt="THá»œI Ká»² 1991 - NAY"> </img></a>
						<div class="desc" style="text-align: center;">
							<!-- <span class="meta">15, Feb 2018</span> -->
							<h2><a>THá»œI Ká»² 1991 - NAY</a></h2>
						</div>
					</div>
				</div>
				<!-- 6 -->
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage2 owl-lazy"
								data-src="images/1 To tin nam 1959.png" alt="áº¤N PHáº¨M BĂO HĂ€ GIANG QUA CĂC THá»œI Ká»²">
							</img></a>
						<div class="desc" style="text-align: center;">
							<!-- <span class="meta">15, Feb 2018</span> -->
							<h2><a>áº¤N PHáº¨M BĂO HĂ€ GIANG QUA CĂC THá»œI Ká»²</a></h2>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage2 owl-lazy"
								data-src="images/2 To tin Xuan Tan Suu 1961.png"
								alt="áº¤N PHáº¨M BĂO HĂ€ GIANG QUA CĂC THá»œI Ká»²"> </img></a>
						<div class="desc" style="text-align: center;">
							<!-- <span class="meta">15, Feb 2018</span> -->
							<h2><a>áº¤N PHáº¨M BĂO HĂ€ GIANG QUA CĂC THá»œI Ká»²</a></h2>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage2 owl-lazy"
								data-src="images/6 So bao dau tien sau chia tach Bao HaTuyen.png"
								alt="áº¤N PHáº¨M BĂO HĂ€ GIANG QUA CĂC THá»œI Ká»²"> </img></a>
						<div class="desc" style="text-align: center;">
							<!-- <span class="meta">15, Feb 2018</span> -->
							<h2><a>áº¤N PHáº¨M BĂO HĂ€ GIANG QUA CĂC THá»œI Ká»²</a></h2>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage2 owl-lazy"
								data-src="images/5 To Ha Tuyen nam 1991.png" alt="áº¤N PHáº¨M BĂO HĂ€ GIANG QUA CĂC THá»œI Ká»²">
							</img></a>
						<div class="desc" style="text-align: center;">
							<!-- <span class="meta">15, Feb 2018</span> -->
							<h2><a>áº¤N PHáº¨M BĂO HĂ€ GIANG QUA CĂC THá»œI Ká»²</a></h2>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage2 owl-lazy" data-src="images/111.png"
								alt="áº¤N PHáº¨M BĂO HĂ€ GIANG QUA CĂC THá»œI Ká»²">
							</img></a>
						<div class="desc" style="text-align: center;">
							<!-- <span class="meta">15, Feb 2018</span> -->
							<h2><a>áº¤N PHáº¨M BĂO HĂ€ GIANG QUA CĂC THá»œI Ká»²</a></h2>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage2 owl-lazy"
								data-src="images/4 So Xuan Mau Than 1968.png"
								alt="áº¤N PHáº¨M BĂO HĂ€ GIANG QUA CĂC THá»œI Ká»²"> </img></a>
						<div class="desc" style="text-align: center;">
							<!-- <span class="meta">15, Feb 2018</span> -->
							<h2><a>áº¤N PHáº¨M BĂO HĂ€ GIANG QUA CĂC THá»œI Ká»²</a></h2>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage2 owl-lazy"
								data-src="images/6 So bao dau tien sau chia tach Bao HaTuyen.png"
								alt="áº¤N PHáº¨M BĂO HĂ€ GIANG QUA CĂC THá»œI Ká»²"> </img></a>
						<div class="desc" style="text-align: center;">
							<!-- <span class="meta">15, Feb 2018</span> -->
							<h2><a>áº¤N PHáº¨M BĂO HĂ€ GIANG QUA CĂC THá»œI Ká»²</a></h2>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage2 owl-lazy"
								data-src="images/7 So bao Ha Giang in mau dau tien (1.4.png"
								alt="áº¤N PHáº¨M BĂO HĂ€ GIANG QUA CĂC THá»œI Ká»²"> </img></a>
						<div class="desc" style="text-align: center;">
							<!-- <span class="meta">15, Feb 2018</span> -->
							<h2><a>áº¤N PHáº¨M BĂO HĂ€ GIANG QUA CĂC THá»œI Ká»²</a></h2>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage2"
								src="images/9 Giao dien bao Ha Giang dien tu.png"
								alt="áº¤N PHáº¨M BĂO HĂ€ GIANG QUA CĂC THá»œI Ká»²"> </img></a>
						<div class="desc" style="text-align: center;">
							<!-- <span class="meta">15, Feb 2018</span> -->
							<h2><a>áº¤N PHáº¨M BĂO HĂ€ GIANG QUA CĂC THá»œI Ká»²</a></h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>`;
    $(".soluocthoiki .article").on("click", () => {
      if ($("#customModal1").length <= 0) {
        const modalContainer = document.createElement("div");
        modalContainer.innerHTML = soluocContent;
        document.body.appendChild(modalContainer);
      }

      $("#customModal1").show();

      if ($("#customModal1 .owl-carousel").length <= 0) {
        $("#customModal1 .myCarousel").owlCarousel({
          animateOut: "fadeOut",
          animateIn: "fadeIn",
          autoplay: true,
          loop: true,
          margin: 0,
          nav: true,
          dots: false,
          autoHeight: true,
          lazyLoad: true,
          responsive: {
            0: {
              items: 1,
            },
            600: {
              items: 1,
            },
            1000: {
              items: 1,
            },
          },
          navText: [
            "<i class='icon-arrow-left3 owl-direction'></i>",
            "<i class='icon-arrow-right3 owl-direction'></i>",
          ],
        });
      }

      $("#customModal1 .closeModal").on("click", () => {
        $("#customModal1").hide();
      });
    });

    let lanhdaotrunguongContent = `<div id="customModal2" class="modal">
		<span class="closeModal">Ă—</span>
		<div class="body">
			<div class="box-img myCarousel">
				<div class="item">
	
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage1"
								src="images/1a.png" style="object-fit: contain;"
								alt="Tá»•ng BĂ­ thÆ° Nguyá»…n VÄƒn Linh vá»›i cĂ¡c nhĂ  bĂ¡o.">
							</img></a>
						<div class="desc">
							<h3>Tá»•ng BĂ­ thÆ° Nguyá»…n VÄƒn Linh vá»›i cĂ¡c nhĂ  bĂ¡o.</h3>
							<p></p>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage1 owl-lazy"
								data-src="images/2a.png" style="object-fit: contain;"
								alt="Tá»•ng BĂ­ thÆ° Äá»— MÆ°á»i vá»›i nhá»¯ng ngÆ°á»i lĂ m bĂ¡o HĂ  Giang."> </img></a>
						<div class="desc">
							<!-- <span class="meta">NÄƒm 1995</span> -->
							<h3>Tá»•ng BĂ­ thÆ° Äá»— MÆ°á»i vá»›i nhá»¯ng ngÆ°á»i lĂ m bĂ¡o HĂ  Giang.</h3>
							<p></p>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage1 owl-lazy"
								data-src="images/3a.png" style="object-fit: contain;" alt="Tá»•ng BĂ­ thÆ° LĂª Kháº£
										PhiĂªu Ä‘á»c BĂ¡o HĂ 
										Giang."> </img></a>
						<div class="desc">
							<!-- <span class="meta">NÄƒm 1999</span> -->
							<h3>Tá»•ng BĂ­ thÆ° LĂª Kháº£ PhiĂªu Ä‘á»c BĂ¡o HĂ  Giang.</h3>
							<p></p>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage1 owl-lazy"
								data-src="images/4a.png" style="object-fit: contain;"
								alt="Chá»§ tá»‹ch Quá»‘c há»™i NĂ´ng Äá»©c Máº¡nh chá»¥p áº£nh cĂ¹ng nhá»¯ng ngÆ°á»i lĂ m bĂ¡o tá»‰nh.">
							</img></a>
						<div class="desc">
							<!-- <span class="meta">NÄƒm 1996</span> -->
							<h3>Chá»§ tá»‹ch Quá»‘c há»™i NĂ´ng Äá»©c Máº¡nh chá»¥p áº£nh cĂ¹ng nhá»¯ng ngÆ°á»i lĂ m bĂ¡o tá»‰nh.</h3>
							<p></p>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage1 owl-lazy"
								data-src="images/5a.png" style="object-fit: contain;" alt="Chá»§ tá»‹ch nÆ°á»›c Tráº§n Äá»©c LÆ°Æ¡ng vá»›i cĂ¡c nhĂ  bĂ¡o
										táº¡i Cá»™t cá» Quá»‘c gia LÅ©ng CĂº (Äá»“ng VÄƒn)."> </img></a>
						<div class="desc">
							<!-- <span class="meta">NÄƒm 2001</span> -->
							<h3>Chá»§ tá»‹ch nÆ°á»›c Tráº§n Äá»©c LÆ°Æ¡ng vá»›i cĂ¡c nhĂ  bĂ¡o táº¡i Cá»™t cá» Quá»‘c gia LÅ©ng CĂº (Äá»“ng
								VÄƒn).</h3>
							<p></p>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage1 owl-lazy"
								data-src="images/6a.png" style="object-fit: contain;"
								alt="Chá»§ tá»‹ch Quá»‘c há»™i Nguyá»…n VÄƒn An cĂ¹ng vá»›i cĂ¡c nhĂ  bĂ¡o."> </img></a>
						<div class="desc">
							<!-- <span class="meta"></span> -->
							<h3>Chá»§ tá»‹ch Quá»‘c há»™i Nguyá»…n VÄƒn An cĂ¹ng vá»›i cĂ¡c nhĂ  bĂ¡o.</h3>
							<p></p>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage1 owl-lazy"
								data-src="images/7a.png" style="object-fit: contain;" alt="Chá»§ tá»‹ch nÆ°á»›c TrÆ°Æ¡ng Táº¥n Sang vá»›i cĂ¡c phĂ³ng viĂªn BĂ¡o HĂ  Giang, ÄĂ i PTTH tá»‰nh,
										TTXVN."> </img></a>
						<div class="desc">
							<!-- <span class="meta">NÄƒm 2013</span> -->
							<h3>Chá»§ tá»‹ch nÆ°á»›c TrÆ°Æ¡ng Táº¥n Sang vá»›i cĂ¡c phĂ³ng viĂªn BĂ¡o HĂ  Giang, ÄĂ i PTTH tá»‰nh,
								TTXVN.</h3>
							<p></p>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage1 owl-lazy"
								data-src="images/8a.png" style="object-fit: contain;" alt="Thá»§ tÆ°á»›ng ChĂ­nh phá»§ Nguyá»…n Táº¥n DÅ©ng
										Ä‘á»c BĂ¡o HĂ  Giang."> </img></a>
						<div class="desc">
							<!-- <span class="meta">NÄƒm 2013</span> -->
							<h3>Thá»§ tÆ°á»›ng ChĂ­nh phá»§ Nguyá»…n Táº¥n DÅ©ng Ä‘á»c BĂ¡o HĂ  Giang.</h3>
							<p></p>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage1 owl-lazy"
								data-src="images/9a.png" style="object-fit: contain;" alt="CĂ¡c Ä‘á»“ng chĂ­ lĂ£nh Ä‘áº¡o Äáº£ng, nhĂ  nÆ°á»›c thÄƒm gian
										trÆ°ng bĂ y áº¥n pháº©m bĂ¡o XuĂ¢n cá»§a BĂ¡o HĂ  Giang,
										TuyĂªn Quang, YĂªn BĂ¡i táº¡i Há»™i bĂ¡o XuĂ¢n toĂ n
										quá»‘c."> </img></a>
						<div class="desc">
							<!-- <span class="meta">NÄƒm 2017</span> -->
							<h3>CĂ¡c Ä‘á»“ng chĂ­ lĂ£nh Ä‘áº¡o Äáº£ng, nhĂ  nÆ°á»›c thÄƒm gian trÆ°ng bĂ y áº¥n pháº©m bĂ¡o XuĂ¢n cá»§a
								BĂ¡o HĂ  Giang, TuyĂªn Quang, YĂªn BĂ¡i táº¡i Há»™i bĂ¡o XuĂ¢n toĂ n quá»‘c.</h3>
							<p></p>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage1 owl-lazy"
								data-src="images/10a.png" style="object-fit: contain;" alt="CĂ¡c Ä‘á»“ng chĂ­ lĂ£nh Ä‘áº¡o Äáº£ng, NhĂ  nÆ°á»›c thÄƒm gian trÆ°ng bĂ y bĂ¡o XuĂ¢n cá»§a BĂ¡o HĂ 
										Giang táº¡i Há»™i bĂ¡o XuĂ¢n toĂ n quá»‘c."> </img></a>
						<div class="desc">
							<!-- <span class="meta">NÄƒm 2017</span> -->
							<h3>CĂ¡c Ä‘á»“ng chĂ­ lĂ£nh Ä‘áº¡o Äáº£ng, NhĂ  nÆ°á»›c thÄƒm gian trÆ°ng bĂ y bĂ¡o XuĂ¢n cá»§a BĂ¡o HĂ 
								Giang táº¡i Há»™i bĂ¡o XuĂ¢n toĂ n quá»‘c.</h3>
							<p></p>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage1 owl-lazy"
								data-src="images/11a.png" style="object-fit: contain;" alt="Äá»“ng chĂ­ Há»“ng Vinh, Tá»•ng BiĂªn táº­p BĂ¡o NhĂ¢n dĂ¢n, Chá»§ tá»‹ch Há»™i NhĂ  bĂ¡o Viá»‡t Nam
										cĂ¹ng vá»›i nhá»¯ng ngÆ°á»i lĂ m bĂ¡o HĂ  Giang."> </img></a>
						<div class="desc">
							<!-- <span class="meta">NÄƒm 2000</span> -->
							<h3>Äá»“ng chĂ­ Há»“ng Vinh, Tá»•ng BiĂªn táº­p BĂ¡o NhĂ¢n dĂ¢n, Chá»§ tá»‹ch Há»™i NhĂ  bĂ¡o Viá»‡t Nam
								cĂ¹ng vá»›i nhá»¯ng ngÆ°á»i lĂ m bĂ¡o HĂ  Giang.</h3>
							<p></p>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage1 owl-lazy"
								data-src="images/12a.png" style="object-fit: contain;" alt="Äá»“ng chĂ­ Äinh Tháº¿ Huynh, Tá»•ng biĂªn táº­p BĂ¡o NhĂ¢n dĂ¢n
										chá»¥p áº£nh cĂ¹ng cĂ¡n bá»™, phĂ²ng viĂªn, biĂªn táº­p viĂªn BĂ¡o HĂ  Giang."> </img></a>
						<div class="desc">
							<!-- <span class="meta">NÄƒm 2005</span> -->
							<h3>Äá»“ng chĂ­ Äinh Tháº¿ Huynh, Tá»•ng biĂªn táº­p BĂ¡o NhĂ¢n dĂ¢n chá»¥p áº£nh cĂ¹ng cĂ¡n bá»™, phĂ²ng
								viĂªn, biĂªn táº­p viĂªn BĂ¡o HĂ  Giang.</h3>
							<p></p>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage1 owl-lazy"
								data-src="images/13a.png" style="object-fit: contain;" alt="Thá»© trÆ°á»Ÿng Bá»™ ThĂ´ng tin - Truyá»n thĂ´ngÄá»— QuĂ½ DoĂ£n
										phĂ¡t biá»ƒu táº¡i buá»•i lĂ m viá»‡c vá»›i BĂ¡o HĂ  Giang."> </img></a>
						<div class="desc">
							<!-- <span class="meta">NÄƒm 2011</span> -->
							<h3>Thá»© trÆ°á»Ÿng Bá»™ ThĂ´ng tin - Truyá»n thĂ´ngÄá»— QuĂ½ DoĂ£n phĂ¡t biá»ƒu táº¡i buá»•i lĂ m viá»‡c
								vá»›i BĂ¡o HĂ  Giang.</h3>
							<p></p>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage1 owl-lazy"
								data-src="images/TONG BIEN TAP BAO NHAN DAN 2.png" style="object-fit: contain;" alt="PhĂ³ TrÆ°á»Ÿng ban TuyĂªn giĂ¡o T.Æ¯, Tá»•ng BiĂªn táº­p BĂ¡o NhĂ¢n DĂ¢n,
										Chá»§ tá»‹chHá»™iNhĂ  bĂ¡oViá»‡tNam LĂª Quá»‘c Minh thÄƒm, lĂ m viá»‡c vá»›i BĂ¡o HĂ  Giang."> </img></a>
						<div class="desc">
							<!-- <span class="meta">NÄƒm 2021</span> -->
							<h3>PhĂ³ TrÆ°á»Ÿng ban TuyĂªn giĂ¡o T.Æ¯, Tá»•ng BiĂªn táº­p BĂ¡o NhĂ¢n DĂ¢n, Chá»§ tá»‹chHá»™iNhĂ 
								bĂ¡oViá»‡tNam LĂª Quá»‘c Minh thÄƒm, lĂ m viá»‡c vá»›i BĂ¡o HĂ  Giang.</h3>
							<p></p>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage1 owl-lazy"
								data-src="images/TONG BIEN TAP BAO NHAN DAN 1.png" style="object-fit: contain;" alt="PhĂ³ TrÆ°á»Ÿng ban TuyĂªn
										giĂ¡o T.Æ¯, Tá»•ng BiĂªn
										táº­p BĂ¡o NhĂ¢n DĂ¢n,
										Chá»§ tá»‹ch Há»™i NhĂ  bĂ¡o
										Viá»‡t Nam LĂª Quá»‘c
										Minh Ä‘á»c bĂ¡o HĂ  Giang."> </img></a>
						<div class="desc">
							<!-- <span class="meta">NÄƒm 2021</span> -->
							<h3>PhĂ³ TrÆ°á»Ÿng ban TuyĂªn giĂ¡o T.Æ¯, Tá»•ng BiĂªn táº­p BĂ¡o NhĂ¢n DĂ¢n, Chá»§ tá»‹ch Há»™i NhĂ  bĂ¡o
								Viá»‡t Nam LĂª Quá»‘c Minh Ä‘á»c bĂ¡o HĂ  Giang.</h3>
							<p></p>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage1 owl-lazy"
								data-src="images/PHO CHU NHIEM UBTC1.png" style="object-fit: contain;" alt="PhĂ³ Chá»§ nhiá»‡m á»¦y ban TĂ i chĂ­nh, NgĂ¢n sĂ¡ch cá»§a Quá»‘c há»™i (khĂ³a XV) Pháº¡m ThĂºy Chinh
										phĂ¡t biá»ƒu táº¡i buá»•i thÄƒm, chĂºc Táº¿t táº­p thá»ƒ lĂ£nh Ä‘áº¡o, cĂ¡n bá»™, phĂ³ng viĂªn,
										biĂªn táº­p viĂªn BĂ¡o HĂ  Giang."> </img></a>
						<div class="desc">
							<!-- <span class="meta">NÄƒm 2024</span> -->
							<h3>PhĂ³ Chá»§ nhiá»‡m á»¦y ban TĂ i chĂ­nh, NgĂ¢n sĂ¡ch cá»§a Quá»‘c há»™i (khĂ³a XV) Pháº¡m ThĂºy Chinh
								phĂ¡t biá»ƒu táº¡i buá»•i thÄƒm, chĂºc Táº¿t táº­p thá»ƒ lĂ£nh Ä‘áº¡o, cĂ¡n bá»™, phĂ³ng viĂªn, biĂªn táº­p
								viĂªn BĂ¡o HĂ  Giang.</h3>
							<p></p>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage1"
								src="images/PHO CHU NHIEM UBTC2.png" style="object-fit: contain;" alt="PhĂ³ Chá»§ nhiá»‡m á»¦y ban TĂ i chĂ­nh, NgĂ¢n sĂ¡ch cá»§a Quá»‘c há»™i (khĂ³a XV) Pháº¡m ThĂºy Chinh
										táº·ng quĂ , chĂºc Táº¿t táº­p thá»ƒ lĂ£nh Ä‘áº¡o, cĂ¡n bá»™, phĂ³ng viĂªn, biĂªn táº­p viĂªn BĂ¡o HĂ 
										Giang."> </img></a>
						<div class="desc">
							<!-- <span class="meta">NÄƒm 2024</span> -->
							<h3>PhĂ³ Chá»§ nhiá»‡m á»¦y ban TĂ i chĂ­nh, NgĂ¢n sĂ¡ch cá»§a Quá»‘c há»™i (khĂ³a XV) Pháº¡m ThĂºy Chinh
								táº·ng quĂ , chĂºc Táº¿t táº­p thá»ƒ lĂ£nh Ä‘áº¡o, cĂ¡n bá»™, phĂ³ng viĂªn, biĂªn táº­p viĂªn BĂ¡o HĂ 
								Giang.</h3>
							<p></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	
	</div>
	`;

    $(".lanhdaotrunguong .article").on("click", () => {
      if ($("#customModal2").length <= 0) {
        const modalContainer = document.createElement("div");
        modalContainer.innerHTML = lanhdaotrunguongContent;
        document.body.appendChild(modalContainer);
      }
      $("#customModal2").show();
      if ($("#customModal2 .owl-carousel").length <= 0) {
        $("#customModal2 .myCarousel").owlCarousel({
          animateOut: "fadeOut",
          animateIn: "fadeIn",
          loop: true,
          margin: 0,
          nav: true,
          dots: false,
          autoHeight: true,
          lazyLoad: true,
          responsive: {
            0: {
              items: 1,
            },
            600: {
              items: 1,
            },
            1000: {
              items: 1,
            },
          },
          navText: [
            "<i class='icon-arrow-left3 owl-direction'></i>",
            "<i class='icon-arrow-right3 owl-direction'></i>",
          ],
        });
      }

      $("#customModal2 .closeModal").on("click", () => {
        $("#customModal2").hide();
      });
    });

    let banbientapContent = `<div id="customModal3" class="modal">
		<span class="closeModal">Ă—</span>
		<div class="body">
			<div class="box-img myCarousel">
				<div class="item active">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage3"
								src="images/0b1d951d2b8087dede91.png" alt="Tá»”NG BIĂN Táº¬P">
							</img></a>
						<div class="desc" style="text-align: center;">
							<!-- <span class="meta">15, Feb 2018</span> -->
							<h2><a>Tá»”NG BIĂN Táº¬P</a></h2>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage3 owl-lazy"
								data-src="images/BINH MINH.png" alt="PHĂ“ Tá»”NG BIĂN Táº¬P"> </img></a>
						<div class="desc" style="text-align: center;">
							<h2><a>PHĂ“ Tá»”NG BIĂN Táº¬P</a></h2>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage3 owl-lazy"
								data-src="images/404fb2f70d6aa134f87b.png" alt="PHĂ“ Tá»”NG BIĂN Táº¬P">
							</img></a>
						<div class="desc" style="text-align: center;">
							<h2><a>PHĂ“ Tá»”NG BIĂN Táº¬P</a></h2>
						</div>
					</div>
				</div>
				<!-- 3 -->
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage3 owl-lazy"
								data-src="images/TAP THE PHONG.png" alt="PHĂ’NG PHĂ“NG VIĂN">
							</img></a>
						<div class="desc" style="text-align: center;">
							<h2><a>PHĂ’NG PHĂ“NG VIĂN</a></h2>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage3 owl-lazy"
								data-src="images/23a.png" alt="PHĂ’NG PHĂ“NG VIĂN"> </img></a>
						<div class="desc" style="text-align: center;">
							<h2><a>PHĂ’NG PHĂ“NG VIĂN</a></h2>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage3 owl-lazy"
								data-src="images/PHUONG TIEN.png" alt="PHĂ’NG PHĂ“NG VIĂN"> </img></a>
						<div class="desc" style="text-align: center;">
							<h2><a>PHĂ’NG PHĂ“NG VIĂN</a></h2>
						</div>
					</div>
				</div>
				<!-- 6 -->
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage3 owl-lazy"
								data-src="images/IMG_2621.png" alt="PHĂ’NG THÆ¯ KĂ - XUáº¤T Báº¢N">
							</img></a>
						<div class="desc" style="text-align: center;">
							<h2><a>PHĂ’NG THÆ¯ KĂ - XUáº¤T Báº¢N</a></h2>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage3 owl-lazy"
								data-src="images/IMG_2581.png" alt="PHĂ’NG THÆ¯ KĂ - XUáº¤T Báº¢N">
							</img></a>
						<div class="desc" style="text-align: center;">
							<h2><a>PHĂ’NG THÆ¯ KĂ - XUáº¤T Báº¢N</a></h2>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage3 owl-lazy"
								data-src="images/IMG_2591.png" alt="PHĂ’NG THÆ¯ KĂ - XUáº¤T Báº¢N">
							</img></a>
						<div class="desc" style="text-align: center;">
							<h2><a>PHĂ’NG THÆ¯ KĂ - XUáº¤T Báº¢N</a></h2>
						</div>
					</div>
				</div>
				<!-- 9 -->
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage3 owl-lazy"
								data-src="images/f2db91b6cd13614d3802.png" alt="PHĂ’NG BĂO ÄIá»†N Tá»¬">
							</img></a>
						<div class="desc" style="text-align: center;">
							<h2><a>PHĂ’NG BĂO ÄIá»†N Tá»¬</a></h2>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage3 owl-lazy"
								data-src="images/ec99220ab99015ce4c81.png" alt="PHĂ’NG BĂO ÄIá»†N Tá»¬">
							</img></a>
						<div class="desc" style="text-align: center;">
							<h2><a>PHĂ’NG BĂO ÄIá»†N Tá»¬</a></h2>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage3 owl-lazy"
								data-src="images/QUANG NAM.png" alt="PHĂ’NG BĂO ÄIá»†N Tá»¬"> </img></a>
						<div class="desc" style="text-align: center;">
							<h2><a>PHĂ’NG BĂO ÄIá»†N Tá»¬</a></h2>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage3 owl-lazy"
								data-src="images/cfecaa7231e89db6c4f9.png" alt="PHĂ’NG BĂO ÄIá»†N Tá»¬">
							</img></a>
						<div class="desc" style="text-align: center;">
							<h2><a>PHĂ’NG BĂO ÄIá»†N Tá»¬</a></h2>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage3 owl-lazy"
								data-src="images/KHACH MOI.png" alt="PHĂ’NG BĂO ÄIá»†N Tá»¬"> </img></a>
						<div class="desc" style="text-align: center;">
							<h2><a>PHĂ’NG BĂO ÄIá»†N Tá»¬</a></h2>
						</div>
					</div>
				</div>
				<!-- 14 -->
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage3 owl-lazy"
								data-src="images/PHONG HANH CHINH HIEN NAY.png" alt="PHĂ’NG HĂ€NH CHĂNH - TRá» Sá»°">
							</img></a>
						<div class="desc" style="text-align: center;">
							<h2><a>PHĂ’NG HĂ€NH CHĂNH - TRá» Sá»°</a></h2>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage3 owl-lazy"
								data-src="images/1NU CONG.png" alt="PHĂ’NG HĂ€NH CHĂNH - TRá» Sá»°">
							</img></a>
						<div class="desc" style="text-align: center;">
							<h2><a>PHĂ’NG HĂ€NH CHĂNH - TRá» Sá»°</a></h2>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage3 owl-lazy"
								data-src="images/1D1A0243.png" alt="PHĂ’NG HĂ€NH CHĂNH - TRá» Sá»°">
							</img></a>
						<div class="desc" style="text-align: center;">
							<h2><a>PHĂ’NG HĂ€NH CHĂNH - TRá» Sá»°</a></h2>
						</div>
					</div>
				</div>
				<!-- 17 -->
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage3 owl-lazy"
								data-src="images/BD2.png" alt="PHĂ’NG Báº N Äá»ŒC - THÆ¯ VIá»†N - TÆ¯ LIá»†U">
							</img></a>
						<div class="desc" style="text-align: center;">
							<h2><a>PHĂ’NG Báº N Äá»ŒC - THÆ¯ VIá»†N - TÆ¯ LIá»†U</a></h2>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage3 owl-lazy"
								data-src="images/BD 5.png" alt="PHĂ’NG Báº N Äá»ŒC - THÆ¯ VIá»†N - TÆ¯ LIá»†U">
							</img></a>
						<div class="desc" style="text-align: center;">
							<h2><a>PHĂ’NG Báº N Äá»ŒC - THÆ¯ VIá»†N - TÆ¯ LIá»†U</a></h2>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage3 owl-lazy"
								data-src="images/BD 4.png" alt="PHĂ’NG Báº N Äá»ŒC - THÆ¯ VIá»†N - TÆ¯ LIá»†U">
							</img></a>
						<div class="desc" style="text-align: center;">
							<h2><a>PHĂ’NG Báº N Äá»ŒC - THÆ¯ VIá»†N - TÆ¯ LIá»†U</a></h2>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage3 owl-lazy"
								data-src="images/BD1.png" alt="PHĂ’NG Báº N Äá»ŒC - THÆ¯ VIá»†N - TÆ¯ LIá»†U">
							</img></a>
						<div class="desc" style="text-align: center;">
							<h2><a>PHĂ’NG Báº N Äá»ŒC - THÆ¯ VIá»†N - TÆ¯ LIá»†U</a></h2>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage3"
								src="images/BD 3.png" alt="PHĂ’NG Báº N Äá»ŒC - THÆ¯ VIá»†N - TÆ¯ LIá»†U">
							</img></a>
						<div class="desc" style="text-align: center;">
							<h2><a>PHĂ’NG Báº N Äá»ŒC - THÆ¯ VIá»†N - TÆ¯ LIá»†U</a></h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>`;

    $(".banbientap .article").on("click", () => {
      if ($("#customModa3").length <= 0) {
        const modalContainer = document.createElement("div");
        modalContainer.innerHTML = banbientapContent;
        document.body.appendChild(modalContainer);
      }

      $("#customModal3").show();
      if ($("#customModal3 .owl-carousel").length <= 0) {
        $("#customModal3 .myCarousel").owlCarousel({
          animateOut: "fadeOut",
          animateIn: "fadeIn",
          autoplay: true,
          loop: true,
          margin: 0,
          nav: true,
          dots: false,
          autoHeight: true,
          lazyLoad: true,
          responsive: {
            0: {
              items: 1,
            },
            600: {
              items: 1,
            },
            1000: {
              items: 1,
            },
          },
          navText: [
            "<i class='icon-arrow-left3 owl-direction'></i>",
            "<i class='icon-arrow-right3 owl-direction'></i>",
          ],
        });
      }

      $("#customModal3 .closeModal").on("click", () => {
        $("#customModal3").hide();
      });
    });

    let lanhdaotinhContent = `<div id="customModal4" class="modal">
		<span class="closeModal">Ă—</span>
		<div class="body">
			<div class="box-img myCarousel">
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage " src="images/1.png"
								style="object-fit: contain;" alt="BĂ­ thÆ° Tá»‰nh á»§y HoĂ ng Thá»«a
										kĂ½ duyá»‡t MÄƒng - sĂ©t BĂ¡o HĂ  Giang
										sá»‘ Ä‘áº§u tiĂªnsau tĂ¡i láº­p tá»‰nh."> </img></a>
						<div class="desc">
							<!-- <span class="meta">NgĂ y 25.9.1991</span> -->
							<h3>BĂ­ thÆ° Tá»‰nh á»§y HoĂ ng Thá»«a kĂ½ duyá»‡t MÄƒng - sĂ©t BĂ¡o HĂ  Giang sá»‘ Ä‘áº§u tiĂªn sau tĂ¡i
								láº­p tá»‰nh.</h3>
							<p></p>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage owl-lazy" data-src="images/2a2.png"
								style="object-fit: contain;" alt="BĂ­ thÆ° Tá»‰nh á»§y VÅ© Ngá»c Ká»³ vá»›i lĂ£nh Ä‘áº¡o
										BĂ¡o HĂ  Giang táº¡i Há»™i BĂ¡o XuĂ¢n."> </img></a>
						<div class="desc">
							<!-- <span class="meta">NÄƒm 2003</span> -->
							<h3>BĂ­ thÆ° Tá»‰nh á»§y VÅ© Ngá»c Ká»³ vá»›i lĂ£nh Ä‘áº¡o BĂ¡o HĂ  Giang táº¡i Há»™i BĂ¡o XuĂ¢n.</h3>
							<p></p>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage owl-lazy" data-src="images/2a1.png"
								style="object-fit: contain;" alt="BĂ­ thÆ° Tá»‰nh á»§y VÅ© Ngá»c Ká»³ thÄƒm, táº·ng quĂ  cĂ¡n bá»™, cĂ´ng nhĂ¢n viĂªn
										BĂ¡o HĂ  Giang."> </img></a>
						<div class="desc">
							<!-- <span class="meta">ThĂ¡ng 2.1998</span> -->
							<h3>BĂ­ thÆ° Tá»‰nh á»§y VÅ© Ngá»c Ká»³ thÄƒm, táº·ng quĂ  cĂ¡n bá»™, cĂ´ng nhĂ¢n viĂªn BĂ¡o HĂ  Giang.
							</h3>
							<p></p>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage owl-lazy" data-src="images/7.png"
								style="object-fit: contain;" alt="PhĂ³ BĂ­ thÆ° Tá»‰nh á»§y, Chá»§ tá»‹ch HÄND tá»‰nh GiĂ ng VÄƒn
										Quáº©y thÄƒm, chĂºc má»«ng BĂ¡o HĂ  Giang nhĂ¢n ká»· niá»‡m 75
										nÄƒm NgĂ y BĂ¡o chĂ­ CĂ¡ch máº¡ng Viá»‡t Nam."> </img></a>
						<div class="desc">
							<!-- <span class="meta">NÄƒm 2000</span> -->
							<h3>PhĂ³ BĂ­ thÆ° Tá»‰nh á»§y, Chá»§ tá»‹ch HÄND tá»‰nh GiĂ ng VÄƒn Quáº©y thÄƒm, chĂºc má»«ng BĂ¡o HĂ 
								Giang nhĂ¢n ká»· niá»‡m 75 nÄƒm NgĂ y BĂ¡o chĂ­ CĂ¡ch máº¡ng Viá»‡t Nam.</h3>
							<p></p>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage owl-lazy" data-src="images/3.png"
								style="object-fit: contain;" alt="Äá»“ng chĂ­ Triá»‡u TĂ i Vinh,
										BĂ­ thÆ° Tá»‰nh á»§y trao HuĂ¢n chÆ°Æ¡ng
										Lao Ä‘á»™ng háº¡ng Nháº¥t cho
										BĂ¡o HĂ  Giang."> </img></a>
						<div class="desc">
							<!-- <span class="meta"> ThĂ¡ng 4.2014</span> -->
							<h3>Äá»“ng chĂ­ Triá»‡u TĂ i Vinh, BĂ­ thÆ° Tá»‰nh á»§y trao HuĂ¢n chÆ°Æ¡ng Lao Ä‘á»™ng háº¡ng Nháº¥t cho
								BĂ¡o HĂ  Giang.</h3>
							<p></p>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage owl-lazy"
								data-src="images/8 QUY.png" style="object-fit: contain;" alt="Äá»“ng chĂ­ Äá»— Trá»ng QuĂ½,
										Chá»§ tá»‹ch UBND tá»‰nh cĂ¹ng lĂ£nh Ä‘áº¡o
										Ban biĂªn táº­p vĂ  cĂ¡n bá»™ BĂ¡o HĂ  Giang."> </img></a>
						<div class="desc">
							<!-- <span class="meta">NÄƒm 2000</span> -->
							<h3>Äá»“ng chĂ­ Äá»— Trá»ng QuĂ½, Chá»§ tá»‹ch UBND tá»‰nh cĂ¹ng lĂ£nh Ä‘áº¡o Ban biĂªn táº­p vĂ  cĂ¡n bá»™
								BĂ¡o HĂ  Giang.</h3>
							<p></p>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage owl-lazy"
								data-src="images/3a.VINH.png" style="object-fit: contain;" alt="Äá»“ng chĂ­ Triá»‡u TĂ i Vinh, BĂ­ thÆ° Tá»‰nh á»§y vĂ  Ä‘á»“ng chĂ­ ÄĂ m VÄƒn BĂ´ng,
										PhĂ³ BĂ­ thÆ° Tá»‰nh á»§y, Chá»§ tá»‹ch UBND tá»‰nh vá»›i cĂ¡c phĂ³ng viĂªn
										táº¡i Äáº¡i há»™i XV Äáº£ng bá»™ tá»‰nh."> </img></a>
						<div class="desc">
							<!-- <span class="meta"></span> -->
							<h3>Äá»“ng chĂ­ Triá»‡u TĂ i Vinh, BĂ­ thÆ° Tá»‰nh á»§y vĂ  Ä‘á»“ng chĂ­ ÄĂ m VÄƒn BĂ´ng, PhĂ³ BĂ­ thÆ°
								Tá»‰nh á»§y, Chá»§ tá»‹ch UBND tá»‰nh vá»›i cĂ¡c phĂ³ng viĂªn táº¡i Äáº¡i há»™i XV Äáº£ng bá»™ tá»‰nh.
							</h3>
							<p></p>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage owl-lazy"
								data-src="images/IMG_6861.png" style="object-fit: contain;" alt="Äá»“ng chĂ­ Äáº·ng Quá»‘c KhĂ¡nh, á»¦y viĂªn Ban Cháº¥p hĂ nh Trung Æ°Æ¡ng Äáº£ng, BĂ­ thÆ° Tá»‰nh á»§y,
										TrÆ°á»Ÿng Ä‘oĂ n ÄBQH khĂ³a XV Ä‘Æ¡n vá»‹ Tá»‰nh HĂ  Giang thÄƒm, chĂºc má»«ng vĂ  chá»¥p áº£nh lÆ°u
										niá»‡m vá»›i Ban biĂªn táº­p, phĂ³ng viĂªn, biĂªn táº­p viĂªn BĂ¡o HĂ  Giang."> </img></a>
						<div class="desc">
							<!-- <span class="meta">NgĂ y 21.6.2022</span> -->
							<h3>Äá»“ng chĂ­ Äáº·ng Quá»‘c KhĂ¡nh, á»¦y viĂªn Ban Cháº¥p hĂ nh Trung Æ°Æ¡ng Äáº£ng, BĂ­ thÆ° Tá»‰nh á»§y,
								TrÆ°á»Ÿng Ä‘oĂ n ÄBQH khĂ³a XV Ä‘Æ¡n vá»‹ Tá»‰nh HĂ  Giang thÄƒm, chĂºc má»«ng vĂ  chá»¥p áº£nh lÆ°u
								niá»‡m vá»›i Ban biĂªn táº­p, phĂ³ng viĂªn, biĂªn táº­p viĂªn BĂ¡o HĂ  Giang. </h3>
							<p></p>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage owl-lazy"
								data-src="images/bi thu khanh.png" style="object-fit: contain;" alt="BĂ­ thÆ° Tá»‰nh á»§y
										Äáº·ng Quá»‘c KhĂ¡nh
										xem áº¥n pháº©m bĂ¡o
										XuĂ¢n HĂ  Giang."> </img></a>
						<div class="desc">
							<!-- <span class="meta">NÄƒm 2020</span> -->
							<h3>BĂ­ thÆ° Tá»‰nh á»§y Äáº·ng Quá»‘c KhĂ¡nh xem áº¥n pháº©m bĂ¡o XuĂ¢n HĂ  Giang. </h3>
							<p></p>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage owl-lazy"
								data-src="images/images1434104_20190201_094617.png" style="object-fit: contain;" alt="BĂ­ thÆ° Tá»‰nh á»§y Triá»‡u
										TĂ i Vinh vĂ  PhĂ³ BĂ­
										ThÆ° Tá»‰nh á»§y Nguyá»…n
										Máº¡nh DÅ©ng xem áº¥n
										pháº©m bĂ¡o HĂ  Giang."> </img></a>
						<div class="desc">
							<!-- <span class="meta">NÄƒm 2019</span> -->
							<h3>BĂ­ thÆ° Tá»‰nh á»§y Triá»‡u TĂ i Vinh vĂ  PhĂ³ BĂ­ ThÆ° Tá»‰nh á»§y Nguyá»…n Máº¡nh DÅ©ng xem áº¥n pháº©m
								bĂ¡o HĂ  Giang. </h3>
							<p></p>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage owl-lazy"
								data-src="images/01_7a.png" style="object-fit: contain;" alt="Äá»“ng chĂ­ VÆ°Æ¡ng MĂ­ VĂ ng, PhĂ³ BĂ­ thÆ° ThÆ°á»ng trá»±c Tá»‰nh á»§y vĂ  cĂ¡c Ä‘á»“ng chĂ­ lĂ£nh Ä‘áº¡o
										tá»‰nh xem bĂ¡o, táº¡p chĂ­ Ä‘Æ°á»£c triá»ƒn lĂ£m táº¡i Há»™i bĂ¡o XuĂ¢n."> </img></a>
						<div class="desc">
							<!-- <span class="meta">NÄƒm 2012</span> -->
							<h3>Äá»“ng chĂ­ VÆ°Æ¡ng MĂ­ VĂ ng, PhĂ³ BĂ­ thÆ° ThÆ°á»ng trá»±c Tá»‰nh á»§y vĂ  cĂ¡c Ä‘á»“ng chĂ­ lĂ£nh Ä‘áº¡o
								tá»‰nh xem bĂ¡o, táº¡p chĂ­ Ä‘Æ°á»£c triá»ƒn lĂ£m táº¡i Há»™i bĂ¡o XuĂ¢n. </h3>
							<p></p>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage owl-lazy" data-src="images/13a.png"
								style="object-fit: contain;" alt="BĂ¡o HĂ  Giang Ä‘Ă³n nháº­n HuĂ¢n chÆ°Æ¡ng Lao Ä‘á»™ng háº¡ng NhĂ¬.">
							</img></a>
						<div class="desc">
							<!-- <span class="meta">NÄƒm 2009</span> -->
							<h3>BĂ¡o HĂ  Giang Ä‘Ă³n nháº­n HuĂ¢n chÆ°Æ¡ng Lao Ä‘á»™ng háº¡ng NhĂ¬. </h3>
							<p></p>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage owl-lazy" data-src="images/31a1.png"
								style="object-fit: contain;" alt="LĂ£nh Ä‘áº¡o tá»‰nh táº·ng Báº±ng khen cho cĂ¡c táº­p thá»ƒ, cĂ¡ nhĂ¢n BĂ¡o HĂ  Giang
										nhĂ¢n Lá»… ká»· niá»‡m 45 nÄƒm NgĂ y BĂ¡o HĂ  Giang ra sá»‘ Ä‘áº§u tiĂªn."> </img></a>
						<div class="desc">
							<!-- <span class="meta"></span> -->
							<h3>LĂ£nh Ä‘áº¡o tá»‰nh táº·ng Báº±ng khen cho cĂ¡c táº­p thá»ƒ, cĂ¡ nhĂ¢n BĂ¡o HĂ  Giang nhĂ¢n Lá»… ká»·
								niá»‡m 45 nÄƒm NgĂ y BĂ¡o HĂ  Giang ra sá»‘ Ä‘áº§u tiĂªn. </h3>
							<p></p>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage owl-lazy" data-src="images/9.png"
								style="object-fit: contain;" alt="Chá»§ tá»‹ch UBND tá»‰nh ÄĂ m VÄƒn BĂ´ng táº·ng Báº±ng khen cho cĂ¡c phĂ²ng nghiá»‡p vá»¥
										BĂ¡o HĂ  Giang."> </img></a>
						<div class="desc">
							<!-- <span class="meta">NÄƒm 2014</span> -->
							<h3>Chá»§ tá»‹ch UBND tá»‰nh ÄĂ m VÄƒn BĂ´ng táº·ng Báº±ng khen cho cĂ¡c phĂ²ng nghiá»‡p vá»¥ BĂ¡o HĂ 
								Giang. </h3>
							<p></p>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage owl-lazy"
								data-src="images/01_10a.png" style="object-fit: contain;" alt="PhĂ³ BĂ­ thÆ° ThÆ°á»ng trá»±c Tá»‰nh á»§y ThĂ o Há»“ng SÆ¡n;
										Chá»§ tá»‹ch UBND tá»‰nh Nguyá»…n VÄƒn SÆ¡n chĂºc má»«ng cĂ¡c cÆ¡ quan bĂ¡o chĂ­
										nhĂ¢n dá»‹p ká»· niá»‡m 95 nÄƒm NgĂ y BĂ¡o chĂ­ CĂ¡ch máº¡ng Viá»‡t Nam."> </img></a>
						<div class="desc">
							<!-- <span class="meta">NÄƒm 2020</span> -->
							<h3>PhĂ³ BĂ­ thÆ° ThÆ°á»ng trá»±c Tá»‰nh á»§y ThĂ o Há»“ng SÆ¡n; Chá»§ tá»‹ch UBND tá»‰nh Nguyá»…n VÄƒn SÆ¡n
								chĂºc má»«ng cĂ¡c cÆ¡ quan bĂ¡o chĂ­ nhĂ¢n dá»‹p ká»· niá»‡m 95 nÄƒm NgĂ y BĂ¡o chĂ­ CĂ¡ch máº¡ng
								Viá»‡t Nam. </h3>
							<p></p>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage owl-lazy"
								data-src="images/thao hong son.png" style="object-fit: contain;" alt="PhĂ³ BĂ­ thÆ° ThÆ°á»ng trá»±c Tá»‰nh á»§y, Chá»§ tá»‹ch HÄND tá»‰nh ThĂ o Há»“ng SÆ¡n
										thÄƒm phĂ²ng BĂ¡o HĂ  Giang Ä‘iá»‡n tá»­."> </img></a>
						<div class="desc">
							<!-- <span class="meta">NÄƒm 2021</span> -->
							<h3>PhĂ³ BĂ­ thÆ° ThÆ°á»ng trá»±c Tá»‰nh á»§y, Chá»§ tá»‹ch HÄND tá»‰nh ThĂ o Há»“ng SÆ¡n thÄƒm phĂ²ng BĂ¡o
								HĂ  Giang Ä‘iá»‡n tá»­. </h3>
							<p></p>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage owl-lazy"
								data-src="images/11nguyen son.png" style="object-fit: contain;" alt="Chá»§ tá»‹ch UBND tá»‰nh Nguyá»…n VÄƒn SÆ¡n táº·ng hoa chĂºc má»«ng BĂ¡o HĂ  Giang
										nhĂ¢n ká»· niá»‡m 98 nÄƒm NgĂ y BĂ¡o chĂ­ cĂ¡ch máº¡ng Viá»‡t Nam."> </img></a>
						<div class="desc">
							<!-- <span class="meta">NÄƒm 2023</span> -->
							<h3>Chá»§ tá»‹ch UBND tá»‰nh Nguyá»…n VÄƒn SÆ¡n táº·ng hoa chĂºc má»«ng BĂ¡o HĂ  Giang nhĂ¢n ká»· niá»‡m
								98 nÄƒm NgĂ y BĂ¡o chĂ­ cĂ¡ch máº¡ng Viá»‡t Nam. </h3>
							<p></p>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage owl-lazy"
								data-src="images/VU MANH HA.png" style="object-fit: contain;" alt="Äá»“ng chĂ­ VÅ© Máº¡nh
										HĂ , á»¦y viĂªn BTV
										Tá»‰nh á»§y, TrÆ°á»Ÿng
										Ban TuyĂªn GiĂ¡o
										Tá»‰nh á»§y thÄƒm, táº·ng
										quĂ  BĂ¡o HĂ  Giang."> </img></a>
						<div class="desc">
							<!-- <span class="meta">NÄƒm 2023</span> -->
							<h3>Äá»“ng chĂ­ VÅ© Máº¡nh HĂ , á»¦y viĂªn BTV Tá»‰nh á»§y, TrÆ°á»Ÿng Ban TuyĂªn GiĂ¡o Tá»‰nh á»§y thÄƒm,
								táº·ng quĂ  BĂ¡o HĂ  Giang. </h3>
							<p></p>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage owl-lazy"
								data-src="images/CAC DONG CHI LANH DAO TINH.png" style="object-fit: contain;" alt="CĂ¡c Ä‘á»“ng chĂ­ lĂ£nh Ä‘áº¡o tá»‰nh vĂ  Ä‘áº¡i biá»ƒu xem
										cĂ¡c áº¥n pháº©m trÆ°ng bĂ y táº¡i Há»™i bĂ¡o XuĂ¢n
										GiĂ¡p ThĂ¬n."> </img></a>
						<div class="desc">
							<!-- <span class="meta">NÄƒm 2024</span> -->
							<h3>CĂ¡c Ä‘á»“ng chĂ­ lĂ£nh Ä‘áº¡o tá»‰nh vĂ  Ä‘áº¡i biá»ƒu xem cĂ¡c áº¥n pháº©m trÆ°ng bĂ y táº¡i Há»™i bĂ¡o
								XuĂ¢n GiĂ¡p ThĂ¬n. </h3>
							<p></p>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage"
								src="images/VUONG NGOC HA.png" style="object-fit: contain;" alt="Äá»“ng chĂ­ VÆ°Æ¡ng Ngá»c HĂ , TrÆ°á»Ÿng Ban TuyĂªn
										giĂ¡o Tá»‰nh á»§y thÄƒm, lĂ m viá»‡c táº¡i BĂ¡o HĂ  Giang."> </img></a>
						<div class="desc">
							<!-- <span class="meta">ThĂ¡ng 2.2024</span> -->
							<h3>Äá»“ng chĂ­ VÆ°Æ¡ng Ngá»c HĂ , TrÆ°á»Ÿng Ban TuyĂªn giĂ¡o Tá»‰nh á»§y thÄƒm, lĂ m viá»‡c táº¡i BĂ¡o HĂ 
								Giang. </h3>
							<p></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>`;

    $(".lanhdaotinh .article").on("click", () => {
      if ($("#customModa4").length <= 0) {
        const modalContainer = document.createElement("div");
        modalContainer.innerHTML = lanhdaotinhContent;
        document.body.appendChild(modalContainer);
      }
      $("#customModal4").show();
      if ($("#customModal4 .owl-carousel").length <= 0) {
        $("#customModal4 .myCarousel").owlCarousel({
          animateOut: "fadeOut",
          animateIn: "fadeIn",
          autoplay: true,
          loop: true,
          margin: 0,
          nav: true,
          dots: false,
          autoHeight: true,
          lazyLoad: true,
          responsive: {
            0: {
              items: 1,
            },
            600: {
              items: 1,
            },
            1000: {
              items: 1,
            },
          },
          navText: [
            "<i class='icon-arrow-left3 owl-direction'></i>",
            "<i class='icon-arrow-right3 owl-direction'></i>",
          ],
        });
      }

      $("#customModal4 .closeModal").on("click", () => {
        $("#customModal4").hide();
      });
    });

    let cungbacContent = `<div id="customModal5" class="modal">
		<span class="closeModal">Ă—</span>
		<div class="body">
			<div class="box-img myCarousel">
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage owl-lazy"
								data-src="images/anh bac 1.jpg" style="object-fit: contain;" alt="CĂ¡n bá»™ bĂ¡o chĂ­ cÅ©ng lĂ  chiáº¿n sá»¹ cĂ¡ch máº¡ng.
								CĂ¢y bĂºt, trang giáº¥y lĂ  vÅ© khĂ­ sáº¯c bĂ©n cá»§a há»"> </img></a>
						<div class="desc">
							<h3>â€œCĂ¡n bá»™ bĂ¡o chĂ­ cÅ©ng lĂ  chiáº¿n sá»¹ cĂ¡ch máº¡ng. CĂ¢y bĂºt, trang giáº¥y lĂ  vÅ© khĂ­ sáº¯c bĂ©n cá»§a
								há»â€</h3>
							<p></p>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="article">
						<a class="blog-img"> <img class="img-responsive showImage owl-lazy"
								data-src="images/anh bac 2.jpg" style="object-fit: contain;"
								alt="BĂ i viáº¿t Ä‘Äƒng trĂªn BĂ¡o HĂ  Giang sá»‘ ra ngĂ y 20.6.1995."> </img></a>
						<div class="desc">
							<h3>BĂ i viáº¿t Ä‘Äƒng trĂªn BĂ¡o HĂ  Giang sá»‘ ra ngĂ y 20.6.1995.</h3>
							<p></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>`;
    $(".cungbac .ok").on("click", () => {
      if ($("#customModal5").length <= 0) {
        const modalContainer = document.createElement("div");
        modalContainer.id = "cungbac";
        modalContainer.innerHTML = cungbacContent;
        document.body.appendChild(modalContainer);
      }
      $("#customModal5").show();
      if ($("#customModal5 .owl-carousel").length <= 0) {
        $("#customModal5 .myCarousel").owlCarousel({
          animateOut: "fadeOut",
          animateIn: "fadeIn",
          autoplay: true,
          loop: true,
          margin: 0,
          nav: true,
          dots: false,
          autoHeight: true,
          lazyLoad: true,
          responsive: {
            0: {
              items: 1,
            },
            600: {
              items: 1,
            },
            1000: {
              items: 1,
            },
          },
          navText: [
            "<i class='icon-arrow-left3 owl-direction'></i>",
            "<i class='icon-arrow-right3 owl-direction'></i>",
          ],
        });
      }

      $("#customModal5 .closeModal").on("click", () => {
        $("#customModal5").hide();
        document.getElementById("cungbac").remove();
      });
    });

    $(".loigioithieu img").on("click", () => {
      $("#customModal7").show();
      if ($("#customModal7 .owl-carousel").length <= 0) {
        $("#customModal7 .myCarousel").owlCarousel({
          animateOut: "fadeOut",
          animateIn: "fadeIn",
          //   autoplay: true,
          loop: true,
          margin: 0,
          nav: true,
          dots: false,
          autoHeight: true,
          lazyLoad: true,
          responsive: {
            0: {
              items: 1,
            },
            600: {
              items: 1,
            },
            1000: {
              items: 1,
            },
          },
          navText: [
            "<i class='icon-arrow-left3 owl-direction'></i>",
            "<i class='icon-arrow-right3 owl-direction'></i>",
          ],
        });
      }

      $("#customModal7 .closeModal").on("click", () => {
        $("#customModal7").hide();
      });
    });

    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      var scrollToTopBtn = document.getElementById("scrollToTopBtn");
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    }

    // When the user clicks on the button, scroll to the top of the document
    document
      .getElementById("scrollToTopBtn")
      .addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
  });
})();

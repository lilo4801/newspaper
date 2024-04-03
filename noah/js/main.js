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

    owl2 = $(".owl-carousel");
    owl2.owlCarousel({
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      autoplay: true,
      loop: true,
      margin: 0,
      nav: false,
      dots: true,
      autoHeight: true,
      items: 1,
      navText: [
        "<i class='icon-arrow-left3 owl-direction'></i>",
        "<i class='icon-arrow-right3 owl-direction'></i>",
      ],
    });
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
      navText: [
        "<i class='icon-arrow-left3 owl-direction'></i>",
        "<i class='icon-arrow-right3 owl-direction'></i>",
      ],
    });
  };

  // Document on load.
  $(function () {
    fullHeight();
    burgerMenu();
    counterWayPoint();
    contentWayPoint();
    owlCarouselFeatureSlide();

    var lazyLoadInstance = new LazyLoad({
      elements_selector: ".lazy",
      threshold: 200,
    });

    $(".work-img").lazy();
    $(".soluocImg").lazy();
    $(".lanhdaotrunguongImg").lazy();
    $(".lanhdaotinhImg").lazy();
    $(".bientapImg").lazy();
    $(".cungbacImg").lazy();
    $(".hoatdongImg").lazy();
	$(".motsohoatdong .showImage6").on("click", () => {
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
    $(".soluocthoiki .article").on("click", () => {
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

    $(".lanhdaotrunguong .article").on("click", () => {
      $("#customModal2").show();
      if ($("#customModal2 .owl-carousel").length <= 0) {
        $("#customModal2 .myCarousel").owlCarousel({
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

      $("#customModal2 .closeModal").on("click", () => {
        $("#customModal2").hide();
      });
    });

    $(".banbientap .article").on("click", () => {
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

    $(".lanhdaotinh .article").on("click", () => {
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

	$(".cungbac .ok").on("click", () => {
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
		});
	  });


	  $(".loigioithieu .item").on("click", () => {
		$("#customModal7").show();
		if ($("#customModal7 .owl-carousel").length <= 0) {
		  $("#customModal7 .myCarousel").owlCarousel({
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
  
		$("#customModal7 .closeModal").on("click", () => {
		  $("#customModal7").hide();
		});
	  });

    function showModal(idModal, nameImgClass) {
      let imgs = Array.from(document.getElementsByClassName(nameImgClass));
      let modal = document.getElementById(idModal);
      let modalImg = modal.querySelector(".modal-content");
      let captionText = modal.querySelector(".caption");

      let currentImgShow = null;

      $("." + nameImgClass).on("click", (event) => {
        var clickedElement = event.target;
        currentImgShow = clickedElement;
        modal.style.display = "block";
        modalImg.src = clickedElement.src;
        captionText.innerHTML = clickedElement.alt;
      });

      $("#" + idModal + " .actions .next").on("click", () => {
        let findIndex = imgs.indexOf(currentImgShow);

        if (findIndex == imgs.length - 1) {
          findIndex = 0;
        } else {
          findIndex = findIndex + 1;
        }

        currentImgShow = imgs[findIndex];
        modal.style.display = "block";
        modalImg.src = currentImgShow.getAttribute("data-src");
        captionText.innerHTML = currentImgShow.alt;
      });

      $("#" + idModal + " .actions .prev").on("click", () => {
        let findIndex = imgs.indexOf(currentImgShow);

        if (findIndex == 0) {
          findIndex = imgs.length - 1;
        } else {
          findIndex = findIndex - 1;
        }
        currentImgShow = imgs[findIndex];
        modal.style.display = "block";
        modalImg.src = currentImgShow.getAttribute("data-src");
        captionText.innerHTML = currentImgShow.alt;
      });

      // Get the <span> element that closes the modal
      modal.querySelector(".close").onclick = function () {
        modal.style.display = "none";
      };

      modal.querySelector(".body").onclick = function () {
        modal.style.display = "none";
      };
    }

    function showModalCus(idModal, nameImgClass) {
      let imgs = Array.from(document.getElementsByClassName(nameImgClass));
      let modal = document.getElementById(idModal);
      let modalImg = modal.querySelector(".modal-content");
      let captionText = modal.querySelector(".caption");

      let currentImgShow = null;

      $("." + nameImgClass).on("click", (event) => {
        var clickedElement = event.target;
        currentImgShow = clickedElement;
        modal.style.display = "block";
        modalImg.src = clickedElement.getAttribute("data-src");
        captionText.innerHTML = clickedElement.getAttribute("caption");
      });

      $("#" + idModal + " .actions .next").on("click", () => {
        let findIndex = imgs.indexOf(currentImgShow);

        if (findIndex == imgs.length - 1) {
          findIndex = 0;
        } else {
          findIndex = findIndex + 1;
        }
        imgs[findIndex].click();
      });

      $("#" + idModal + " .actions .prev").on("click", () => {
        let findIndex = imgs.indexOf(currentImgShow);

        if (findIndex == 0) {
          findIndex = imgs.length - 1;
        } else {
          findIndex = findIndex - 1;
        }

        imgs[findIndex].click();
      });

      // Get the <span> element that closes the modal
      modal.querySelector(".close").onclick = function () {
        modal.style.display = "none";
      };

      modal.querySelector(".body").onclick = function () {
        modal.style.display = "none";
      };
    }

    // showModal("myModal", "showImage")
    // showModal("myModal1", "showImage1")
    // showModal("myModal2", "showImage2")
    // showModal("myModal3", "showImage3")
    // showModal("myModal4", "showImage4")
    // showModalCus("myModal5", "showImage5")
    // showModalCus("myModal6", "showImage6")

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

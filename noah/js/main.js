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

    let motsohoatdongContent = `<div id="customModal6" class="modal">
	<span class="closeModal">×</span>
	<div class="body">
		<div class="box-img myCarousel">
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage" src="images/21a.png"
							style="object-fit: contain;" alt="Tổng Biên tập Báo Hà Giang Lê Trọng Lập và các đồng chí Phó Tổng Biên với
							lãnh đạo, cán bộ, phóng viên, biên tập viên Báo Hà Giang năm 2014"> </img></a>
					<div class="desc">
						<h3>Tổng Biên tập Báo Hà Giang Lê Trọng Lập và các đồng chí Phó Tổng Biên với
							lãnh đạo, cán bộ, phóng viên, biên tập viên Báo Hà Giang năm 2014</h3>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage hoatdongImg" data-src="images/19a.png"
							style="object-fit: contain;" alt="Lãnh đạo Đảng ủy khối Cơ quan - Doanh nghiệp tỉnh tặng hoa Chi ủy Chi bộ Báo Hà Giang
							khóa X, nhiệm kỳ 2020 - 2025."> </img></a>
					<div class="desc">
						<h3>Lãnh đạo Đảng ủy khối Cơ quan - Doanh nghiệp tỉnh tặng hoa Chi ủy Chi bộ Báo Hà Giang
							khóa X, nhiệm kỳ 2020 - 2025.</h3>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage hoatdongImg"
							data-src="images/BAN BIEN TAP .png" style="object-fit: contain;" alt="Tổng Biên tập Báo Hà Giang Nguyễn Trung Thu tặng hoa chúc mừng Đại hội Hội Cựu chiến
							binh Báo Hà Giang nhiệm kỳ 2022 - 2027 (năm 2022). "> </img></a>
					<div class="desc">
						
						<h3>Tổng Biên tập Báo Hà Giang Nguyễn Trung Thu tặng hoa chúc mừng Đại hội Hội Cựu chiến
							binh Báo Hà Giang nhiệm kỳ 2022 - 2027 (năm 2022). </h3>
					</div>
				</div>
			</div>

			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage hoatdongImg"
							data-src="images/LANH DAO BAO HA GIANG.png" style="object-fit: contain;" alt="Lãnh đạo Báo Hà Giang tặng quà các thành viên Câu lạc bộ Hưu trí
							Báo Hà Giang tại lễ ra mắt (31.1.2024)."> </img></a>
					<div class="desc">
						
						<h3>Lãnh đạo Báo Hà Giang tặng quà các thành viên Câu lạc bộ Hưu trí
							Báo Hà Giang tại lễ ra mắt (31.1.2024). </h3>
					</div>
				</div>
			</div>

			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage hoatdongImg"
							data-src="images/ky duyet.png" style="object-fit: contain;" alt="Tổng Biên tập Báo Hà
							Giang Nguyễn Trung Thu
							duyệt xuất bản số báo
							thường kỳ in 4 mầu đầu tiên
							(năm 2020)."> </img></a>
					<div class="desc">
						<h3> </h3>
						<h3>
							Tổng Biên tập Báo Hà
							Giang Nguyễn Trung Thu
							duyệt xuất bản số báo
							thường kỳ in 4 mầu đầu tiên
							(năm 2020).</h3>
					</div>
				</div>
			</div>




			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage hoatdongImg"
							data-src="images/nhan ban giao.png" style="object-fit: contain;" alt="Báo Hà Giang
							nhận bàn giao
							thiết bị."> </img></a>
					<div class="desc">
						
						<h3>Báo Hà Giang
							nhận bàn giao
							thiết bị.</h3>
					</div>
				</div>
			</div>

			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage hoatdongImg"
							data-src="images/VUON TAP.png" style="object-fit: contain;" alt="Lãnh đạo Báo Hà Giang và Báo Tuyên Quang
							hỗ trợ cây giống cho xã Lùng Tám (Quản Bạ) thực
							hiện chương trình Cải tạo vườn tạp (năm 2023)."> </img></a>
					<div class="desc">
						
						<h3>Lãnh đạo Báo Hà Giang và Báo Tuyên Quang
							hỗ trợ cây giống cho xã Lùng Tám (Quản Bạ) thực
							hiện chương trình Cải tạo vườn tạp (năm 2023).</h3>
					</div>
				</div>
			</div>

			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage hoatdongImg"
							data-src="images/BCH CONG DOAN.png" style="object-fit: contain;" alt="Lãnh đạo Báo Hà Giang và lãnh
							đạo Công đoàn viên chức tỉnh tặng
							hoa chúc mừng BCH CĐCS Báo Hà
							Giang khóa mới 2023 - 2028."> </img></a>
					<div class="desc">
						
						<h3>Lãnh đạo Báo Hà Giang và lãnh
							đạo Công đoàn viên chức tỉnh tặng
							hoa chúc mừng BCH CĐCS Báo Hà
							Giang khóa mới 2023 - 2028.</h3>
					</div>
				</div>
			</div>

			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage hoatdongImg" data-src="images/8.png"
							style="object-fit: contain;"
							alt="Lãnh đạo Báo Hà Giang và Hội Nhà báo tỉnh tặng hoa chị em nhân ngày 8.3.2024.">
						</img></a>
					<div class="desc">
						
						<h3>Lãnh đạo Báo Hà Giang và Hội Nhà báo tỉnh tặng hoa chị em nhân ngày 8.3.2024.</h3>
					</div>
				</div>
			</div>

			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage hoatdongImg"
							data-src="images/BCH CHI DOAN.png" style="object-fit: contain;" alt="Lãnh đạo Báo Hà
							Giang; đại diện
							Chi đoàn Đồn Biên
							phòng Cửa khẩu
							Quốc tế Thanh
							Thuỷ tặng hoa
							chúc mừng BCH
							Chi đoàn Báo Hà
							Giang, nhiệm kỳ
							2022 - 2024 (tháng
							4.2022)."> </img></a>
					<div class="desc">
						
						<h3>Lãnh đạo Báo Hà
							Giang; đại diện
							Chi đoàn Đồn Biên
							phòng Cửa khẩu
							Quốc tế Thanh
							Thuỷ tặng hoa
							chúc mừng BCH
							Chi đoàn Báo Hà
							Giang, nhiệm kỳ
							2022 - 2024 (tháng
							4.2022).</h3>
					</div>
				</div>
			</div>



			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage hoatdongImg"
							data-src="images/PV BAO HA GIANG PHONG VAN.png" style="object-fit: contain;" alt="Phóng viên Báo Hà Giang phỏng vấn lực lượng diễn tập phương
							án phòng cháy, chữa cháy chợ Yên Biên, thành phố Hà Giang
							(năm 2023)."> </img></a>
					<div class="desc">
						<h3> </h3>
						<h3>Phóng viên Báo Hà Giang phỏng vấn lực lượng diễn tập phương
							án phòng cháy, chữa cháy chợ Yên Biên, thành phố Hà Giang
							(năm 2023).</h3>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage hoatdongImg"
							data-src="images/giai ve quoc hoi va hdnd.png" style="object-fit: contain;" alt="Giải C Giải báo chí toàn quốc về Quốc hội
							và HĐND lần thứ Hai (Giải Diên Hồng)
							năm 2024."> </img></a>
					<div class="desc">
						
						<h3>Giải C Giải báo chí toàn quốc về Quốc hội
							và HĐND lần thứ Hai (Giải Diên Hồng)
							năm 2024.</h3>
					</div>
				</div>
			</div>


			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage hoatdongImg"
							data-src="images/1e4ee94106f5aaabf3e4.png" style="object-fit: contain;" alt="Giải Khuyến khích Giải báo chí toàn quốc
							về Quốc hội và HĐND lần thứ Nhất
							(Giải Diên Hồng) năm 2023."> </img></a>
					<div class="desc">
						
						<h3>Giải Khuyến khích Giải báo chí toàn quốc
							về Quốc hội và HĐND lần thứ Nhất
							(Giải Diên Hồng) năm 2023.</h3>
					</div>
				</div>
			</div>

			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage hoatdongImg"
							data-src="images/9ea81682f93655680c27.png" style="object-fit: contain;" alt="Giải C Giải báo chí toàn quốc
							về xây dựng Đảng (Giải Búa
							liềm vàng) lần thứ VIII - 2023."> </img></a>
					<div class="desc">
						
						<h3>Giải C Giải báo chí toàn quốc
							về xây dựng Đảng (Giải Búa
							liềm vàng) lần thứ VIII - 2023.</h3>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage hoatdongImg"
							data-src="images/nhom tac gia.png" style="object-fit: contain;" alt="Nhóm tác giả Báo Hà Giang đoạt giải C Giải báo chí
							toàn quốc về xây dựng Đảng lần thứ VIII - năm 2023.
							(Từ trái qua: Diệu Kế, Nguyễn Phương, Kim Tiến,
							Biện Luân, Hoàng Ngọc, Thu Phương)."> </img></a>
					<div class="desc">
						
						<h3>Nhóm tác giả Báo Hà Giang đoạt giải C Giải báo chí
							toàn quốc về xây dựng Đảng lần thứ VIII - năm 2023.
							(Từ trái qua: Diệu Kế, Nguyễn Phương, Kim Tiến,
							Biện Luân, Hoàng Ngọc, Thu Phương).</h3>
					</div>
				</div>
			</div>



			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage hoatdongImg"
							data-src="images/1 (57).png" style="object-fit: contain;" alt="Báo Hà Giang đoạt
							giải nhất đôi nam
							nữ bóng bàn
							Giao hữu thể
							thao các Ban
							xây dựng Đảng
							năm
							2023."> </img></a>
					<div class="desc">
						
						<h3>Báo Hà Giang đoạt
							giải nhất đôi nam
							nữ bóng bàn
							Giao hữu thể
							thao các Ban
							xây dựng Đảng
							năm
							2023.</h3>
					</div>
				</div>
			</div>


			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage hoatdongImg"
							data-src="images/4 (57).png" style="object-fit: contain;" alt="Giao hữu thể thao giữa
							Báo Hà Giang với
							Viettel Post.
							(năm
							2023)."> </img></a>
					<div class="desc">
						
						<h3>Giao hữu thể thao giữa
							Báo Hà Giang với
							Viettel Post.
							(năm
							2023).</h3>
					</div>
				</div>
			</div>



			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage hoatdongImg"
							data-src="images/2 (57).png" style="object-fit: contain;" alt="images/2 (57).png">
						</img></a>
					<div class="desc">
						
						<h3>Cán bộ, phóng viên Báo Hà Giang tham quan Cù Lao Xanh (T.P Quy nhơn, Bình Định) năm
							2023. </h3>
					</div>
				</div>
			</div>

			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage hoatdongImg"
							data-src="images/3 (57).png" style="object-fit: contain;" alt=""> </img></a>
					<div class="desc">
						
						<h3>Cán bộ, phóng viên Báo Hà Giang tham quan Tháp Nghinh Phong (tỉnh Phú Yên) năm 2023.</h3>
					</div>
				</div>
			</div>

			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage hoatdongImg"
							data-src="images/6111.png" style="object-fit: contain;" alt=""> </img></a>
					<div class="desc">
						
						<h3>Tổng Biên tập Báo Hà Giang Nguyễn Trung Thu trao quà cho hộ nghèo các xã biên giới ở
							Xín Mần trong chương trình "Xuấn biên cương, ấm lòng dân bản" năm 2024. </h3>
					</div>
				</div>
			</div>

			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage hoatdongImg" data-src="images/4.png"
							style="object-fit: contain;" alt="images/4.png"> </img></a>
					<div class="desc">
						
						<h3>Phó Tổng Biên tập Mai Ngọc Quỳnh trao cây giống cho hộ nghèo xã Sủng Cháng (Yên Minh)
							cải tạo vườn tạp. </h3>
					</div>
				</div>
			</div>

			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage hoatdongImg" data-src="images/moi.png"
							style="object-fit: contain;" alt="images/moi.png"> </img></a>
					<div class="desc">
						
						<h3></h3>
					</div>
				</div>
			</div>

			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage hoatdongImg"
							data-src="images/01_1.png" style="object-fit: contain;" alt="Phó Tổng Biên tập Báo Hà Giang Nguyễn
							Bình Minh tặng quà cho hộ nghèo xã Lũng
							Pù, huyện Mèo Vạc."> </img></a>
					<div class="desc">
						
						<h3>Phó Tổng Biên tập Báo Hà Giang Nguyễn
							Bình Minh tặng quà cho hộ nghèo xã Lũng
							Pù, huyện Mèo Vạc.</h3>
					</div>
				</div>
			</div>

			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage hoatdongImg"
							data-src="images/DSC_6642.png" style="object-fit: contain;" alt=""> </img></a>
					<div class="desc">
						<h3>Lãnh đạo và cán bộ Báo Hà Giang thăm hộ nghèo xã Pải Lủng (Mèo Vạc) năm 2018. </h3>
					</div>
				</div>
			</div>

			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage hoatdongImg"
							data-src="images/1 T59.png" style="object-fit: contain;" alt="Tổng Biên tập Báo Hà Giang Nguyễn Trung Thu cùng các đại biểu cắt băng khánh thành
							điểm trường Mầm non La Chí Chải, xã Nàn Ma (huyện Xín Mần) do Báo Hà Giang kêu gọi
							hỗ trợ xây dựng (năm 2022). "> </img></a>
					<div class="desc">
						<h3>Tổng Biên tập Báo Hà Giang Nguyễn Trung Thu cùng các đại biểu cắt băng khánh thành
							điểm trường Mầm non La Chí Chải, xã Nàn Ma (huyện Xín Mần) do Báo Hà Giang kêu gọi
							hỗ trợ xây dựng (năm 2022). </h3>
					</div>
				</div>
			</div>

			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage hoatdongImg"
							data-src="images/5 T59.png" style="object-fit: contain;" alt="Tặng quà Tết cho hộ nghèo xã Sủng
							Cháng (Yên Minh) nhân dịp
							Xuân Giáp Thìn
							năm 2024."> </img></a>
					<div class="desc">
						<h3>Tặng quà Tết cho hộ nghèo xã Sủng
							Cháng (Yên Minh) nhân dịp
							Xuân Giáp Thìn
							năm 2024.</h3>
					</div>
				</div>
			</div>

			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage"
							src="images/2 T59.png" style="object-fit: contain;" alt="Báo Hà Giang vận động, kết nối các nhà hảo
							tâm tặng quà cho Điểm Trường Mầm non và
							Tiểu học Tả Lủng (Mèo Vạc)."> </img></a>
					<div class="desc">
						<h3>Báo Hà Giang vận động, kết nối các nhà hảo
							tâm tặng quà cho Điểm Trường Mầm non và
							Tiểu học Tả Lủng (Mèo Vạc).</h3>
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
        $(".hoatdongImg").lazy();
      }

      $("#customModal6").show();
      if ($("#customModal6 .owl-carousel").length <= 0) {
        $("#customModal6 .myCarousel").owlCarousel({
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

      $("#customModal6 .closeModal").on("click", () => {
        $("#customModal6").hide();
      });
    });

    let soluocContent = `<div id="customModal1" class="modal">
	  <span class="closeModal">×</span>
	  <div class="body">
		  <div class="box-img myCarousel">
			  <!-- 0 -->
			  <div class="item active">
				  <div class="article">
					  <a class="blog-img"> <img class="img-responsive showImage2"
							  src="images/t8 sua.png" alt="THỜI KỲ 1964 - 1976"> </img></a>
					  <div class="desc" style="text-align: center;">
						  <!-- <span class="meta">15, Feb 2018</span> -->
						  <h2><a>THỜI KỲ 1964 - 1976</a></h2>
					  </div>
				  </div>
			  </div>
			  <!-- 1 -->
			  <div class="item">
				  <div class="article">
					  <a class="blog-img"> <img class="img-responsive showImage2 soluocImg"
							  data-src="images/t9 sua.png" alt="THỜI KỲ 1976 - 1991"> </img></a>
					  <div class="desc" style="text-align: center;">
						  <!-- <span class="meta">15, Feb 2018</span> -->
						  <h2><a>THỜI KỲ 1976 - 1991</a></h2>
					  </div>
				  </div>
			  </div>
			  <div class="item">
				  <div class="article">
					  <a class="blog-img"> <img class="img-responsive showImage2 soluocImg"
							  data-src="images/t10 sua.png" alt="THỜI KỲ 1976 - 1991"> </img></a>
					  <div class="desc" style="text-align: center;">
						  <!-- <span class="meta">15, Feb 2018</span> -->
						  <h2><a>THỜI KỲ 1976 - 1991</a></h2>
					  </div>
				  </div>
			  </div>
			  <!-- 3 -->
			  <div class="item">
				  <div class="article">
					  <a class="blog-img"> <img class="img-responsive showImage2 soluocImg"
							  data-src="images/T11 SUA.png" alt="THỜI KỲ 1991 - NAY"> </img></a>
					  <div class="desc" style="text-align: center;">
						  <!-- <span class="meta">15, Feb 2018</span> -->
						  <h2><a>THỜI KỲ 1991 - NAY</a></h2>
					  </div>
				  </div>
			  </div>
			  <div class="item">
				  <div class="article">
					  <a class="blog-img"> <img class="img-responsive showImage2 soluocImg"
							  data-src="images/T12 SUA.png" alt="THỜI KỲ 1991 - NAY"> </img></a>
					  <div class="desc" style="text-align: center;">
						  <!-- <span class="meta">15, Feb 2018</span> -->
						  <h2><a>THỜI KỲ 1991 - NAY</a></h2>
					  </div>
				  </div>
			  </div>
			  <div class="item">
				  <div class="article">
					  <a class="blog-img"> <img class="img-responsive showImage2 soluocImg" data-src="images/6.png"
							  alt="THỜI KỲ 1991 - NAY"> </img></a>
					  <div class="desc" style="text-align: center;">
						  <!-- <span class="meta">15, Feb 2018</span> -->
						  <h2><a>THỜI KỲ 1991 - NAY</a></h2>
					  </div>
				  </div>
			  </div>
			  <!-- 6 -->
			  <div class="item">
				  <div class="article">
					  <a class="blog-img"> <img class="img-responsive showImage2 soluocImg"
							  data-src="images/1 To tin nam 1959.png" alt="ẤN PHẨM BÁO HÀ GIANG QUA CÁC THỜI KỲ">
						  </img></a>
					  <div class="desc" style="text-align: center;">
						  <!-- <span class="meta">15, Feb 2018</span> -->
						  <h2><a>ẤN PHẨM BÁO HÀ GIANG QUA CÁC THỜI KỲ</a></h2>
					  </div>
				  </div>
			  </div>
			  <div class="item">
				  <div class="article">
					  <a class="blog-img"> <img class="img-responsive showImage2 soluocImg"
							  data-src="images/2 To tin Xuan Tan Suu 1961.png"
							  alt="ẤN PHẨM BÁO HÀ GIANG QUA CÁC THỜI KỲ"> </img></a>
					  <div class="desc" style="text-align: center;">
						  <!-- <span class="meta">15, Feb 2018</span> -->
						  <h2><a>ẤN PHẨM BÁO HÀ GIANG QUA CÁC THỜI KỲ</a></h2>
					  </div>
				  </div>
			  </div>
			  <div class="item">
				  <div class="article">
					  <a class="blog-img"> <img class="img-responsive showImage2 soluocImg"
							  data-src="images/6 So bao dau tien sau chia tach Bao HaTuyen.png"
							  alt="ẤN PHẨM BÁO HÀ GIANG QUA CÁC THỜI KỲ"> </img></a>
					  <div class="desc" style="text-align: center;">
						  <!-- <span class="meta">15, Feb 2018</span> -->
						  <h2><a>ẤN PHẨM BÁO HÀ GIANG QUA CÁC THỜI KỲ</a></h2>
					  </div>
				  </div>
			  </div>
			  <div class="item">
				  <div class="article">
					  <a class="blog-img"> <img class="img-responsive showImage2 soluocImg"
							  data-src="images/5 To Ha Tuyen nam 1991.png" alt="ẤN PHẨM BÁO HÀ GIANG QUA CÁC THỜI KỲ">
						  </img></a>
					  <div class="desc" style="text-align: center;">
						  <!-- <span class="meta">15, Feb 2018</span> -->
						  <h2><a>ẤN PHẨM BÁO HÀ GIANG QUA CÁC THỜI KỲ</a></h2>
					  </div>
				  </div>
			  </div>
			  <div class="item">
				  <div class="article">
					  <a class="blog-img"> <img class="img-responsive showImage2 soluocImg" data-src="images/111.png"
							  alt="ẤN PHẨM BÁO HÀ GIANG QUA CÁC THỜI KỲ">
						  </img></a>
					  <div class="desc" style="text-align: center;">
						  <!-- <span class="meta">15, Feb 2018</span> -->
						  <h2><a>ẤN PHẨM BÁO HÀ GIANG QUA CÁC THỜI KỲ</a></h2>
					  </div>
				  </div>
			  </div>
			  <div class="item">
				  <div class="article">
					  <a class="blog-img"> <img class="img-responsive showImage2 soluocImg"
							  data-src="images/4 So Xuan Mau Than 1968.png"
							  alt="ẤN PHẨM BÁO HÀ GIANG QUA CÁC THỜI KỲ"> </img></a>
					  <div class="desc" style="text-align: center;">
						  <!-- <span class="meta">15, Feb 2018</span> -->
						  <h2><a>ẤN PHẨM BÁO HÀ GIANG QUA CÁC THỜI KỲ</a></h2>
					  </div>
				  </div>
			  </div>
			  <div class="item">
				  <div class="article">
					  <a class="blog-img"> <img class="img-responsive showImage2 soluocImg"
							  data-src="images/6 So bao dau tien sau chia tach Bao HaTuyen.png"
							  alt="ẤN PHẨM BÁO HÀ GIANG QUA CÁC THỜI KỲ"> </img></a>
					  <div class="desc" style="text-align: center;">
						  <!-- <span class="meta">15, Feb 2018</span> -->
						  <h2><a>ẤN PHẨM BÁO HÀ GIANG QUA CÁC THỜI KỲ</a></h2>
					  </div>
				  </div>
			  </div>
			  <div class="item">
				  <div class="article">
					  <a class="blog-img"> <img class="img-responsive showImage2 soluocImg"
							  data-src="images/7 So bao Ha Giang in mau dau tien (1.4.png"
							  alt="ẤN PHẨM BÁO HÀ GIANG QUA CÁC THỜI KỲ"> </img></a>
					  <div class="desc" style="text-align: center;">
						  <!-- <span class="meta">15, Feb 2018</span> -->
						  <h2><a>ẤN PHẨM BÁO HÀ GIANG QUA CÁC THỜI KỲ</a></h2>
					  </div>
				  </div>
			  </div>
			  <div class="item">
				  <div class="article">
					  <a class="blog-img"> <img class="img-responsive showImage2"
							  src="images/9 Giao dien bao Ha Giang dien tu.png"
							  alt="ẤN PHẨM BÁO HÀ GIANG QUA CÁC THỜI KỲ"> </img></a>
					  <div class="desc" style="text-align: center;">
						  <!-- <span class="meta">15, Feb 2018</span> -->
						  <h2><a>ẤN PHẨM BÁO HÀ GIANG QUA CÁC THỜI KỲ</a></h2>
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
        $(".soluocImg").lazy();
      }

      $("#customModal1").show();

      if ($("#customModal1 .owl-carousel").length <= 0) {
        $("#customModal1 .myCarousel").owlCarousel({
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

      $("#customModal1 .closeModal").on("click", () => {
        $("#customModal1").hide();
      });
    });

    let lanhdaotrunguongContent = `<div id="customModal2" class="modal">
	<span class="closeModal">×</span>
	<div class="body">
		<div class="box-img myCarousel">
			<div class="item">

				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage1"
							src="images/1a.png" style="object-fit: contain;"
							alt="Tổng Bí thư Nguyễn Văn Linh với các nhà báo.">
						</img></a>
					<div class="desc">
						<h3>Tổng Bí thư Nguyễn Văn Linh với các nhà báo.</h3>
						<p></p>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage1 lanhdaotrunguongImg"
							data-src="images/2a.png" style="object-fit: contain;"
							alt="Tổng Bí thư Đỗ Mười với những người làm báo Hà Giang."> </img></a>
					<div class="desc">
						<!-- <span class="meta">Năm 1995</span> -->
						<h3>Tổng Bí thư Đỗ Mười với những người làm báo Hà Giang.</h3>
						<p></p>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage1 lanhdaotrunguongImg"
							data-src="images/3a.png" style="object-fit: contain;" alt="Tổng Bí thư Lê Khả
									Phiêu đọc Báo Hà
									Giang."> </img></a>
					<div class="desc">
						<!-- <span class="meta">Năm 1999</span> -->
						<h3>Tổng Bí thư Lê Khả Phiêu đọc Báo Hà Giang.</h3>
						<p></p>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage1 lanhdaotrunguongImg"
							data-src="images/4a.png" style="object-fit: contain;"
							alt="Chủ tịch Quốc hội Nông Đức Mạnh chụp ảnh cùng những người làm báo tỉnh.">
						</img></a>
					<div class="desc">
						<!-- <span class="meta">Năm 1996</span> -->
						<h3>Chủ tịch Quốc hội Nông Đức Mạnh chụp ảnh cùng những người làm báo tỉnh.</h3>
						<p></p>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage1 lanhdaotrunguongImg"
							data-src="images/5a.png" style="object-fit: contain;" alt="Chủ tịch nước Trần Đức Lương với các nhà báo
									tại Cột cờ Quốc gia Lũng Cú (Đồng Văn)."> </img></a>
					<div class="desc">
						<!-- <span class="meta">Năm 2001</span> -->
						<h3>Chủ tịch nước Trần Đức Lương với các nhà báo tại Cột cờ Quốc gia Lũng Cú (Đồng
							Văn).</h3>
						<p></p>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage1 lanhdaotrunguongImg"
							data-src="images/6a.png" style="object-fit: contain;"
							alt="Chủ tịch Quốc hội Nguyễn Văn An cùng với các nhà báo."> </img></a>
					<div class="desc">
						<!-- <span class="meta"></span> -->
						<h3>Chủ tịch Quốc hội Nguyễn Văn An cùng với các nhà báo.</h3>
						<p></p>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage1 lanhdaotrunguongImg"
							data-src="images/7a.png" style="object-fit: contain;" alt="Chủ tịch nước Trương Tấn Sang với các phóng viên Báo Hà Giang, Đài PTTH tỉnh,
									TTXVN."> </img></a>
					<div class="desc">
						<!-- <span class="meta">Năm 2013</span> -->
						<h3>Chủ tịch nước Trương Tấn Sang với các phóng viên Báo Hà Giang, Đài PTTH tỉnh,
							TTXVN.</h3>
						<p></p>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage1 lanhdaotrunguongImg"
							data-src="images/8a.png" style="object-fit: contain;" alt="Thủ tướng Chính phủ Nguyễn Tấn Dũng
									đọc Báo Hà Giang."> </img></a>
					<div class="desc">
						<!-- <span class="meta">Năm 2013</span> -->
						<h3>Thủ tướng Chính phủ Nguyễn Tấn Dũng đọc Báo Hà Giang.</h3>
						<p></p>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage1 lanhdaotrunguongImg"
							data-src="images/9a.png" style="object-fit: contain;" alt="Các đồng chí lãnh đạo Đảng, nhà nước thăm gian
									trưng bày ấn phẩm báo Xuân của Báo Hà Giang,
									Tuyên Quang, Yên Bái tại Hội báo Xuân toàn
									quốc."> </img></a>
					<div class="desc">
						<!-- <span class="meta">Năm 2017</span> -->
						<h3>Các đồng chí lãnh đạo Đảng, nhà nước thăm gian trưng bày ấn phẩm báo Xuân của
							Báo Hà Giang, Tuyên Quang, Yên Bái tại Hội báo Xuân toàn quốc.</h3>
						<p></p>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage1 lanhdaotrunguongImg"
							data-src="images/10a.png" style="object-fit: contain;" alt="Các đồng chí lãnh đạo Đảng, Nhà nước thăm gian trưng bày báo Xuân của Báo Hà
									Giang tại Hội báo Xuân toàn quốc."> </img></a>
					<div class="desc">
						<!-- <span class="meta">Năm 2017</span> -->
						<h3>Các đồng chí lãnh đạo Đảng, Nhà nước thăm gian trưng bày báo Xuân của Báo Hà
							Giang tại Hội báo Xuân toàn quốc.</h3>
						<p></p>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage1 lanhdaotrunguongImg"
							data-src="images/11a.png" style="object-fit: contain;" alt="Đồng chí Hồng Vinh, Tổng Biên tập Báo Nhân dân, Chủ tịch Hội Nhà báo Việt Nam
									cùng với những người làm báo Hà Giang."> </img></a>
					<div class="desc">
						<!-- <span class="meta">Năm 2000</span> -->
						<h3>Đồng chí Hồng Vinh, Tổng Biên tập Báo Nhân dân, Chủ tịch Hội Nhà báo Việt Nam
							cùng với những người làm báo Hà Giang.</h3>
						<p></p>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage1 lanhdaotrunguongImg"
							data-src="images/12a.png" style="object-fit: contain;" alt="Đồng chí Đinh Thế Huynh, Tổng biên tập Báo Nhân dân
									chụp ảnh cùng cán bộ, phòng viên, biên tập viên Báo Hà Giang."> </img></a>
					<div class="desc">
						<!-- <span class="meta">Năm 2005</span> -->
						<h3>Đồng chí Đinh Thế Huynh, Tổng biên tập Báo Nhân dân chụp ảnh cùng cán bộ, phòng
							viên, biên tập viên Báo Hà Giang.</h3>
						<p></p>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage1 lanhdaotrunguongImg"
							data-src="images/13a.png" style="object-fit: contain;" alt="Thứ trưởng Bộ Thông tin - Truyền thôngĐỗ Quý Doãn
									phát biểu tại buổi làm việc với Báo Hà Giang."> </img></a>
					<div class="desc">
						<!-- <span class="meta">Năm 2011</span> -->
						<h3>Thứ trưởng Bộ Thông tin - Truyền thôngĐỗ Quý Doãn phát biểu tại buổi làm việc
							với Báo Hà Giang.</h3>
						<p></p>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage1 lanhdaotrunguongImg"
							data-src="images/TONG BIEN TAP BAO NHAN DAN 2.png" style="object-fit: contain;" alt="Phó Trưởng ban Tuyên giáo T.Ư, Tổng Biên tập Báo Nhân Dân,
									Chủ tịchHộiNhà báoViệtNam Lê Quốc Minh thăm, làm việc với Báo Hà Giang."> </img></a>
					<div class="desc">
						<!-- <span class="meta">Năm 2021</span> -->
						<h3>Phó Trưởng ban Tuyên giáo T.Ư, Tổng Biên tập Báo Nhân Dân, Chủ tịchHộiNhà
							báoViệtNam Lê Quốc Minh thăm, làm việc với Báo Hà Giang.</h3>
						<p></p>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage1 lanhdaotrunguongImg"
							data-src="images/TONG BIEN TAP BAO NHAN DAN 1.png" style="object-fit: contain;" alt="Phó Trưởng ban Tuyên
									giáo T.Ư, Tổng Biên
									tập Báo Nhân Dân,
									Chủ tịch Hội Nhà báo
									Việt Nam Lê Quốc
									Minh đọc báo Hà Giang."> </img></a>
					<div class="desc">
						<!-- <span class="meta">Năm 2021</span> -->
						<h3>Phó Trưởng ban Tuyên giáo T.Ư, Tổng Biên tập Báo Nhân Dân, Chủ tịch Hội Nhà báo
							Việt Nam Lê Quốc Minh đọc báo Hà Giang.</h3>
						<p></p>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage1 lanhdaotrunguongImg"
							data-src="images/PHO CHU NHIEM UBTC1.png" style="object-fit: contain;" alt="Phó Chủ nhiệm Ủy ban Tài chính, Ngân sách của Quốc hội (khóa XV) Phạm Thúy Chinh
									phát biểu tại buổi thăm, chúc Tết tập thể lãnh đạo, cán bộ, phóng viên,
									biên tập viên Báo Hà Giang."> </img></a>
					<div class="desc">
						<!-- <span class="meta">Năm 2024</span> -->
						<h3>Phó Chủ nhiệm Ủy ban Tài chính, Ngân sách của Quốc hội (khóa XV) Phạm Thúy Chinh
							phát biểu tại buổi thăm, chúc Tết tập thể lãnh đạo, cán bộ, phóng viên, biên tập
							viên Báo Hà Giang.</h3>
						<p></p>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage1"
							src="images/PHO CHU NHIEM UBTC2.png" style="object-fit: contain;" alt="Phó Chủ nhiệm Ủy ban Tài chính, Ngân sách của Quốc hội (khóa XV) Phạm Thúy Chinh
									tặng quà, chúc Tết tập thể lãnh đạo, cán bộ, phóng viên, biên tập viên Báo Hà
									Giang."> </img></a>
					<div class="desc">
						<!-- <span class="meta">Năm 2024</span> -->
						<h3>Phó Chủ nhiệm Ủy ban Tài chính, Ngân sách của Quốc hội (khóa XV) Phạm Thúy Chinh
							tặng quà, chúc Tết tập thể lãnh đạo, cán bộ, phóng viên, biên tập viên Báo Hà
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
        $(".lanhdaotrunguongImg").lazy();
      }
      $("#customModal2").show();
      if ($("#customModal2 .owl-carousel").length <= 0) {
        $("#customModal2 .myCarousel").owlCarousel({
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

      $("#customModal2 .closeModal").on("click", () => {
        $("#customModal2").hide();
      });
    });

    let banbientapContent = `<div id="customModal3" class="modal">
	<span class="closeModal">×</span>
	<div class="body">
		<div class="box-img myCarousel">
			<div class="item active">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage3"
							src="images/0b1d951d2b8087dede91.png" alt="TỔNG BIÊN TẬP">
						</img></a>
					<div class="desc" style="text-align: center;">
						<!-- <span class="meta">15, Feb 2018</span> -->
						<h2><a>TỔNG BIÊN TẬP</a></h2>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage3 lanhdaotinhImg"
							data-src="images/BINH MINH.png" alt="PHÓ TỔNG BIÊN TẬP"> </img></a>
					<div class="desc" style="text-align: center;">
						<h2><a>PHÓ TỔNG BIÊN TẬP</a></h2>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage3 lanhdaotinhImg"
							data-src="images/404fb2f70d6aa134f87b.png" alt="PHÓ TỔNG BIÊN TẬP">
						</img></a>
					<div class="desc" style="text-align: center;">
						<h2><a>PHÓ TỔNG BIÊN TẬP</a></h2>
					</div>
				</div>
			</div>
			<!-- 3 -->
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage3 lanhdaotinhImg"
							data-src="images/TAP THE PHONG.png" alt="PHÒNG PHÓNG VIÊN">
						</img></a>
					<div class="desc" style="text-align: center;">
						<h2><a>PHÒNG PHÓNG VIÊN</a></h2>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage3 lanhdaotinhImg"
							data-src="images/23a.png" alt="PHÒNG PHÓNG VIÊN"> </img></a>
					<div class="desc" style="text-align: center;">
						<h2><a>PHÒNG PHÓNG VIÊN</a></h2>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage3 lanhdaotinhImg"
							data-src="images/PHUONG TIEN.png" alt="PHÒNG PHÓNG VIÊN"> </img></a>
					<div class="desc" style="text-align: center;">
						<h2><a>PHÒNG PHÓNG VIÊN</a></h2>
					</div>
				</div>
			</div>
			<!-- 6 -->
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage3 lanhdaotinhImg"
							data-src="images/IMG_2621.png" alt="PHÒNG THƯ KÝ - XUẤT BẢN">
						</img></a>
					<div class="desc" style="text-align: center;">
						<h2><a>PHÒNG THƯ KÝ - XUẤT BẢN</a></h2>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage3 lanhdaotinhImg"
							data-src="images/IMG_2581.png" alt="PHÒNG THƯ KÝ - XUẤT BẢN">
						</img></a>
					<div class="desc" style="text-align: center;">
						<h2><a>PHÒNG THƯ KÝ - XUẤT BẢN</a></h2>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage3 lanhdaotinhImg"
							data-src="images/IMG_2591.png" alt="PHÒNG THƯ KÝ - XUẤT BẢN">
						</img></a>
					<div class="desc" style="text-align: center;">
						<h2><a>PHÒNG THƯ KÝ - XUẤT BẢN</a></h2>
					</div>
				</div>
			</div>
			<!-- 9 -->
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage3 lanhdaotinhImg"
							data-src="images/f2db91b6cd13614d3802.png" alt="PHÒNG BÁO ĐIỆN TỬ">
						</img></a>
					<div class="desc" style="text-align: center;">
						<h2><a>PHÒNG BÁO ĐIỆN TỬ</a></h2>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage3 lanhdaotinhImg"
							data-src="images/ec99220ab99015ce4c81.png" alt="PHÒNG BÁO ĐIỆN TỬ">
						</img></a>
					<div class="desc" style="text-align: center;">
						<h2><a>PHÒNG BÁO ĐIỆN TỬ</a></h2>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage3 lanhdaotinhImg"
							data-src="images/QUANG NAM.png" alt="PHÒNG BÁO ĐIỆN TỬ"> </img></a>
					<div class="desc" style="text-align: center;">
						<h2><a>PHÒNG BÁO ĐIỆN TỬ</a></h2>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage3 lanhdaotinhImg"
							data-src="images/cfecaa7231e89db6c4f9.png" alt="PHÒNG BÁO ĐIỆN TỬ">
						</img></a>
					<div class="desc" style="text-align: center;">
						<h2><a>PHÒNG BÁO ĐIỆN TỬ</a></h2>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage3 lanhdaotinhImg"
							data-src="images/KHACH MOI.png" alt="PHÒNG BÁO ĐIỆN TỬ"> </img></a>
					<div class="desc" style="text-align: center;">
						<h2><a>PHÒNG BÁO ĐIỆN TỬ</a></h2>
					</div>
				</div>
			</div>
			<!-- 14 -->
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage3 lanhdaotinhImg"
							data-src="images/PHONG HANH CHINH HIEN NAY.png" alt="PHÒNG HÀNH CHÍNH - TRỊ SỰ">
						</img></a>
					<div class="desc" style="text-align: center;">
						<h2><a>PHÒNG HÀNH CHÍNH - TRỊ SỰ</a></h2>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage3 lanhdaotinhImg"
							data-src="images/1NU CONG.png" alt="PHÒNG HÀNH CHÍNH - TRỊ SỰ">
						</img></a>
					<div class="desc" style="text-align: center;">
						<h2><a>PHÒNG HÀNH CHÍNH - TRỊ SỰ</a></h2>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage3 lanhdaotinhImg"
							data-src="images/1D1A0243.png" alt="PHÒNG HÀNH CHÍNH - TRỊ SỰ">
						</img></a>
					<div class="desc" style="text-align: center;">
						<h2><a>PHÒNG HÀNH CHÍNH - TRỊ SỰ</a></h2>
					</div>
				</div>
			</div>
			<!-- 17 -->
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage3 lanhdaotinhImg"
							data-src="images/BD2.png" alt="PHÒNG BẠN ĐỌC - THƯ VIỆN - TƯ LIỆU">
						</img></a>
					<div class="desc" style="text-align: center;">
						<h2><a>PHÒNG BẠN ĐỌC - THƯ VIỆN - TƯ LIỆU</a></h2>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage3 lanhdaotinhImg"
							data-src="images/BD 5.png" alt="PHÒNG BẠN ĐỌC - THƯ VIỆN - TƯ LIỆU">
						</img></a>
					<div class="desc" style="text-align: center;">
						<h2><a>PHÒNG BẠN ĐỌC - THƯ VIỆN - TƯ LIỆU</a></h2>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage3 lanhdaotinhImg"
							data-src="images/BD 4.png" alt="PHÒNG BẠN ĐỌC - THƯ VIỆN - TƯ LIỆU">
						</img></a>
					<div class="desc" style="text-align: center;">
						<h2><a>PHÒNG BẠN ĐỌC - THƯ VIỆN - TƯ LIỆU</a></h2>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage3 lanhdaotinhImg"
							data-src="images/BD1.png" alt="PHÒNG BẠN ĐỌC - THƯ VIỆN - TƯ LIỆU">
						</img></a>
					<div class="desc" style="text-align: center;">
						<h2><a>PHÒNG BẠN ĐỌC - THƯ VIỆN - TƯ LIỆU</a></h2>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage3"
							src="images/BD 3.png" alt="PHÒNG BẠN ĐỌC - THƯ VIỆN - TƯ LIỆU">
						</img></a>
					<div class="desc" style="text-align: center;">
						<h2><a>PHÒNG BẠN ĐỌC - THƯ VIỆN - TƯ LIỆU</a></h2>
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
        $(".lanhdaotinhImg").lazy();
      }

      $("#customModal3").show();
      if ($("#customModal3 .owl-carousel").length <= 0) {
        $("#customModal3 .myCarousel").owlCarousel({
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

      $("#customModal3 .closeModal").on("click", () => {
        $("#customModal3").hide();
      });
    });

    let lanhdaotinhContent = `<div id="customModal4" class="modal">
	<span class="closeModal">×</span>
	<div class="body">
		<div class="box-img myCarousel">
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage " src="images/1.png"
							style="object-fit: contain;" alt="Bí thư Tỉnh ủy Hoàng Thừa
									ký duyệt Măng - sét Báo Hà Giang
									số đầu tiênsau tái lập tỉnh."> </img></a>
					<div class="desc">
						<!-- <span class="meta">Ngày 25.9.1991</span> -->
						<h3>Bí thư Tỉnh ủy Hoàng Thừa ký duyệt Măng - sét Báo Hà Giang số đầu tiênsau tái
							lập tỉnh.</h3>
						<p></p>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage bientapImg" data-src="images/2a2.png"
							style="object-fit: contain;" alt="Bí thư Tỉnh ủy Vũ Ngọc Kỳ với lãnh đạo
									Báo Hà Giang tại Hội Báo Xuân."> </img></a>
					<div class="desc">
						<!-- <span class="meta">Năm 2003</span> -->
						<h3>Bí thư Tỉnh ủy Vũ Ngọc Kỳ với lãnh đạo Báo Hà Giang tại Hội Báo Xuân.</h3>
						<p></p>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage bientapImg" data-src="images/2a1.png"
							style="object-fit: contain;" alt="Bí thư Tỉnh ủy Vũ Ngọc Kỳ thăm, tặng quà cán bộ, công nhân viên
									Báo Hà Giang."> </img></a>
					<div class="desc">
						<!-- <span class="meta">Tháng 2.1998</span> -->
						<h3>Bí thư Tỉnh ủy Vũ Ngọc Kỳ thăm, tặng quà cán bộ, công nhân viên Báo Hà Giang.
						</h3>
						<p></p>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage bientapImg" data-src="images/7.png"
							style="object-fit: contain;" alt="Phó Bí thư Tỉnh ủy, Chủ tịch HĐND tỉnh Giàng Văn
									Quẩy thăm, chúc mừng Báo Hà Giang nhân kỷ niệm 75
									năm Ngày Báo chí Cách mạng Việt Nam."> </img></a>
					<div class="desc">
						<!-- <span class="meta">Năm 2000</span> -->
						<h3>Phó Bí thư Tỉnh ủy, Chủ tịch HĐND tỉnh Giàng Văn Quẩy thăm, chúc mừng Báo Hà
							Giang nhân kỷ niệm 75 năm Ngày Báo chí Cách mạng Việt Nam.</h3>
						<p></p>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage bientapImg" data-src="images/3.png"
							style="object-fit: contain;" alt="Đồng chí Triệu Tài Vinh,
									Bí thư Tỉnh ủy trao Huân chương
									Lao động hạng Nhất cho
									Báo Hà Giang."> </img></a>
					<div class="desc">
						<!-- <span class="meta"> Tháng 4.2014</span> -->
						<h3>Đồng chí Triệu Tài Vinh, Bí thư Tỉnh ủy trao Huân chương Lao động hạng Nhất cho
							Báo Hà Giang.</h3>
						<p></p>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage bientapImg"
							data-src="images/8 QUY.png" style="object-fit: contain;" alt="Đồng chí Đỗ Trọng Quý,
									Chủ tịch UBND tỉnh cùng lãnh đạo
									Ban biên tập và cán bộ Báo Hà Giang."> </img></a>
					<div class="desc">
						<!-- <span class="meta">Năm 2000</span> -->
						<h3>Đồng chí Đỗ Trọng Quý, Chủ tịch UBND tỉnh cùng lãnh đạo Ban biên tập và cán bộ
							Báo Hà Giang.</h3>
						<p></p>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage bientapImg"
							data-src="images/3a.VINH.png" style="object-fit: contain;" alt="Đồng chí Triệu Tài Vinh, Bí thư Tỉnh ủy và đồng chí Đàm Văn Bông,
									Phó Bí thư Tỉnh ủy, Chủ tịch UBND tỉnh với các phóng viên
									tại Đại hội XV Đảng bộ tỉnh."> </img></a>
					<div class="desc">
						<!-- <span class="meta"></span> -->
						<h3>Đồng chí Triệu Tài Vinh, Bí thư Tỉnh ủy và đồng chí Đàm Văn Bông, Phó Bí thư
							Tỉnh ủy, Chủ tịch UBND tỉnh với các phóng viên tại Đại hội XV Đảng bộ tỉnh.
						</h3>
						<p></p>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage bientapImg"
							data-src="images/IMG_6861.png" style="object-fit: contain;" alt="Đồng chí Đặng Quốc Khánh, Ủy viên Ban Chấp hành Trung ương Đảng, Bí thư Tỉnh ủy,
									Trưởng đoàn ĐBQH khóa XV đơn vị Tỉnh Hà Giang thăm, chúc mừng và chụp ảnh lưu
									niệm với Ban biên tập, phóng viên, biên tập viên Báo Hà Giang."> </img></a>
					<div class="desc">
						<!-- <span class="meta">Ngày 21.6.2022</span> -->
						<h3>Đồng chí Đặng Quốc Khánh, Ủy viên Ban Chấp hành Trung ương Đảng, Bí thư Tỉnh ủy,
							Trưởng đoàn ĐBQH khóa XV đơn vị Tỉnh Hà Giang thăm, chúc mừng và chụp ảnh lưu
							niệm với Ban biên tập, phóng viên, biên tập viên Báo Hà Giang. </h3>
						<p></p>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage bientapImg"
							data-src="images/bi thu khanh.png" style="object-fit: contain;" alt="Bí thư Tỉnh ủy
									Đặng Quốc Khánh
									xem ấn phẩm báo
									Xuân Hà Giang."> </img></a>
					<div class="desc">
						<!-- <span class="meta">Năm 2020</span> -->
						<h3>Bí thư Tỉnh ủy Đặng Quốc Khánh xem ấn phẩm báo Xuân Hà Giang. </h3>
						<p></p>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage bientapImg"
							data-src="images/images1434104_20190201_094617.png" style="object-fit: contain;" alt="Bí thư Tỉnh ủy Triệu
									Tài Vinh và Phó Bí
									Thư Tỉnh ủy Nguyễn
									Mạnh Dũng xem ấn
									phẩm báo Hà Giang."> </img></a>
					<div class="desc">
						<!-- <span class="meta">Năm 2019</span> -->
						<h3>Bí thư Tỉnh ủy Triệu Tài Vinh và Phó Bí Thư Tỉnh ủy Nguyễn Mạnh Dũng xem ấn phẩm
							báo Hà Giang. </h3>
						<p></p>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage bientapImg"
							data-src="images/01_7a.png" style="object-fit: contain;" alt="Đồng chí Vương Mí Vàng, Phó Bí thư Thường trực Tỉnh ủy và các đồng chí lãnh đạo
									tỉnh xem báo, tạp chí được triển lãm tại Hội báo Xuân."> </img></a>
					<div class="desc">
						<!-- <span class="meta">Năm 2012</span> -->
						<h3>Đồng chí Vương Mí Vàng, Phó Bí thư Thường trực Tỉnh ủy và các đồng chí lãnh đạo
							tỉnh xem báo, tạp chí được triển lãm tại Hội báo Xuân. </h3>
						<p></p>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage bientapImg" data-src="images/13a.png"
							style="object-fit: contain;" alt="Báo Hà Giang đón nhận Huân chương Lao động hạng Nhì.">
						</img></a>
					<div class="desc">
						<!-- <span class="meta">Năm 2009</span> -->
						<h3>Báo Hà Giang đón nhận Huân chương Lao động hạng Nhì. </h3>
						<p></p>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage bientapImg" data-src="images/31a1.png"
							style="object-fit: contain;" alt="Lãnh đạo tỉnh tặng Bằng khen cho các tập thể, cá nhân Báo Hà Giang
									nhân Lễ kỷ niệm 45 năm Ngày Báo Hà Giang ra số đầu tiên."> </img></a>
					<div class="desc">
						<!-- <span class="meta"></span> -->
						<h3>Lãnh đạo tỉnh tặng Bằng khen cho các tập thể, cá nhân Báo Hà Giang nhân Lễ kỷ
							niệm 45 năm Ngày Báo Hà Giang ra số đầu tiên. </h3>
						<p></p>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage bientapImg" data-src="images/9.png"
							style="object-fit: contain;" alt="Chủ tịch UBND tỉnh Đàm Văn Bông tặng Bằng khen cho các phòng nghiệp vụ
									Báo Hà Giang."> </img></a>
					<div class="desc">
						<!-- <span class="meta">Năm 2014</span> -->
						<h3>Chủ tịch UBND tỉnh Đàm Văn Bông tặng Bằng khen cho các phòng nghiệp vụ Báo Hà
							Giang. </h3>
						<p></p>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage bientapImg"
							data-src="images/01_10a.png" style="object-fit: contain;" alt="Phó Bí thư Thường trực Tỉnh ủy Thào Hồng Sơn;
									Chủ tịch UBND tỉnh Nguyễn Văn Sơn chúc mừng các cơ quan báo chí
									nhân dịp kỷ niệm 95 năm Ngày Báo chí Cách mạng Việt Nam."> </img></a>
					<div class="desc">
						<!-- <span class="meta">Năm 2020</span> -->
						<h3>Phó Bí thư Thường trực Tỉnh ủy Thào Hồng Sơn; Chủ tịch UBND tỉnh Nguyễn Văn Sơn
							chúc mừng các cơ quan báo chí nhân dịp kỷ niệm 95 năm Ngày Báo chí Cách mạng
							Việt Nam. </h3>
						<p></p>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage bientapImg"
							data-src="images/thao hong son.png" style="object-fit: contain;" alt="Phó Bí thư Thường trực Tỉnh ủy, Chủ tịch HĐND tỉnh Thào Hồng Sơn
									thăm phòng Báo Hà Giang điện tử."> </img></a>
					<div class="desc">
						<!-- <span class="meta">Năm 2021</span> -->
						<h3>Phó Bí thư Thường trực Tỉnh ủy, Chủ tịch HĐND tỉnh Thào Hồng Sơn thăm phòng Báo
							Hà Giang điện tử. </h3>
						<p></p>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage bientapImg"
							data-src="images/11nguyen son.png" style="object-fit: contain;" alt="Chủ tịch UBND tỉnh Nguyễn Văn Sơn tặng hoa chúc mừng Báo Hà Giang
									nhân kỷ niệm 98 năm Ngày Báo chí cách mạng Việt Nam."> </img></a>
					<div class="desc">
						<!-- <span class="meta">Năm 2023</span> -->
						<h3>Chủ tịch UBND tỉnh Nguyễn Văn Sơn tặng hoa chúc mừng Báo Hà Giang nhân kỷ niệm
							98 năm Ngày Báo chí cách mạng Việt Nam. </h3>
						<p></p>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage bientapImg"
							data-src="images/VU MANH HA.png" style="object-fit: contain;" alt="Đồng chí Vũ Mạnh
									Hà, Ủy viên BTV
									Tỉnh ủy, Trưởng
									Ban Tuyên Giáo
									Tỉnh ủy thăm, tặng
									quà Báo Hà Giang."> </img></a>
					<div class="desc">
						<!-- <span class="meta">Năm 2023</span> -->
						<h3>Đồng chí Vũ Mạnh Hà, Ủy viên BTV Tỉnh ủy, Trưởng Ban Tuyên Giáo Tỉnh ủy thăm,
							tặng quà Báo Hà Giang. </h3>
						<p></p>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage bientapImg"
							data-src="images/CAC DONG CHI LANH DAO TINH.png" style="object-fit: contain;" alt="Các đồng chí lãnh đạo tỉnh và đại biểu xem
									các ấn phẩm trưng bày tại Hội báo Xuân
									Giáp Thìn."> </img></a>
					<div class="desc">
						<!-- <span class="meta">Năm 2024</span> -->
						<h3>Các đồng chí lãnh đạo tỉnh và đại biểu xem các ấn phẩm trưng bày tại Hội báo
							Xuân Giáp Thìn. </h3>
						<p></p>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage"
							src="images/VUONG NGOC HA.png" style="object-fit: contain;" alt="Đồng chí Vương Ngọc Hà, Trưởng Ban Tuyên
									giáo Tỉnh ủy thăm, làm việc tại Báo Hà Giang."> </img></a>
					<div class="desc">
						<!-- <span class="meta">Tháng 2.2024</span> -->
						<h3>Đồng chí Vương Ngọc Hà, Trưởng Ban Tuyên giáo Tỉnh ủy thăm, làm việc tại Báo Hà
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
        $(".bientapImg").lazy();
      }
      $("#customModal4").show();
      if ($("#customModal4 .owl-carousel").length <= 0) {
        $("#customModal4 .myCarousel").owlCarousel({
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

      $("#customModal4 .closeModal").on("click", () => {
        $("#customModal4").hide();
      });
    });

    let cungbacContent = `<div id="customModal5" class="modal">
	<span class="closeModal">×</span>
	<div class="body">
		<div class="box-img myCarousel">
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage cungbacImg"
							src="images/anh bac 1.jpg" style="object-fit: contain;" alt="Cán bộ báo chí cũng là chiến sỹ cách mạng.
							Cây bút, trang giấy là vũ khí sắc bén của họ"> </img></a>
					<div class="desc">
						<h3>“Cán bộ báo chí cũng là chiến sỹ cách mạng. Cây bút, trang giấy là vũ khí sắc bén của
							họ”</h3>
						<p></p>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="article">
					<a class="blog-img"> <img class="img-responsive showImage cungbacImg"
							src="images/anh bac 2.jpg" style="object-fit: contain;"
							alt="Bài viết đăng trên báo Hà Giang số ra ngày 20.6.1995."> </img></a>
					<div class="desc">
						<h3>Bài viết đăng trên báo Hà Giang số ra ngày 20.6.1995.</h3>
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
        $(".cungbacImg").lazy();
      }
      $("#customModal5").show();
      if ($("#customModal5 .owl-carousel").length <= 0) {
        $("#customModal5 .myCarousel").owlCarousel({
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

      $("#customModal5 .closeModal").on("click", () => {
        $("#customModal5").hide();
        document.getElementById("cungbac").remove();
      });
    });

    $(".loigioithieu .item").on("click", () => {
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

    $(".work-img").lazy();
    // $(".lanhdaotinhImg").lazy();
    // $(".bientapImg").lazy();
    // $(".cungbacImg").lazy();
    // $(".hoatdongImg").lazy();

    // function showModal(idModal, nameImgClass) {
    //   let imgs = Array.from(document.getElementsByClassName(nameImgClass));
    //   let modal = document.getElementById(idModal);
    //   let modalImg = modal.querySelector(".modal-content");
    //   let captionText = modal.querySelector(".caption");

    //   let currentImgShow = null;

    //   $("." + nameImgClass).on("click", (event) => {
    //     var clickedElement = event.target;
    //     currentImgShow = clickedElement;
    //     modal.style.display = "block";
    //     modalImg.src = clickedElement.src;
    //     captionText.innerHTML = clickedElement.alt;
    //   });

    //   $("#" + idModal + " .actions .next").on("click", () => {
    //     let findIndex = imgs.indexOf(currentImgShow);

    //     if (findIndex == imgs.length - 1) {
    //       findIndex = 0;
    //     } else {
    //       findIndex = findIndex + 1;
    //     }

    //     currentImgShow = imgs[findIndex];
    //     modal.style.display = "block";
    //     modalImg.src = currentImgShow.getAttribute("data-src");
    //     captionText.innerHTML = currentImgShow.alt;
    //   });

    //   $("#" + idModal + " .actions .prev").on("click", () => {
    //     let findIndex = imgs.indexOf(currentImgShow);

    //     if (findIndex == 0) {
    //       findIndex = imgs.length - 1;
    //     } else {
    //       findIndex = findIndex - 1;
    //     }
    //     currentImgShow = imgs[findIndex];
    //     modal.style.display = "block";
    //     modalImg.src = currentImgShow.getAttribute("data-src");
    //     captionText.innerHTML = currentImgShow.alt;
    //   });

    //   // Get the <span> element that closes the modal
    //   modal.querySelector(".close").onclick = function () {
    //     modal.style.display = "none";
    //   };

    //   modal.querySelector(".body").onclick = function () {
    //     modal.style.display = "none";
    //   };
    // }

    // function showModalCus(idModal, nameImgClass) {
    //   let imgs = Array.from(document.getElementsByClassName(nameImgClass));
    //   let modal = document.getElementById(idModal);
    //   let modalImg = modal.querySelector(".modal-content");
    //   let captionText = modal.querySelector(".caption");

    //   let currentImgShow = null;

    //   $("." + nameImgClass).on("click", (event) => {
    //     var clickedElement = event.target;
    //     currentImgShow = clickedElement;
    //     modal.style.display = "block";
    //     modalImg.src = clickedElement.getAttribute("data-src");
    //     captionText.innerHTML = clickedElement.getAttribute("caption");
    //   });

    //   $("#" + idModal + " .actions .next").on("click", () => {
    //     let findIndex = imgs.indexOf(currentImgShow);

    //     if (findIndex == imgs.length - 1) {
    //       findIndex = 0;
    //     } else {
    //       findIndex = findIndex + 1;
    //     }
    //     imgs[findIndex].click();
    //   });

    //   $("#" + idModal + " .actions .prev").on("click", () => {
    //     let findIndex = imgs.indexOf(currentImgShow);

    //     if (findIndex == 0) {
    //       findIndex = imgs.length - 1;
    //     } else {
    //       findIndex = findIndex - 1;
    //     }

    //     imgs[findIndex].click();
    //   });

    //   // Get the <span> element that closes the modal
    //   modal.querySelector(".close").onclick = function () {
    //     modal.style.display = "none";
    //   };

    //   modal.querySelector(".body").onclick = function () {
    //     modal.style.display = "none";
    //   };
    // }

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

$(document).ready(function () {
  $(".banner-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    speed: 500,
    fade: true,
    cssEase: 'linear', autoplay: true, autoplaySpeed: 2500,
  });
  $(".banner-slider-rtl").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    rtl: true, autoplay: true, autoplaySpeed: 2500,
  });
  $(".seller-slider").slick({
    //  centerMode: true,
    //  centerPadding: "0",
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".testimonial-slider").slick({
    centerMode: true,
    centerPadding: "0",
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".event-slider").slick({
    infinite: false,
    speed: 300,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: { centerMode: true, slidesToShow: 1.2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
          centerMode: true,
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  });
  $(".product-slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".product-slider-nav",
  });
  $(".product-slider-nav").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    margin: 20,
    arrows: false,
    asNavFor: ".product-slider-for",
    focusOnSelect: true,
  });

  let navbarMenu = document.querySelector(".navbar .navbar-collapse");
  closeMenu = document.createElement("div");
  closeMenu.className = "close";
  var iElement = document.createElement("i");
  $(navbarMenu).find(".logo-sm").append(closeMenu);
  closeMenu.appendChild(iElement);
  iElement.className = "fa-solid fa-xmark";
  let navbarMenuToggler = document.querySelector(".navbar-toggler");
  console.log(closeMenu);
  $(closeMenu).click(function () {
    $(navbarMenu).toggleClass("show");
    $("body").toggleClass("height-fixed");
    $(".height-fixed-overlay").remove();
  });
  $(navbarMenuToggler).click(function () {
    $("body").toggleClass("height-fixed");
    if ($("body").hasClass("height-fixed")) {
      $("body").append('<div class="height-fixed-overlay"></div>');
    } else {
      $(".height-fixed-overlay").remove();
    }
  });
  $(document).on("click", ".height-fixed-overlay", function () {
    $(navbarMenu).toggleClass("show");

    $("body").toggleClass("height-fixed");

    $(".height-fixed-overlay").remove();
  });

  let filterMenu = document.querySelector("#sidebar-filter");
  let filterOpen = document.querySelector("#sidebar-btn");
  let filterClose = document.querySelector("#sidebar-close");
  $(filterOpen).click(function () {
    $("body").toggleClass("height-fixed");
    $(filterMenu).toggleClass("show");
  });
  $(filterClose).click(function () {
    $("body").toggleClass("height-fixed");
    $(filterMenu).toggleClass("show");
  });
  let searchMenu = document.querySelector(".search-btn > form");
  let searchOpen = document.querySelector(".search-btn > .search-toggler");
  console.log(searchOpen);
  $(searchOpen).click(function () {
    $(searchMenu).toggleClass("show");
  });

  //for zoom effect in product
  let zoomer = (function () {
    // Select all elements with class .product-zoom-container
    let zoomContainers = document.querySelectorAll(".product-zoom-container");

    // Iterate over each matched element
    zoomContainers.forEach(function (container) {
      let div, overlayBox; // Initialize div and overlayBox variables

      // Add event listener for hover
      container.addEventListener("mouseenter", function () {
        // Reset div and overlayBox variables
        div = container.parentElement.querySelector(".img-2");
        overlayBox = container.querySelector(".overlay-box");

        // Check if img-2 and overlay-box already exist
        if (!div && !overlayBox) {
          // Retrieve the URL of the image in img-1
          let originalImg = container.querySelector("img");
          let imgUrl = originalImg.getAttribute("src");

          // Create a div element with the class name img-2
          div = document.createElement("div");
          div.className = "img-2";

          // Set the background image URL for img-2
          div.style.backgroundImage = "url('" + imgUrl + "')";

          // Find the slider wrapper
          let sliderWrapper = container.closest(".slider-wrapper");

          // Append the div element to slider wrapper
          if (sliderWrapper) {
            sliderWrapper.appendChild(div);
          }

          // Create overlay box
          overlayBox = document.createElement("div");
          overlayBox.className = "overlay-box";
          container.appendChild(overlayBox);

          // Set initial position for overlay box
          overlayBox.style.left = "0px";
          overlayBox.style.top = "0px";

          // Add mousemove event listener to each .product-zoom-container
          container.addEventListener(
            "mousemove",
            function (e) {
              let original = originalImg,
                magnified = div,
                style = magnified.style,
                imgRect = original.getBoundingClientRect(),
                x = e.clientX - imgRect.left,
                y = e.clientY - imgRect.top,
                imgWidth = original.offsetWidth,
                imgHeight = original.offsetHeight,
                xperc = (x / imgWidth) * 100,
                yperc = (y / imgHeight) * 100;

              // Adjust background position
              style.backgroundPositionX = xperc - 0 + "%";
              style.backgroundPositionY = yperc - 0 + "%";

              // Adjust position of overlay box
              let overlayX = x - overlayBox.offsetWidth / 2;
              let overlayY = y - overlayBox.offsetHeight / 2;
              overlayX = Math.min(overlayX, imgWidth - overlayBox.offsetWidth);
              overlayY = Math.min(
                overlayY,
                imgHeight - overlayBox.offsetHeight
              );
              overlayX = Math.max(overlayX, 0);
              overlayY = Math.max(overlayY, 0);
              overlayBox.style.left = overlayX + "px";
              overlayBox.style.top = overlayY + "px";
            },
            false
          );

          // Set opacity to 1 when hovering in
          div.style.opacity = 1;
        }
      });

      container.addEventListener("mouseleave", function () {
        // Find the img-2 and overlay-box
        let divToRemove = container
          .closest(".slider-wrapper")
          .querySelector(".img-2");
        let overlayBoxToRemove = container
          .closest(".slider-wrapper")
          .querySelector(".overlay-box");

        // Remove img-2 and overlay-box if they exist
        if (divToRemove) {
          divToRemove.parentNode.removeChild(divToRemove);
        }
        if (overlayBoxToRemove) {
          overlayBoxToRemove.parentNode.removeChild(overlayBoxToRemove);
        }
      });
    });
  })();


  //for servicestoggler plus minus
  let servicesToggler = document.querySelectorAll(".services-toggler");
  $(servicesToggler).click(function () {
    $(this).next().toggleClass("show"); // Toggle the "show" class on the next sibling
    $(this).children().toggleClass("minus-icon");
  });


  //for animation after scroll

  const inViewport = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("appear");
        // Unobserve the target element once it becomes intersecting
        observer.unobserve(entry.target);
      }
    });
  };

  const Obs = new IntersectionObserver(inViewport);
  const obsOptions = {
    // Add 'once' option to trigger the callback function only once
    once: true,
  };

  // Attach observer to every [data-inviewport] element:
  document.querySelectorAll(".animista").forEach((el) => {
    Obs.observe(el, obsOptions);
  });


});

$(document).ready(function () {
  $('.about-gallery-wrapper').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    }
  });
});
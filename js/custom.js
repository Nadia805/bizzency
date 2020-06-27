$(function () {
    $('.venobox').venobox();


    $(".slick-slider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: false,
        centerMode: true,
        centerPadding: '0',
        nextArrow: '.next',
        prevArrow: '.previous',
        responsive: [
    {
      breakpoint: 993,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        autoplay:true
      }
    },
    {
      breakpoint: 321,
      settings: {
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        autoplay:true
        
      }
    }
  ]

    });

    $(".testi-slider").slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: false,
        centerMode: true,
        centerPadding: '0',
        nextArrow: '.right-arrow',
        prevArrow: '.left-arrow',
        responsive: [
    {
      breakpoint: 993,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        autoplay:true
      }
    }
  ]

    });

    $(".service-slider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: false,
        centerMode: true,
        centerPadding: '0',
        nextArrow: '.right-arrow',
        prevArrow: '.left-arrow',
        responsive: [
    {
      breakpoint: 993,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        autoplay:true
      }
    },
    {
      breakpoint: 766,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        autoplay:true
        
      }
    }
  ]

    });


    $(".blog-slider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplaySpeed: 1500,
        dots: false,
        centerMode: true,
        centerPadding: '0',
        nextArrow: '.right-button',
        prevArrow: '.left-button',
        responsive: [
    {
      breakpoint: 993,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        autoplay:true
      }
    },
    {
      breakpoint: 321,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        autoplay:true
        
      }
    }
  ]

    });
    $('.toggle-bar').click(function () {
        $('.navbar-nav').toggle();
    });


    $('.search').click(function () {
        $('.search-overlay').addClass('active');
    });

    $('.close-btn').click(function () {
        $('.search-overlay').removeClass('active');
    });

    // animate the scroll back to top
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html,body').animate({
            scrollTop: 0,
        }, 1500);
    });



    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        callback: function (box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null, // optional scroll container selector, otherwise use window,
        resetAnimation: true, // reset animation on end (default is true)
    });
    wow.init();
    
    
    
        
//    sticky menu
     $(window).scroll(function(){
        var scrollAmount = $(window).scrollTop();
         if (scrollAmount > 400){
             $('.navbar').addClass('.sticky')
             
         }
         else{
             $('.navbar').removeClass('.sticky')
         }
    });







});

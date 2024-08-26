$(function () {
  // バーガーメニュー
  $('.menu-btn').on('click', function () {
    $(this).toggleClass('open');
    $('nav').toggleClass('open');
  });
  //#news
  $('.tgglSldr').on('click', function () {
    $('.tgglSldr').removeClass('open');
    $('.tgglSldr + dd').stop(1).slideUp();
    $(' + *', this).stop(1).slideToggle();
    $(this).toggleClass('open');
  });

  //#photos
  $('#photos .slick_for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slick_nav',
    autoplay: true,
    centerMode: true,
    // variableWidth: true,
  });
  $('#photos .slick_nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slick_for',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    // autoplay: true,
    variableWidth: true,
  });

  // facility.html#food
  $('#food_menu_photos').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    centerMode: true,
    autoplay: true,
    variableWidth: true,
  });

  //family.html
  // $('.slick_wrap').hover(function () {
  //   // var id = $(this).id;
  //   let id = $(this).attr('id');
  //   console.log(id);
  //   // alert(id);
  //   for (let i = 1; i <= 3; i++) {
  //     setTimeout(function () {
  //       $('>img', this).stop(1).animate({ 'opacity': 1 }, 1500)
  //       // .fadeOut()
  //       .attr({ 'src': 'img/family/' + id + '0' + i + '.jpg' })
  //       .stop(1).animate({ 'opacity': 1 }, 500);
  //     }, 500);
  //     if (i > 3) {
  //       i = 1;
  //       continue;
  //     }
  //   }

  // },
  //   function () {
  //     let id = $(this).attr('id');
  //     $('>img', this).fadeOut().attr({ 'src': 'img/family/' + id + '01.jpg' }).stop(1).animate({ 'opacity': 0 }, 0);
  //   }

  //   // over
  //   var id = $(this).id;
  //   for(var i=1;i<=3;i++) {
  //     $('>img',this).attr('src','img/family/'+ id + 0+ i + '.jpg');
  //   }
  // }, function () {
  //   // out
  //   $(this).stop(1);
  // }
  // );

  // $('.slick_family_spa').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   fade: true,
  //   speed:500,
  //   autoplay: true,
  //   autoplaySpeed: 1500,
  //   centerMode: true,
  //   pauseOnFocus: false,
  //   pauseOnHover: false,
  //   adaptiveHeight:true,
  //   variableWidth:false,
  // });

  // $('.slick_family_food').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   fade: true,
  //   speed:500,
  //   autoplay: true,
  //   autoplaySpeed: 500,
  //   centerMode: true,
  //   pauseOnFocus: false,
  //   pauseOnHover: false,
  //   adaptiveHeight:true,
  //   variableWidth:false,
  // });

  // $('.slick_family_hiking').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   fade: true,
  //   speed:1500,
  //   autoplay: true,
  //   autoplaySpeed: 1000,
  //   centerMode: true,
  //   pauseOnFocus: false,
  //   pauseOnHover: false,
  // });

  // $('.slick_family_river').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   fade: true,
  //   speed:1500,
  //   autoplay: true,
  //   autoplaySpeed: 1000,
  //   centerMode: true,
  //   pauseOnFocus: false,
  //   pauseOnHover: false,
  // });

  // qa.html
  $('#qa_list dt').on('click', function () {
    var el = $(this);
    $('#qa_list dd').stop(1).slideUp();
    $('+dd', this).stop(1).slideToggle();
    function tglClass() {
      // $('#qa_list dt').removeClass('open');
      $('+dd', el).toggleClass('open');
      $(el).toggleClass('open');
    }
    setTimeout(tglClass, 50, el);
  });
});
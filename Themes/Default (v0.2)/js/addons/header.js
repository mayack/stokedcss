$(function() {

  $('.s-headerBurger').click(function() {
    $(this).parents('.s-header').toggleClass('navMobileVisible');
  });

});

$(document).scroll(function() {

  var scrollOffset = $(document).scrollTop();
  var header = $('.s-header');
  var windowWidth = $(window).outerWidth();

  if (scrollOffset > 25 && windowWidth > 0) {
    header.addClass('floating');


  } else {
    header.removeClass('floating');
  }

});

$(window).resize(function() {

   if($(window).width() > 960) {
     $('.s-header').removeClass('navMobileVisible');
   }

});

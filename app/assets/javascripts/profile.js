$(function () {
  $('.change').hide().slideDown(1000);
  $('.change2').hide().slideDown(2000);
  $('.change3').hide().slideDown(3000);
  $('.change4').hide().slideDown(4000);
});

// 下線アニメーション
$(window).on('scroll',function(){
  $(".JS_ScrollAnimationItem").each(function(){
    var position = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > position - windowHeight){
      $(this).addClass('isActive');
    }
  });  
});
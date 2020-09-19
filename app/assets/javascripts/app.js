// ヘッダーの拡大
$(function() {
  $(".menu").hover(
    function(){
    $(this).animate({fontSize: 40})
    },
    function(){
    $(this).animate({fontSize: 30})
    }
  );
});

// ロゴ回転
$(function() {
  $('#spin, #spin2').animate({zIndex:1},{
    //1秒かけてアニメーション
    duration:1000,
    //stepは、アニメーションが進むたびに呼ばれる
    step:function(now){
      //nowに現在のz-indexの値（0から1に変化しているところ）が渡してもらえる
      //0から1に向かって変化していくnowを利用して3回転（1080度）させてみる
      $(this).css({transform:'rotate(' + (now * 1080) + 'deg)'});
    },
    //終わったら
    complete:function(){
      //次のために、元に戻しておく
      $('#spin, #spin2').css('zIndex', 0);
    }
  })
});


// $(function () {
//   $('#change').hide().slideDown(1000);
//   $('#change2').hide().slideDown(2000);
// });

$(function () {
  $('.change').hide().slideDown(1000);
  $('.change2').hide().slideDown(2000);
  $('.change3').hide().slideDown(3000);
  $('.change4').hide().slideDown(4000);
});

// $(function(){
//   $('#change').delay(2000).queue(function(){
//     $(this).text("企業様");
//   });
//   $('#change2').delay(2000).queue(function(){
//     $(this).text("ご貴重な時間を頂きありがとうございます。");
//   });
// });

$(function(){
// 設定
var $width =300; // 横幅
var $height =200; // 高さ
var $interval = 1200; // 切り替わりの間隔（ミリ秒）
var $fade_speed = 1000; // フェード処理の早さ（ミリ秒）
$("#slide ul li").css({"overflow":"hidden","width":$width,"height":$height});
$("#slide ul li").hide().css({"top":0,"left":0});
$("#slide ul li:first").addClass("active").show();
setInterval(function(){
var $active = $("#slide ul li.active");
var $next = $active.next("li").length?$active.next("li"):$("#slide ul li:first");
$active.fadeOut($fade_speed).removeClass("active");
$next.fadeIn($fade_speed).addClass("active");
},$interval);
});
$(function(){
  // 設定
  var $width =300; // 横幅
  var $height =200; // 高さ
  var $interval = 1200; // 切り替わりの間隔（ミリ秒）
  var $fade_speed = 1000; // フェード処理の早さ（ミリ秒）
  $("#slide2 ul li").css({"overflow":"hidden","width":$width,"height":$height});
  $("#slide2 ul li").hide().css({"top":0,"left":0});
  $("#slide2 ul li:first").addClass("active").show();
  setInterval(function(){
  var $active = $("#slide2 ul li.active");
  var $next = $active.next("li").length?$active.next("li"):$("#slide2 ul li:first");
  $active.fadeOut($fade_speed).removeClass("active");
  $next.fadeIn($fade_speed).addClass("active");
  },$interval);
  });
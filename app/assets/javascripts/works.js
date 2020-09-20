// 画像動的
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
  
$(function(){
  // 設定
  var $width =300; // 横幅
  var $height =200; // 高さ
  var $interval = 1200; // 切り替わりの間隔（ミリ秒）
  var $fade_speed = 1000; // フェード処理の早さ（ミリ秒）
  $("#slide3 ul li").css({"overflow":"hidden","width":$width,"height":$height});
  $("#slide3 ul li").hide().css({"top":0,"left":0});
  $("#slide3 ul li:first").addClass("active").show();
  setInterval(function(){
  var $active = $("#slide3 ul li.active");
  var $next = $active.next("li").length?$active.next("li"):$("#slide3 ul li:first");
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
  $("#slide4 ul li").css({"overflow":"hidden","width":$width,"height":$height});
  $("#slide4 ul li").hide().css({"top":0,"left":0});
  $("#slide4 ul li:first").addClass("active").show();
  setInterval(function(){
  var $active = $("#slide4 ul li.active");
  var $next = $active.next("li").length?$active.next("li"):$("#slide4 ul li:first");
  $active.fadeOut($fade_speed).removeClass("active");
  $next.fadeIn($fade_speed).addClass("active");
  },$interval);
});
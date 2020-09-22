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
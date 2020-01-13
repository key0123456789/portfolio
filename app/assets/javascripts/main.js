$(document).ready(function(){

  // pagetop link
  $(window).scroll(function(){
      if($(this).scrollTop() > 100) { // 100pxスクロールしていたら上に戻るボタンを表示
          $(".back-to-top").fadeIn(); 
        } else {
          $(".back-to-top").fadeOut();
      }
  });
  $(".back-to-top").click(function(){
    $("body,html").animate({scrollTop:0},800); // 800msかけて上に戻る
  });

  // nav link
  $('a[href^="#"]').click(function(){
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;

    $("html, body").animate({scrollTop:position}, 500);
    return false;
  });

  // header & footer
  var $header = $('header'),
      $footer = $('footer'),
      headerHeight = $header.outerHeight(),
      footerHeight = $footer.outerHeight(),
      startPos = 0;
  var isScrolling = 0,
      timeoutId;
  
  $(window).on("scroll", function(){
    var value = $(this).scrollTop();
    if ( value > startPos && value > headerHeight ) {
      isScrolling = 1;

      clearTimeout(timeoutId);

      timeoutId = setTimeout(function(){
        isScrolling = 0;
        $header.css('top', '0');
        $footer.css('bottom', '0');
      }, 100);
      if ( isScrolling == 1 ){
        $header.css('top', '-' + headerHeight + 'px');
        $footer.css('bottom', '-' + footerHeight + 'px');
      }
    }
  })

  // animation of works list
  function animation(){
    $('.fadeInUp').each(function(){
      var target = $(this).offset().top;  //ターゲットの位置を取得
      var scroll = $(window).scrollTop();  //スクロール量を取得
      var windowHeight = $(window).height();  //ウィンドウの高さを取得

      if (scroll > target - windowHeight){  //ターゲットまでスクロールするとフェードインする
        $(this).css('opacity','1');
        $(this).css('transform','translateY(0)');
      }
    });
  }
  animation();
  $(window).scroll(function (){
    animation();
  });

  // リロードしても同じスクロール位置を保持する
  function keep_scroll_reload() {
    var re = /&page_x=(\d+)&page_y=(\d+)/;
    var page_x = document.documentElement ? document.documentElement.scrollLeft : document.body.scrollLeft;
    var page_y = document.documentElement ? document.documentElement.scrollTop : document.body.scrollTop;
    var position = '&page_x=' + page_x + '&page_y=' + page_y;
    if(!url.match(re)) {
      location.href = url + position;
    } else {
      location.href = url.replace(/&page_x=(\d+)&page_y=(\d+)/,position);
    }
  }
  // スクロール位置を復元する
  function restore_scroll() {
    var re = /&page_x=(\d+)&page_y=(\d+)/;
    if(window.location.href.match(re)) {
            var position = window.location.href.match(re)
            window.scrollTo(position[1],position[2]);
    }
  }
  (window.onload = function() {
    restore_scroll();
  })();

  // Fixed ScrollTop for contact message
  $(document).ready(function() {
    if($('.notifications').length) {
      var pos = $("#contact").offset().top;
      $(window).scrollTop(pos);
    }
  });

});


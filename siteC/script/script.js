$(function () {
  // 슬라이더
  let currentIdx = 0;
  $(".sliderWrap").append($(".slider").first().clone(true));
  setInterval(function () {
    currentIdx++;
    $(".sliderWrap").animate({ marginTop: -350 * currentIdx + "px" }, 600);
    if (currentIdx === 3) {
      $(".sliderWrap").animate({ marginTop: 0 }, 0);
      currentIdx = 0;
    }
  }, 3000);

  //메뉴
  $(".nav > ul > li").mouseover(function(){
    $(this).find(".submenu").stop().slideDown();
  })
  $(".nav > ul > li").mouseout(function(){
    $(this).find(".submenu").stop().slideUp();
  })

  //팝업
  $(".popup-btn").click(function(){
    $(".popup-view").show();
  })
  $(".popup-close").click(function(){
    $(".popup-view").hide();
  })
});

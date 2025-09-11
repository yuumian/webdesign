$(function () {
  //메뉴
  $("#header .nav > ul > li").mouseover(function(){
    $("#header").addClass("on");
    $("#header .nav > ul > li > ul").stop().slideDown(200);
  })
  $("#header .nav > ul > li").mouseout(function(){
    $("#header").removeClass("on");
    $("#header .nav > ul > li > ul").stop().slideUp(200);
  })
  //슬라이더
  let currentId = 0;
  $(".sliderWrap").append($(".slider").first().clone(true));
  setInterval(function(){
    currentId++;
    $(".sliderWrap").animate({marginLeft: -currentId * 100 + "%"}, 600);
    if(currentId === 3){
      $(".sliderWrap").animate({marginLeft: 0}, 0);
      currentId = 0;
    }
  }, 3000);
  //팝업
  $(".popup-btn").click(function(){
    $(".popup-view").show();
  })
  $(".popup-close").click(function(){
    $(".popup-view").hide();
  })
});

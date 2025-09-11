$(function () {
  // 메뉴
  $("nav > ul > li").mouseover(function(){
    $("nav > ul > li > ul").stop().slideDown(200);
  })
  $("nav > ul > li").mouseout(function(){
    $("nav > ul > li > ul").stop().slideUp(200);
  })
  // 슬라이드
  let currentId = 0;
  $(".slider").hide().first().show();
  setInterval(function(){
    const nextId = (currentId + 1) % 3;
    $(".slider").eq(currentId).fadeOut(1000);
    $(".slider").eq(nextId).fadeIn(1000);
    currentId = nextId;
  }, 3000);

  // 탭
  const tabBtn = $(".info-menu > a");
  const tabContent = $(".info-content > div");
  tabContent.hide().eq(0).show();
  tabBtn.click(function(){
    $(this).addClass("active").siblings().removeClass("active");
    tabContent.eq($(this).index()).show().siblings().hide();
  })

  // 팝업
  $(".popup-btn").click(function(){
    $(".popup-view").show();
  })
  $(".popup-close").click(function(){
    $(".popup-view").hide();
  })
});

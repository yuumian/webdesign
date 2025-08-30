$(function () {
  // 슬라이드
  let currentIdx = 0;
  $(".slider").hide().first().show();
  setInterval(() => {
    const nextIdx = (currentIdx + 1) % 3;
    $(".slider").eq(currentIdx).fadeOut(1200);
    $(".slider").eq(nextIdx).fadeIn(1200);
    currentIdx = nextIdx;
  }, 3000);

  // 메뉴
  $(".nav > ul > li").mouseover(function () {
    $(this).find(".submenu").stop().slideDown(300);
  });
  $(".nav > ul > li").mouseout(function () {
    $(this).find(".submenu").stop().slideUp(300);
  });

  // 탭메뉴
  const tabBtn = $(".info-menu > a");
  const tabContent = $(".info-content > div");
  tabContent.hide().eq(0).show();
  tabBtn.click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    tabContent.eq($(this).index()).show().siblings().hide();
  });

  $(".popup-btn").click(function () {
    $(".popup-view").show();
  });
  $(".popup-close").click(function () {
    $(".popup-view").hide();
  });
});

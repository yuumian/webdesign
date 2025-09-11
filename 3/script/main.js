$(function(){
  // 메뉴
  $(".nav > ul > li").mouseover(function(){
    $(this).find(".submenu").stop().slideDown(200);
  })
  $(".nav > ul > li").mouseout(function(){
    $(this).find(".submenu").stop().slideUp(200);
  })
  // 슬라이더
  $(".slider").hide().first().show();
  let currentId = 0;
  setInterval(function(){
    const nextId = (currentId+1) % 3;
    $(".slider").eq(currentId).fadeOut(600);
    $(".slider").eq(nextId).fadeIn(600);
    currentId = nextId;
  }, 3000);
  // 탭
  const tabMenu = $(".info-menu a");
  const tabContent = $(".info-contents > div");
  tabContent.eq(0).show();
  tabMenu.click(function(){
    $(this).addClass("active").siblings().removeClass("active");
    tabContent.eq($(this).index()).show().siblings().hide();
  })

  //팝업
  $(".popup-btn").click(function(){
    $(".popup-view").show();
  })
  $(".popup-close").click(function(){
    $(".popup-view").hide();
  })
})
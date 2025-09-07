$(function(){
  $("header nav > ul > li").mouseover(function(){
    $("header nav > ul > li > ul").stop().slideDown(200);
  })
  $("header nav > ul > li").mouseout(function(){
    $("header nav > ul > li > ul").stop().slideUp(200);
  })
})
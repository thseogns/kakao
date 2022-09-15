/** @format */

//gnb에서 서브메뉴 슬라이드
$(".btn_sub").click(function () {
  $(this).find("span").toggleClass("on");
  $(this).siblings(".list_sub_wrap").slideToggle();
});
//gnb 가 왼쪽에서 튀어나옴 슬라이드
$(".gnb_btn").click(function () {
  $("#gnb").animate({ left: 0 }, 300);
  $(".dark ").css("display", "block");
});
//gnb사라짐
$(".dark").click(function () {
  $(".dark").css("display", "none");
  $("#gnb").animate({ left: -304 }, 300, "swing");
  $(".login_popup").hide();
});
//로그인 팝업
$(".login_inquire").click(function () {
  $(".login_popup").show();
  $("#gnb").animate({ left: -304 }, 300, "swing");
});
$(".btn_close").click(function () {
  $(".login_popup").hide();
  $(".dark").css("display", "none");
});

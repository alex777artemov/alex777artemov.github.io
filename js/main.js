/*Панель аккаунта*/
$('.account__arrow-up').on('click', function(){
  $('.account-menu').toggle();
  $(this).toggleClass('rotate');
});
/*Сворачивание левого меню*/
$('.nav__btn').on('click', function(){
  $(this).toggleClass('red');
  $('.left-menu').toggleClass('small-menu');
});
/*красная иконка выбранного меню*/
  $(".menu__link.current").find(".icon").addClass("icon-red");
/*Подменю*/
if($(".submenu__link").hasClass("current")){
  $(".submenu__link.current").closest(".menu__item").find(".icon").addClass("icon-red");
  $(".submenu__link.current").closest(".menu__item").find(".icon-arrow").addClass("icon-arrow_reverse");
}
/*Выбор темы*/
$( ".theme__hidden-checkbox" ).on("change", function() {
  if(!($(".theme__hidden-checkbox").prop("checked"))){
    $("head").append("<link rel='stylesheet' href='css/black.css'>");
    $(".header .logo__img").attr("src", "img/black-logo-header.svg");
    $(".sign-in .logo__img").attr("src", "img/black-logo-header.svg");
  } else {
    $("link[href='css/black.css']").remove();
    $(".header .logo__img").attr("src", "img/logo-header.svg");
    $(".sign-in .logo__img").attr("src", "img/logo-header.svg");
  }
});
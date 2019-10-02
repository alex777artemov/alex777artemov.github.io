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
}
/*панель аккаунта*/
$('.account__arrow-up').on('click', function(){
  $('.account-menu').toggle();
  $(this).toggleClass('rotate');
});
/*сворачивание левого меню*/
$('.nav__btn').on('click', function(){
  $(this).toggleClass('red');
  $('.left-menu').toggleClass('small-menu');
  
  
  //$('.menu__link span, .theme__name, .copy').toggle();
  //$('.menu__item').toggleClass('padding-right');
  //$('.switch-btn').toggleClass('margin-zero');
});
$(document).ready(function(){
  //Выбор языка
  $('.dropdown-lang__btn').on("click", function(){
    $(".dropdown-lang-select").toggle();
  });
  
  //слайдер на главной странице
  var swiper = new Swiper('.main-slider',{
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  
  //Открытие меню слева
  $('.aside-menu__link').on('click', function(event){
    event.preventDefault();
    $(this).siblings('.aside-submenu__list').toggle();
    $(this).children('.icon-arrow-menu').toggleClass('icon-arrow-menu_reverse');
  });
  //Табы на странице продукта
  $("ul.tabs__list").on("click", "li:not(.active)", function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active")
      .closest("div.tabs")
      .find("div.tabs-content")
      .removeClass("active")
      .eq($(this).index())
      .addClass("active");
  });
  //Слайдер фотографий продукта, на стр. продукта
  var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 16,
    slidesPerView: 'auto',
    centerInsufficientSlides: true,
//    touchRatio: 0.2,
    slideToClickedSlide: true,
    dynamicBullets: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    
  });
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: galleryThumbs
    }
  });
//  galleryTop.controller.control = galleryThumbs;
//  galleryThumbs.controller.control = galleryTop;
  
});


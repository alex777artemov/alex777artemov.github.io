$(document).ready(function(){
  
  //Плавный переход по якорям
  var headerHeight = $("header").outerHeight();
  $(".menu a").on("click", function (event) {
    event.preventDefault();
    var linkHref  = $(this).attr('href');
    $("html, body").animate({
      scrollTop: $(linkHref).offset().top - headerHeight - 20
    }, 500);
  });
  //Закрывать мобильное меню при нажатии на пункт меню
  $(".popup-menu .menu__link").on("click", function(){
    $(".popup-menu").fadeOut();
  });
//  открыть всплывающее окно
  $(".open-popup").on("click", function(event){
    event.preventDefault();
    $(".popup-sign-in").fadeIn();
    $('body').css('overflow','hidden');
  });  
  //после отправки формы
  $(".form__submit").on("click", function(event){
    event.preventDefault();
    $(".popup").fadeOut();
    $(".popup-thank").fadeIn();
    setTimeout(function(){
      $(".popup-thank").fadeOut();
    }, 2500);
    $('body').css('overflow','visible');
  }); 
  //открыть мобильное меню
  $(".mobile-menu-open").on("click", function(){
    $(".popup-menu").fadeIn();
  });
  //открыть мобильнst контакты
  $(".mobile-contact-open").on("click", function(){
    $(".popup-contacts").fadeIn();
  });
  //закрыть popup
  $(".popup .overflow").on("click", function(event){
    event.preventDefault();
    $(this).parent().fadeOut();
    $('body').css('overflow','visible');
  });
  $(".popup__close, .popup__close-desctop").on("click", function(){
    $(this).parent().parent().fadeOut();
    $('body').css('overflow','visible');
  });
  //открыть полностью текст в мобильной версии в блоке О НАС
  $(".about__text-mobile-more").on("click", function(){
    $(this).hide();
    $(".about__text_mobile-hidden").show();
  });
  
  //Слайдер SWIPER
  if(document.documentElement.clientWidth < 740) {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      breakpoints: {
        540: {
          slidesPerView: 'auto',
        }
      }
    });
  }
  //Галерея изображений
  $('[data-fancybox="gallery"]').fancybox({
    buttons: [
      //"zoom",
      //"share",
      //"slideShow",
      //"fullScreen",
      //"download",
      //"thumbs",
      "close"
    ],
    thumbs : {
      //autoStart : true
    },
    mobile: {
      thumbs : {
        autoStart : false
      },
    }
  });
  $(".open-gallery").on("click", function(event){
    event.preventDefault();
    $.fancybox.open($('[data-fancybox="gallery"]'),{
      buttons: [
        //"thumbs",
        "close"
      ],
      thumbs : {
        //autoStart : true
      },
      mobile: {
        thumbs : {
          autoStart : false
        },
      }
    });
  });
  //Ошибка при заполнении
  if(".form .error"){
    $(".form .error").children('.form__input').attr("placeholder", "Ошибка");
  }
  
  
});


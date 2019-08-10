$(document).ready(function () {
  // Анимация для секции hero
  var listItem = $('.hero-list__image');
  listItem.css("animation-name", "fadeIn");
  listItem.css("animation-duration", "2s");

  var logo = $('.navbar__logo')
  logo.css("animation-name", "fadeIn");
  logo.css("animation-duration", "2s");

  // Анимация для кнопки
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 150) {
      $('.offer__button').show();
      $('.offer__button').css("animation-name", "fadeIn");
      $('.offer__button').css("animation-duration", "2s");
    } else {
      $('.offer__button').hide();
    }
  });
  // анимация для секции с шагами
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 2200) {
      $('.step').fadeIn()
      $('.step').css("animation-name", "fadeIn");
      $('.step').css("animation-duration", "2s");
    } else {
      $('.step').fadeOut()
    }
  });
})
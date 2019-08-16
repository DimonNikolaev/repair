$(document).ready(function () {
  var button = $('#button');
  var modal = $('#modal');
  var close = $('#close');

  button.on('click', function () {
    modal.addClass('modal_active');
  });
  close.on('click', function () {
    modal.removeClass('modal_active')
  });
})

function backToTop() {
  btn = $('.offer__scroll');

  $(window).on('scroll', function () {
    if ($(this).scrollTop() >= 50) {
      btn.fadeIn();
    } else {
      btn.fadeOut();
    }
  })

  btn.on('click', function (event) {
    event.preventDefault();
    $('html').animate({
      scrollTop: 0
    }, 500);
  })
}

backToTop();
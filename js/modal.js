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
  let button = $('.offer__scroll');

  $(window).on('scroll', () => {
    if ($(this).scrollTop() >= 50) {
      button.fadeIn();
    } else {
      button.fadeOut();
    }
  })

  button.on('click', (e) => {
    e.preventDefault();
    $('html').animate({
      scrollTop: 0
    }, 1000);
  })
}

backToTop();
$(document).ready(function () {
  var modal = $('#modal');
  var close = $('#close');

  $('#offer-form').on('submit', function (event) {
    event.preventDefault();
    $.ajax({
      url: 'mail.php',
      type: 'POST',
      data: $(this).serialize(),
      success: function (data) {
        $('.success').html(data + ', Ваша форма отправлена.')
      },
      error: function (jqXHR, textStatus) {
        console.log(jqXHR + ': ' + textStatus);
      }
    })
  })
  $('#offer-form').on('submit', function () {
    modal.addClass('modal_active')
    $('.modal-dialog__title').text('Спасибо за заявку, скоро мы вам перезвоним.');
    $('.offer__input').val("");
  })
})
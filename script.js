$('#input-url').on('input blur', () => {
  if ($('#input-url').val() != '') {
    $('#input-url').addClass('input-success').removeClass('input-danger');
  }
});

$('#input-source').on('input blur', () => {
  if ($('#input-source').val() != '') {
    $('#input-source').addClass('input-success').removeClass('input-danger');
  }
});

$('#input-team').on('input blur', () => {
  if ($('#input-team').val() != '' && validateEmail($('#input-team').val())) {
    $('#input-team').addClass('input-success').removeClass('input-danger');
  }
});

$('#input-url, #input-source, #input-team').on('input blur', () => {
  if ($('#input-url').hasClass('input-success') && $('#input-source').hasClass('input-success') && $('#input-team').hasClass('input-success')) {
    $('#generated-url').val($('#input-url') + "#src=" + encodeURIComponent($('#input-source')) + "&team=" + encodeURIComponent($('#input-team')));
  }
});

function validateEmail(email) {
  if (email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
    return (true);
  } else {
    return (false);
  }
}

$('#input-url').on('input', () => {
  if ($('#input-url').val() != '') {
    $('#input-url').addClass('input-success').removeClass('input-danger');
  }
});

$('#input-source').on('input', () => {
  if ($('#input-url').val() != '') {
    $('#input-url').addClass('input-success').removeClass('input-danger');
  }
});

$('#input-team').on('input', () => {
  if ($('#input-url').val() != '') {
    $('#input-url').addClass('input-success').removeClass('input-danger');
  }
});

function validateEmail(email) {
  if (email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
    return (true);
  } else {
    return (false);
  }
}

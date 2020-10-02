$('#input-url').on('input', () => {
  if ($('#input-url').val() != '') {
    $('#input-url').addClass('input-success').removeClass('input-danger');
  }
});

$('#input-source').on('input', () => {
  if ($('#input-source').val() != '') {
    $('#input-source').addClass('input-success').removeClass('input-danger');
  }
});

$('#input-team').on('input', () => {
  if ($('#input-team').val() != '' && validateEmail($('#input-team').val())) {
    $('#input-team').addClass('input-success').removeClass('input-danger');
  }
});

function validateEmail(email) {
  if (email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
    return (true);
  } else {
    return (false);
  }
}
$('#input-url').on('input', () => {
  if ($('#input-url').val() != '') {
    $('#input-url').addClass('input-success').removeClass('input-danger');
  }
});

$('#input-source').on('input', () => {
  if ($('#input-source').val() != '') {
    $('#input-source').addClass('input-success').removeClass('input-danger');
  }
});

$('#input-team').on('input', () => {
  if ($('#input-team').val() != '' && validateEmail($('#input-team').val())) {
    $('#input-team').addClass('input-success').removeClass('input-danger');
  }
});

function validateEmail(email) {
  if (email.match(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]) {
    return (true);
  } else {
    return (false);
  }
}

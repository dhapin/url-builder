$('#input-url').on('input blur', () => {
  if ($('#input-url').val() != '') {
    $('#input-url').addClass('input-success').removeClass('input-danger');
  } else {
    $('#input-url').addClass('input-danger').removeClass('input-success');
  }
});

$('#input-source').on('input blur', () => {
  if ($('#input-source').val() != '') {
    $('#input-source').addClass('input-success').removeClass('input-danger');
  } else {
    $('#input-source').addClass('input-danger').removeClass('input-success');
  }
});

$('#input-team').on('input blur', () => {
  if ($('#input-team').val() != '' && validateEmail($('#input-team').val())) {
    $('#input-team').addClass('input-success').removeClass('input-danger');
  } else {
    $('#input-team').addClass('input-danger').removeClass('input-success');
  }
});

$('#input-url, #input-source, #input-team').on('input blur', () => {
  if ($('#input-url').hasClass('input-success') && $('#input-source').hasClass('input-success') && $('#input-team').hasClass('input-success')) {
    $('#generated-url').val($('#input-url').val().trim() + "#src=" + encodeURIComponent($('#input-source').val().trim()) + "&team=" + encodeURIComponent($('#input-team').val().trim()));
  }
});

$('#copy-url').on('click', () => {
  if (!($('#generated-url').val() != '')) {
    $('#generated-url').select();
    document.execCommand("copy");
  }
});

function validateEmail(email) {
  if (email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
    return (true);
  } else {
    return (false);
  }
}

$('#input-url').on('input blur', () => {
  if ($('#input-url').val().trim() != '') {
    $('#input-url').addClass('input-success').removeClass('input-danger');
  } else {
    $('#input-url').addClass('input-danger').removeClass('input-success');
  }
});

$('#input-source').on('input blur', () => {
  if ($('#input-source').val().trim() != '') {
    $('#input-source').addClass('input-success').removeClass('input-danger');
  } else {
    $('#input-source').addClass('input-danger').removeClass('input-success');
  }
});

$('#input-team').on('input blur', () => {
  if ($('#input-team').val().trim() != '' && validateEmail($('#input-team').val())) {
    $('#input-team').addClass('input-success').removeClass('input-danger');
  } else {
    $('#input-team').addClass('input-danger').removeClass('input-success');
  }
});

$('#input-url, #input-source, #input-team').on('input blur', () => {
  if ($('#input-url').hasClass('input-success') && $('#input-source').hasClass('input-success') && $('#input-team').hasClass('input-success')) {
    if ($('#generated-url').val().indexOf("https://") == 0 || $('#generated-url').val().indexOf("http://") == 0) {
      $('#generated-url').val($('#input-url').val().trim() + "#src=" + encodeURIComponent($('#input-source').val().trim()) + "&team=" + encodeURIComponent($('#input-team').val().trim()));
    } else {
      $('#generated-url').val("http://" + $('#input-url').val().trim() + "#src=" + encodeURIComponent($('#input-source').val().trim()) + "&team=" + encodeURIComponent($('#input-team').val().trim()));
    }
  }
});

$('#copy-url').on('click', () => {
  if ($('#generated-url').val() != '') {
    $('#generated-url').select();
    document.execCommand("copy");
  }
});

$('#shorten').on('click', () => {
  if ($('#generated-url').val() != '') {
    var postData = {};
    postData.long_url = $('#generated-url').val();
    $.ajax({
      url: 'https://api-ssl.bitly.com/v4/shorten', 
      type: 'POST', 
      headers: {
        'Authorization': 'Bearer 81ec83d8b7ebbb1f9b7a235fd790b3492aa4ff28', 
        'Content-Type': 'application/json'
      }, 
      data: JSON.stringify(postData), 
      success: function(data, textStatus, xhr){
        if (xhr.status == 200 || xhr.status == 201) {
          $('#generated-url').val(data.link);
        }
      }
    });
  }
});

function validateEmail(email) {
  if (email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
    return (true);
  } else {
    return (false);
  }
}

function passwordMatch () {
  var match = function () {
    if($match.val() == $original.val() && $match.val().length >= 6) {
      $submit.prop('disabled',false);
      $match.addClass("success");
      $match.removeClass("error")
      $success.show();
      $error.hide();
      $submit.removeClass('disabled')
    } else {
      $match.addClass("error");
      $match.removeClass("success");
      $success.hide();
      $error.show();
      $submit.prop('disabled',true);
      $submit.addClass('disabled')
    }
  };

  var $submit = $("#matchFields");
  var $original = $($submit.data("original"));
  var $match = $($submit.data("match"));
  var $success = $match.siblings(".success");
  var $error = $match.siblings(".error");
  $success.hide();

  $submit.addClass('disabled')
  $submit.prop('disabled', true);
  $match.addClass("error");

  $match.keyup( match );
  $original.keyup( match );
};

$(document).on('ready', passwordMatch);
$(document).on('page:load', passwordMatch);

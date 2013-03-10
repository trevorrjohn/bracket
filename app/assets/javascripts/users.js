function validateEmail () {
  function validateEmail() {
      var regex = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      var $this = $(this);
      if (regex.test($this.val())) {
        $this.addClass("success");
        $this.removeClass("warning");
        $valid.show();
        $warning.hide();
      } else {
        $this.addClass("warning");
        $this.removeClass("success");
        $valid.hide();
        $warning.show();
      }
  }
  var $email = $("#user_email");
  var $valid = $email.siblings('.success');
  var $warning = $email.siblings('.warning');
  $email.keyup(validateEmail)
  $email.change(validateEmail);
  $email.keyup();
}
$(document).on('ready', validateEmail);
$(document).on('page:load', validateEmail);

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

  $match.keyup( match );
  $original.keyup( match );
  $original.keyup();
};

$(document).on('ready', passwordMatch);
$(document).on('page:load', passwordMatch);

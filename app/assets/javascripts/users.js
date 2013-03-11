function validateUsername () {
  var isValid = function (response) {
    if (response['valid']) {
      $username.addClass('success');
      $username.removeClass('warning');
      $warning.hide();
      $success.show();
      $error.hide();
      $invalid.hide();
    } else {
      $warning.show();
      $success.hide();
      $error.hide();
      $invalid.hide();
      $username.addClass('warning');
      $username.removeClass('success');
    }
  }

  var $username = $("#user_username");
  var $success = $username.siblings(".success");
  var $warning = $username.siblings(".warning");
  var $error = $username.siblings(".error:first");
  var $invalid = $username.siblings(".invalid");
  var regex = new RegExp(/\ /);

  $username.keyup( function () {
    if ($username.val().length < 2) {
      $warning.hide();
      $success.hide();
      $invalid.hide();
      $error.show();
    } else if (regex.test($username.val())) {
      $warning.hide();
      $success.hide();
      $invalid.show();
      $error.hide();
    } else {
      $.post("/users/taken.json", { "format": 'json', "username": $(this).val() })
      .done( isValid );
    }
  });
  $username.keyup();
}
$(document).on('ready', validateUsername);
$(document).on('page:load', validateUsername);

function validateEmail () {
  var validateEmail = function () {
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

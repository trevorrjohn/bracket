$(function () {

  var $submit = $("#matchFields");
  var $original = $($submit.data("original"));
  var $match = $($submit.data("match"));

  $submit.prop('disabled',true);
  $match.addClass("no_match");

  $match.keyup(function (event) {
    if($match.val() == $original.val() && $match.val().length >= 6) {
      $submit.prop('disabled',false);
      $match.addClass("match");
      $match.removeClass("no_match")
    } else {
      $match.addClass("no_match");
      $match.removeClass("match");
      $submit.prop('disabled',true);
    }
  });

});


$(document).ready(function() {
  $(".clickable").click(function() {
    $("#js-showing").toggle();
  });
});

$(document).ready(function() {
  $(".clickable-op").click(function() {
    $("#operators-showing").toggle();
  });
});

$(document).ready(function() {
  $(".clickable-var").click(function() {
    $("#variables-showing").toggle();
  });
});
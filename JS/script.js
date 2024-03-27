var prevScrollpos = window.pageYOffset;

$(window).scroll(function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos < currentScrollPos) {
    $(".navbar").addClass("hidden");
  } else {
    $(".navbar").removeClass("hidden");
  }
  prevScrollpos = currentScrollPos;
});

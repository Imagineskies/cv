$(".sliding-link").click(function(e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    console.log(aid)
    $('html,body').animate({scrollTop: $(aid).offset().top},1500);
});

$('#menuButton').click(function() {
  var nav = document.getElementById('menuTemp');
  if (nav.classList.contains(".menuColorBlack")) {
    nav.classList.remove('menuColorBlack');
    nav.classList.add('menuColorWhite');
  } else {
    nav.classList.add('menuColorBlack');
    nav.classList.remove('menuColorWhite');
  }
})

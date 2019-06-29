$(".sliding-link").click(function(e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    console.log(aid)
    $('html,body').animate({scrollTop: $(aid).offset().top},1500);
});

window.onload = function() {
  var main = document.getElementById('main');
  var loadingScreen = document.getElementById('loadingScreen');
  main.classList.remove('hidden');
  loadingScreen.classList.remove('shown', 'overhidden');
  loadingScreen.classList.add('hidden');
}

$(".sliding-link").click(function(e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    console.log(aid)
    $('html,body').animate({scrollTop: $(aid).offset().top},1500);
});

var page = 1;

$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()){

page++;
  var request = $.ajax({
    method: "GET",
    url: '/tweets.json?page=' + page
  });

$('.more-sprouts').hide();
  request.done(function(data) {
    data.forEach(function(tweet) {
      $(".tweets").append("<li class=\"tweet\">" +
          "<div class=\"body\">" + tweet["text"] + "</div>" +
          "<div class=\"user\">" + tweet["username"] + "</div>" +
        "</li>");
    });
  });
}
});

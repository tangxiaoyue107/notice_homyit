// You can also use "$(window).load(function() {"


var slide = {
    auto: true,
    pager: true,
    nav: true,
    speed: 500,
    // namespace: "callbacks",
    namespace: "call",
    before: function() {
        $('.events').append("<li>before event fired.</li>");
    },
    after: function() {
        $('.events').append("<li>after event fired.</li>");
    }
}


$(function() {
    $("#slider1").responsiveSlides(slide);

});
$(function() {
    $("#slider2").responsiveSlides(slide);

});

$(function() {
    $("#slider3").responsiveSlides(slide);

});
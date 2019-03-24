/**
    Sticky Header
 */
$(window).on('scroll', function(event) {
    var scrollValue = $(window).scrollTop();

    var headerHeight = $(".jumbotron").height();

    if (scrollValue > headerHeight) {
        $('#stickyHeader').removeClass("sticky-off").addClass("sticky-on");
        $('#scroll-to-top').removeClass("floating-off").addClass("floating-on");
    } else {
        $('#stickyHeader').removeClass("sticky-on").addClass("sticky-off");
        $('#scroll-to-top').removeClass("floating-on").addClass("floating-off");
    }
});
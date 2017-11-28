$(document).scroll(function() {
            if ($(this).scrollTop() == 0) {
                $("#navWrap").slideUp(400);
            } else {
                $("#navWrap").slideDown(600);
            }

        });

$(function() {
    // Stick the #nav to the top of the window
    var nav = $('#navWrap');
    var navHomeY = nav.offset().top;
    var isFixed = false;
    var $w = $(window);
    $w.scroll(function() {
        var scrollTop = $w.scrollTop();
        var shouldBeFixed = scrollTop > navHomeY;
        if (shouldBeFixed && !isFixed) {
            nav.css({
                position: 'fixed',
                top: 0,
                left: nav.offset().left,
                width: nav.width()
            });
            isFixed = true;
        }
        else if (!shouldBeFixed && isFixed)
        {
            nav.css({
                position: 'static'
            });
            isFixed = false;
        }
    });
});


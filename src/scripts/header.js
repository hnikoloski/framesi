jQuery(document).ready(function ($) {
    // $("#page").css("padding-top", $("#masthead").outerHeight());
    $(window).scroll(function () {
        var sticky = $("#masthead .top-bar"),
            scroll = $(window).scrollTop();

        if (scroll >= 100) {
            $("#masthead").addClass("sticky");
        } else {
            $("#masthead").removeClass("sticky");
        }
    });
    $('.menu-trigger').on('click', function () {
        $(this).addClass('active');
        $('.side-menu-wrapper').addClass('active');
    });
    $('.side-menu-wrapper .sidebar-close').on('click', function () {
        $('.menu-trigger').removeClass('active');
        $('.side-menu-wrapper').removeClass('active');
    });
});


// header menu animation
let menuIcon = document.querySelector('.bodymovinanim');
let animateMenuIcon = bodymovin.loadAnimation({
    wrapper: menuIcon,
    animType: 'svg',
    loop: false,
    autoplay: false,
    speed: 3,
    path: "/assets/js/menuV3.json"
});
var directionMenu = 1;
menuIcon.addEventListener('click', function () {
    animateMenuIcon.setDirection(directionMenu);
    animateMenuIcon.play();
    directionMenu = -directionMenu;
});


// Hejri calendar
$(function () {
    //	$.calendars.picker.setDefaults({renderer: $.calendars.picker.themeRollerRenderer}); // Requires jquery.calendars.picker.ext.js
    // var calendar = $.calendars.instance('ummalqura');
    // $('#popupDatepicker').calendarsPicker({ calendar: calendar });


    // otp 


    $('.otp-group').find('input').each(function () {
        $(this).attr('maxlength', 1);
        $(this).on('keyup', function (e) {
            var parent = $($(this).parent());

            if (e.keyCode === 8 || e.keyCode === 37) {
                var prev = parent.find('input#' + $(this).data('previous'));

                if (prev.length) {
                    $(prev).select();
                }
            } else if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
                var next = parent.find('input#' + $(this).data('next'));

                if (next.length) {
                    $(next).select();
                } else {
                    if (parent.data('autosubmit')) {
                        parent.submit();
                    }
                }
            }
        });
    });

});

// trigger popovers
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
})


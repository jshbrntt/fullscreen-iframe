$(function () {
    $('#button').click(function () {
        console.log('clicked', screenfull.enabled);
        if (screenfull.enabled) {
            screenfull.request(window.document.documentElement);
        }
    });
});
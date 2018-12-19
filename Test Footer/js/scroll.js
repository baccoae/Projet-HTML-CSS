console.log("scrollify.js has been linked.");

$(document).ready(function () {

$.scrollify({
    section: "section",
    sectionName: "section-name",
    interstitialSection: "",
    easing: "easeOutExpo",
    scrollSpeed: 1800,
    offset: 0,
    scrollbars: true,
    standardScrollElements: "",
    setHeights: true,
    overflowScroll: true,
    updateHash: true,
    touchScroll: true,
    before: function() {},
    after: function() {},
    afterResize: function() {},
    afterRender: function() {}
});

$(function() {
    $('#sec-change1').click (function() {
        $.scrollify.move('#sec1');
    });
});

$(function() {
    $('#sec-change2').click (function(e) {
        $.scrollify.move('#sec2');
    });
});

$(function() {
    $('#sec-change3').click (function(e) {
        $.scrollify.move('#sec3');
    });
});

$(function() {
    $('#sec-change4').click (function(e) {
        $.scrollify.move('#sec4');
    });
});

$(function() {
    $('#sec-change5').click (function(e) {
        $.scrollify.move('#sec5');
    });
});

});
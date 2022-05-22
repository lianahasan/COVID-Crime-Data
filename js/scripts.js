/*!
* Start Bootstrap - Shop Item v5.0.5 (https://startbootstrap.com/template/shop-item)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-item/blob/master/LICENSE)
*/

(function($) {
    $.fn.invisible = function() {
        return this.each(function() {
            $(this).css("visibility", "hidden");
            $(this).css("max-height", "0");
        });
    };
    $.fn.visible = function() {
        return this.each(function() {
            $(this).css("visibility", "visible");
        });
    };
}(jQuery));

$('button').on('click', function(){
    $('button').removeClass('selected');
    $(this).addClass('selected');
    $(".content-section").invisible();
    //show the section depending on which button was clicked
    $("#" + $(this).attr("data-section")).visible();
});
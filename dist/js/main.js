//= jquery.js

function showMenu(classMenu) {
    $(classMenu).toggleClass("display-flex");
};

function hideMenu(classMenu, elem) {
    classMenu.removeClass("display-flex");
};

$(document).ready(function () {

   $(".main-menu__responsive-menu").on("click", function () {
        showMenu(".main-menu__menu");
    });

    $(document).on("click", function (elem) {
        hideMenu(".main-menu__menu");
    });



});

function changeClass(activeSlider, newSlider){
    activeSlider.removeClass("display-flex");
    newSlider.addClass("display-flex");
};

$(document).on("click", ".control-prev", function (elem) {
    let slider = $(this).parent();
    let activeSlider = slider.find(".display-flex");
    let prevSlider = activeSlider.prev(".slider_block");

    if (prevSlider.length == 0) {
        prevSlider = activeSlider.nextAll(".slider_block").last();
    }
    changeClass(activeSlider, prevSlider);
});

$(document).on("click", ".control-next", function (elem) {
    let slider = $(this).parent();
    let activeSlider = slider.find(".display-flex");
    let nextSlider = activeSlider.next(".slider_block");

    if (nextSlider.length == 0) {
        nextSlider = activeSlider.prevAll(".slider_block").last();
    }

    changeClass(activeSlider, nextSlider);
});

//--- todo сделать работу индикаторов слайдера
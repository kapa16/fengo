//= jquery.js

function showMenu(classMenu) {
    $(classMenu).toggleClass("display-flex");
};

function hideMenu(classMenu, elem) {
    classMenu.removeClass("menu-show");
};

$(document).ready(function () {

//    $(".logo-brand").on("mouseenter", function () {
//        showMenu(".main-logo-menu");
//    });

//    $(".browse").on("mouseenter", function () {
//        showMenu(".dropdown-box");
//    });

    $(".main-menu__responsive-menu").on("click", function () {
        showMenu(".main-menu__menu");
    });

    $(document).on("click", function (elem) {
        hideMenu($(".main-logo-menu"), elem);
        hideMenu($(".dropdown-box"), elem);
        hideMenu($(".cart-menu"), elem);
    });


    $(".slider-control-wrap").on("click", function () {
        $(".slider-control-wrap .slider-control").removeClass("active");
        $(".slider-control", this).addClass("active");
    });
    
    //=============== sidebar ===============
    $(function () {
        var Accordion = function (el, multiple) {
            this.el = el || {};
            // more then one submenu open?
            this.multiple = multiple || false;

            var dropdownlink = this.el.find('.sidebar-title');
            dropdownlink.on('click', {
                    el: this.el,
                    multiple: this.multiple
                },
                this.dropdown);
        };

        Accordion.prototype.dropdown = function (e) {
            var $el = e.data.el,
                $this = $(this),
                //this is the ul.submenuItems
                $next = $this.next();

            $next.slideToggle();
            $this.parent().toggleClass('menu-open');

            if (!e.data.multiple) {
                //show only one menu at the same time
                $el.find('.sidebar-submenu').not($next).slideUp().parent().removeClass('menu-open');
            }
        }

        var accordion = new Accordion($('.sidebar-menu'), false);
    })

});

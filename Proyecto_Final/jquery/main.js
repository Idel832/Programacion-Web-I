// ================= DARK MODE =================

$(document).ready(function () {

    const $toggle = $("#darkToggle");
    const $html = $("html");

    // Icono inicial - localStorage
    if (localStorage.getItem("theme") === "dark") {
        $toggle.attr("src", "assets/img/misc/Sun_lightmode.png");
    } else {
        $toggle.attr("src", "assets/img/misc/Moon_darkmode.png");
    }

    // Evento click
    $toggle.on("click", function () {

        $html.toggleClass("dark-mode");

        if ($html.hasClass("dark-mode")) {
            $toggle.attr("src", "assets/img/misc/Sun_lightmode.png");
            localStorage.setItem("theme", "dark");
        } else {
            $toggle.attr("src", "assets/img/misc/Moon_darkmode.png");
            localStorage.setItem("theme", "light");
        }

    });

});


// ================= NAVBAR TOGGLER =================

//Despegar toggler
$(document).ready(function () {

    $(".navbar-toggler").on("click", function () {
        $(this).blur();
    });

});
$(document).ready(function() {
    $(".btn-menu").click(function () {
        $(".menu").fadeIn(); // Use fadeIn() para um efeito visual
    });
    $(".btn-close").click(function () {
        $(".menu").fadeOut(); // Use fadeOut() para um efeito visual
    });
});

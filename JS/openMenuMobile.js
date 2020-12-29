function openMenuMobile(){
    var x = document.getElementById("menuMobile");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
}

$(function() {
    $("nav.menu-mobile ul li a").click(function() {
        document.getElementById("menuMobile").style.display = "none";
        return false;
    });
});

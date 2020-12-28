window.onscroll = function() {
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
        document.getElementById("menuScroll").style.top = "0";
    } else {
        document.getElementById("menuScroll").style.top = "-150px";
    }
};

    
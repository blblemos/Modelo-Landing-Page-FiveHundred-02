$(function(){

    var delay = 5000;
    var curIndex = 0;
    var intervalo;

    var amt;

    function initSlider(){
        amt = $(".autores").length;
        var sizeContainer = 100 * amt;
        var sizeBoxSingle = 100 / amt;
        $(".autores").css("width",sizeBoxSingle+"%");
        $(".scroll-wraper").css("width",sizeContainer+"%");

        for( var i = 0; i <amt ;i++){
            if(i === 0){
                $(".slider-bullets").append('<span style="background-color: rgb(68, 68, 68);"></span>');
            }else{
                $(".slider-bullets").append('<span></span>');
            }
        }
    }

    function goToSlider(curIndex){
        var offSetX = $(".autores").eq(curIndex).offset().left - $(".scroll-wraper").offset().left;
        $(".slider-bullets span").css("background-color","rgb(190, 190, 190)");
        $(".slider-bullets span").eq(curIndex).css("background-color","rgb(68, 68, 68)");
        $(".scrollEquipe").stop().animate({"scrollLeft":offSetX});
    }

    function autoPlay(){
            intervalo = setInterval(function(){
            curIndex++;
            if(curIndex === amt){
                curIndex=0;
            }
            goToSlider(curIndex);
        },delay);
    }

    $(window).resize(function(){
        $(".scrollEquipe").stop().animate({'scrollLeft':0});
    });

    function go(){
        $(".slider-bullets span").click(function(){
            curIndex = $(this).index();
            clearInterval(intervalo);
            goToSlider(curIndex);
            autoPlay();
        });
    }

    $(".scroll-wraper").hover(function(){
        clearInterval(intervalo);
     }, function() {
        autoPlay();
     }) 

    initSlider();
    autoPlay();
    go();
})
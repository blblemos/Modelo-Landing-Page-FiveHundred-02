$(function(){
    $('nav ul li a, .sessao_1_text a').click(function(){
        var href = $(this).attr('href');
        var offSetTop = $(href).offset().top;

        if(href == '#servicos'){
            offSetTop-=40;
        }

        $('html,body').animate({'scrollTop':offSetTop});

        return false;
    })
})


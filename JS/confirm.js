
$(function(){
    document.getElementById("form-modal").onsubmit = function() {openModal()};

    function openModal() {
        var html =`
        <div class="modal">
            <div class="div-modal">
                <a href="index.html"><p class="close-modal">&times;</p></a>
                <p class="text-modal" >Seus dados já estão conosco, entraremos em contato em breve.</p>
            </div>
        </div>`;
        document.getElementById("modal").innerHTML = html;
        event.preventDefault();
    }

   /* $('.modal .div-modal a').click(goToHome);
    function goToHome() {
            var offSetTop = $("#home").offset().top;
            $('html,body').animate({'scrollTop':offSetTop});
    }*/

})

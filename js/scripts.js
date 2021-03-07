$(document).ready(function () {
    $(".configuration").click(function () {
        $('.configuration').removeClass('selected-configuration');
        $('.configuration').removeClass('success-configuration');
        $('.configuration').removeClass('wrong-configuration');
        $(this).addClass('selected-configuration');
    });

    $(".play-btn").click(function (){
        if ($(".selected-configuration").length > 0){
            var name = {name: $(".selected-configuration").text()}
            jQuery.post("http://localhost:8080/play", name, function(data, status){
                if("true".includes(data)){
                    $('.selected-configuration').addClass('success-configuration');
                    $('.configuration').removeClass('selected-configuration');
                }else {
                    $('.selected-configuration').addClass('wrong-configuration');
                    $('.configuration').removeClass('selected-configuration');
                }

            });
        }else {
            alert("You choose any configuration !")
        }
    });
});

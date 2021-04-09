$(document).ready(function () {
        var list = $('ul.configurations');
        jQuery.getJSON("http://localhost:8080/getConfigs", function(data, status){
        $.each(data, function (i){
            $('<li/>').addClass('configuration').text(data[i]).appendTo(list);
        });
    });

    $(".configurations").on("click", "li", function() {
        $('.configuration').removeClass('selected-configuration');
        $('.configuration').removeClass('success-configuration');
        $('.configuration').removeClass('wrong-configuration');
        $(this).addClass('selected-configuration');
    });

    $(".play-btn").click(function (){
        if ($('.selected-configuration').length > 0){
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

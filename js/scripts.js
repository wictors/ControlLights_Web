$(document).ready(() => {
    var list = $('ul.configurations');
    jQuery.getJSON("http://localhost:8080/getConfigs", (data, status) => {
        $.each(data, function (i){
            $('<li/>').addClass('configuration').text(data[i]).appendTo(list);
        });
    }).fail(() => {
        $('<li/>').addClass('fallback-text').text('No data').appendTo(list);
    });

    $("ul.configurations").on("click", "li", (event) => {
        $('.configuration').removeClass('selected-configuration');
        $('.configuration').removeClass('success-configuration');
        $('.configuration').removeClass('wrong-configuration');
        $(event.currentTarget).addClass('selected-configuration');
    });

    $(".play-btn").click(function (){
        if ($('.selected-configuration').length > 0){
            var name = {name: $(".selected-configuration").text()}
            jQuery.post("http://localhost:8080/play", name, (data, status) => {
                if("true".includes(data)){
                    $('.selected-configuration').addClass('success-configuration');
                    $('.configuration').removeClass('selected-configuration');
                }else {
                    $('.selected-configuration').addClass('wrong-configuration');
                    $('.configuration').removeClass('selected-configuration');
                }

            });
        } else {
            alert("You choose any configuration !")
        }
    });

});

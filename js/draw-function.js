function begin_right() {
    $("#column-right").html("<div class=\"content\" id=\"clothing-type\"></div>");
    $("#clothing-type").html("<p>Hat</p>");
    console.log("df");

    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 2; j++) {
            $("#column-right").append("<div class='square' id='square-' + i * 2 + j></div>");
        }
        $("#column-right").append("<span class=\"svg-span\"></span>");
    }

}

function begin_draw() {
    $("#column-left").html(
        "<img class=\"bucky\" id=\"bucky-black\"src=\"./../img/bucky/bucky-black.png\"></img>\
        <img class=\"bucky\" id=\"bucky-brown\"src=\"./../img/bucky/bucky-brown.png\"></img>\
        <img class=\"bucky\" id=\"bucky-yellow\"src=\"./../img/bucky/bucky-yellow.png\"></img>"
        );
    $(".bucky").attr("width", "65%");
    $(".bucky").hide();
    $("#bucky-black").show();
    document.body.style.background = "url('./../img/background/background_luxuryHotel.png')";
    
    begin_right();
}


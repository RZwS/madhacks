function update_square_img(type) {

}

function draw_clothing() {
    $("#column-left").append(
        "<div id='cloth-1' class='ab-class'><img src='./../img/outfit/cloth1.png'\
         class='cloth' id='cloth-img-1'></img></div>");
    $("#cloth-1").css("margin-top", "161px");
    $("#cloth-1").css("margin-left", "-48px");
    $("#cloth-img-1").css("width", "600px");

    $("#column-left").append(
        "<div id='cloth-2' class='ab-class'><img src='./../img/outfit/cloth2.png'\
         class='cloth' id='cloth-img-2'></img></div>");
    $("#cloth-2").css("margin-top", "-5px");
    $("#cloth-2").css("margin-left", "-101px");
    $("#cloth-img-2").css("width", "800px");

    $("#column-left").append(
        "<div id='cloth-3' class='ab-class'><img src='./../img/outfit/cloth1.png'\
         class='cloth' id='cloth-img-3'></img></div>");
    $("#cloth-3").css("margin-top", "161px");
    $("#cloth-3").css("margin-left", "-48px");


    
    $(".cloth").hide();
    $("#cloth-img-2").toggle();
}


function begin_right() {
    $("#column-right").html("<div class=\"content\" id=\"clothing-type\"></div>");
    $("#clothing-type").html("<p>Hat</p>");
    console.log("df");

    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 2; j++) {
            $("#column-right").append("<div class='square' id='square-" + (i * 2 + j) + "'></div>");
        }
        $("#column-right").append("<span class=\"svg-span\"></span>");
    }
    update_square_img(0); // 0->type
    $(".square").click(select_cloth);
}

function begin_draw() {
    $("#column-left").html(
        "<img class=\"bucky\" id=\"bucky-black\"src=\"./../img/bucky/bucky-black.png\"></img>\
        <img class=\"bucky\" id=\"bucky-brown\"src=\"./../img/bucky/bucky-brown.png\"></img>\
        <img class=\"bucky\" id=\"bucky-yellow\"src=\"./../img/bucky/bucky-yellow.png\"></img>"
        );
    $(".bucky").attr("width", "600px");
    $(".bucky").hide();
    $("#bucky-black").show();
    document.body.style.background = "url('./../img/background/background_luxuryHotel.png')";
    
    begin_right();
    draw_clothing();
}


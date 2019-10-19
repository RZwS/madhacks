function begin_draw() {
    $("#column-left").html(
        "<img column=\"bucky\" id=\"bucky-black\"src=\"./../img/bucky/bucky-black.png\"></img>\
        <img column=\"bucky\" id=\"bucky-brown\"src=\"./../img/bucky/bucky-brown.png\"></img>\
        <img column=\"bucky\" id=\"bucky-yellow\"src=\"./../img/bucky/bucky-yellow.png\"></img>"
        );
    $(".bucky").attr("width", "300px");
    $("selector").hide();
    $("#bucky-black").show();
}
function update_square_img(type) {

    type = current_location;
    var imgList;
    // type = 1;  
    if (type == 0) { // home
        imgList = [
            "./../img/home/cloth1Icon.png",
            "./../img/home/cloth2Icon.png",
            "./../img/home/cloth3Icon.png",
            "./../img/home/cloth4Icon.png"
        ];
    } else if (type == 1) { // background
        imgList = [
            "./../img/background/background_luxuryHotel.png", 
            "./../img/background/background_nature.png",
            "./../img/background/background_rural.png", 
            "./../img/background/background_urban.png"
        ];
    } else if (type == 2) { // transportation

    } else if (type == 3) { // hat

    } else if (type == 4) { // cloth
        imgList = [
            "./../img/outfit/cloth1.png",
            "./../img/outfit/cloth2.png",
            "./../img/outfit/cloth3.png",
            "./../img/outfit/cloth4.png"
        ];
    } else if (type == 5) { // shoes
        imgList = [
            "./../img/shoes/shoe1.png",
            "./../img/shoes/shoe2.png",
            "./../img/shoes/shoe3.png",
            "./../img/shoes/shoe4.png",
        ];
    } else if (type == 6) { // skin
        imgList = [
            "./../img/bucky/buckyBlack.png",
            "./../img/bucky/buckyBrown.png",
            "./../img/bucky/buckyYellow.png"
        ];
    }

    for (var i = 0; i < imgList.length; i++) {
        $("#square-" + i).css("background-image", "url('" + imgList[i] + "')");
    }
}

function draw_shoes() {
    $("#column-left").append(
        "<div id='shoes-1' class='ab-class'><img src='./../img/shoes/shoe1.png'\
        class = 'shoes' id='shoes-img-1'></img></div>");
    $("#shoes-img-1").css("width", "450px");
    $("#shoes-1").css("margin-top", "315px");
    $("#shoes-1").css("margin-left", "56px");

    $("#column-left").append(
        "<div id='shoes-2' class='ab-class'><img src='./../img/shoes/shoe2.png'\
        class = 'shoes' id='shoes-img-2'></img></div>");
    $("#shoes-img-2").css("width", "450px");
    $("#shoes-2").css("margin-top", "309px");
    $("#shoes-2").css("margin-left", "62px");

    $("#column-left").append(
        "<div id='shoes-3' class='ab-class'><img src='./../img/shoes/shoe3.png'\
        class = 'shoes' id='shoes-img-3'></img></div>");
    $("#shoes-img-3").css("width", "450px");
    $("#shoes-3").css("margin-top", "311px");
    $("#shoes-3").css("margin-left", "57px");

    $("#column-left").append(
        "<div id='shoes-4' class='ab-class'><img src='./../img/shoes/shoe4.png'\
        class = 'shoes' id='shoes-img-4'></img></div>");
    $("#shoes-img-4").css("width", "450px");
    $("#shoes-4").css("margin-top", "315px");
    $("#shoes-4").css("margin-left", "56px");

    $(".shoes").hide();
    // $("#shoes-img-4").toggle();
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
        "<div id='cloth-3' class='ab-class'><img src='./../img/outfit/cloth3.png'\
         class='cloth' id='cloth-img-3'></img></div>");
    $("#cloth-3").css("margin-top", "0px");
    $("#cloth-3").css("margin-left", "-101px");
    $("#cloth-img-3").css("width", "800px");

    $("#column-left").append(
        "<div id='cloth-4' class='ab-class'><img src='./../img/outfit/cloth4.png'\
         class='cloth' id='cloth-img-4'></img></div>");
    $("#cloth-4").css("margin-top", "0px");
    $("#cloth-4").css("margin-left", "-101px");
    $("#cloth-img-4").css("width", "800px");
    
    $(".cloth").hide();
    // $("#cloth-img-4").toggle();
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
        "<img class=\"bucky\" id=\"bucky-1\"src=\"./../img/bucky/buckyBlack.png\"></img>\
        <img class=\"bucky\" id=\"bucky-2\"src=\"./../img/bucky/buckyBrown.png\"></img>\
        <img class=\"bucky\" id=\"bucky-3\"src=\"./../img/bucky/buckyYellow.png\"></img>"
        );
    $(".bucky").attr("width", "600px");
    $(".bucky").hide();
    $("#bucky-1").show();
    document.body.style.background = "url('./../img/background/background_luxuryHotel.png')";
    
    begin_right();
    draw_shoes();
    draw_clothing();
    update_square_img();
}


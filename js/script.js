var current_location = 0;
var bucky = new body(0, -1, -1, -1, -1, -1);

$("#btn-start").click(function (e) { 
    $("#btn-start").toggle();
    $("#main-wrap").html(
        "<div class=\"wrap\" id=\"wrap-left\"></div><div class=\"wrap\" id=\"wrap-right\"></div>");
    $("#wrap-left").html("<div id=\"column-left\"></div>");
    $("#wrap-right").html("<div id=\"column-right\"></div>");
    begin_draw();
});

function select_cloth(e) {
    // console.log(e.target.id);
    var id = e.target.id.substr(e.target.id.length - 1, 1)
    id = parseInt(id);
    
    // console.log(id);
    // current_location = 1;

    if (current_location == 0) { // home
        switch (id) {
            case 0:
                current_location = 6;
                break;
            case 1:
                current_location = 1;
                break;
            case 2:
                current_location = 5;
                break;
            case 3:
                current_location = 4;
                break;
            case 4:
                current_location = 3;
                break;
            case 5:
                current_location = 2;
                break;
            default:
                console.log("error");
                break;
        }
        update_square_img();
    } else if (current_location == 1) { // background
        switch (id) {
            case 0:
                bucky.background = id;
                document.body.style.background = 
                    "url(./../img/background/background_luxuryHotel.png) \
                    no-repeat center center fixed";
                document.body.style.backgroundSize = "cover";
                break;
            case 1:
                bucky.background = id;
                document.body.style.background = 
                    "url(./../img/background/background_nature.png) \
                    no-repeat center center fixed";
                    document.body.style.backgroundSize = "cover";
                break;
            case 2:
                bucky.background = id;
                document.body.style.background = 
                    "url(./../img/background/background_rural.png) \
                    no-repeat center center fixed";
                    document.body.style.backgroundSize = "cover";
                break;
            case 3:
                bucky.background = id;
                document.body.style.background = 
                    "url(./../img/background/background_urban.png) \
                    no-repeat center center fixed";
                    document.body.style.backgroundSize = "cover";
                break;
            case 4:
                document.body.style.background = null;
                bucky.background = -1;
                break;
            case 5:
                current_location = 0;
                update_square_img();
                break;
            default:
                console.log("error");
                break;
        }
    } else if (current_location == 2) { // transportation
        console.log(id);
        if (id < 6) {
            bucky.transportation = id;
            $(".car").hide();
            $("#car-img-" + (id + 1)).toggle();
        } else if (id == 6) {
            bucky.transportation = -1;
        } else {
            current_location = 0;
            update_square_img();
        }

    } else if (current_location == 3) { // hat
        if (id <= 5) {
            $("#dec-img-" + (id + 1)).toggle();
            if (bucky.hat.indexOf(id) > -1) {
                bucky.hat.splice(bucky.hat.indexOf(id), 1);
            } else {
                bucky.hat.push(id);
            }
        } else if (id == 6) {
            bucky.hat = [];
            $(".dec").hide();
        } else if (id == 7) {
            current_location = 0;
            update_square_img();
        }
        
    } else if (current_location == 4) { // cloth
        if (id <= 3) {
            bucky.cloth = id;
            $(".cloth").hide();
            $("#cloth-img-" + (id + 1)).toggle();
        } else if (id == 4) {
            bucky.cloth = -1;
            $(".cloth").hide();
        } else if (id == 5) {
            current_location = 0;
            update_square_img();
        }

    } else if (current_location == 5) { // shoes
        if (id <= 3) {
            bucky.shoes = id;
            $(".shoes").hide();
            $("#shoes-img-" + (id + 1)).toggle();
        } else if (id == 4) {
            bucky.shoes = -1;
            $(".shoes").hide();
        } else if (id == 5) {
            current_location = 0;
            update_square_img();
        }

    } else if (current_location == 6) { // skin
        if (id <= 3) {
            bucky.skin = id;
            $(".bucky").hide();
            $("#bucky-" + (id + 1)).toggle();
        } else if (id == 4) {
            bucky.skin = 0;
            $(".bucky").hide();
            $("#bucky-1").toggle();
        } else if (id == 5) {
            current_location = 0;
            update_square_img();
        }

    }
}

function show_activity() {
    $("#main-wrap").append("<div id='final-evalu'></div>");
    $("#final-evalu").html("<img id='evalu-back' src='./../img/mix/report.png'></img>");
    $("#column-left").hide();
    $("#column-right").hide();
    $("#final-evalu").append("<div id='final-evalu-content'></div>");
    $("#final-evalu-content").html("<p>Your Carbon estimate is " +
        bucky.calculate_carbon() + " </p>");
    $("#final-evalu").append("<img src='./../img/mix/evalu-logo.png' id='evalu-logo'></img>");
    // $("#final-evalu").append("<div class='' id='evalu-chart'></div>");
    create_pi();
    $(".canvasjs-chart-container").css("position", "absolute");
    $(".canvasjs-chart-container").css("top", "200px");
    $(".canvasjs-chart-container").css("left", "-150px");
}
var current_location = 0;

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
        current_location = id + 1;
        update_square_img();
    } else if (current_location == 1) { // background
        switch (id) {
            case 0:
                document.body.style.background = 
                    "url(./../img/background/background_luxuryHotel.png)";
                break;
            case 1:
                document.body.style.background = 
                    "url(./../img/background/background_nature.png)";
                break;
            case 2:
                document.body.style.background = 
                    "url(./../img/background/background_rural.png)";
                break;
            case 3:
                document.body.style.background = 
                    "url(./../img/background/background_urban.png)";
                break;
            case 4:
                document.body.style.background = null;
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
        current_location = 0;
        switch (id) {
            case 0:
                break;
            case 1:
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                break;
            case 5:
                break;
            default:
                console.log("error");
                break;
        }

    } else if (current_location == 3) { // hat
        current_location = 0;
        switch (id) {
            case 0:
                break;
            case 1:
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                break;
            case 5:
                break;
            default:
                console.log("error");
                break;
        }
        
    } else if (current_location == 4) { // cloth
        if (id <= 3) {
            $(".cloth").hide();
            $("#cloth-img-" + (id + 1)).toggle();
        } else if (id == 4) {
            $(".cloth").hide();
        } else if (id == 5) {
            current_location = 0;
            update_square_img();
        }

    } else if (current_location == 5) { // shoes
        if (id <= 3) {
            $(".shoes").hide();
            $("#shoes-img-" + (id + 1)).toggle();
        } else if (id == 4) {
            $(".shoes").hide();
        } else if (id == 5) {
            current_location = 0;
            update_square_img();
        }

    } else if (current_location == 6) { // skin
        if (id <= 2) {
            $(".bucky").hide();
            $("#bucky-" + (id + 1)).toggle();
        } else if (id == 3) {
            $(".bucky").hide();
        } else if (id == 4) {
            current_location = 0;
            update_square_img();
        }

    }
}


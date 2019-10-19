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
    console.log(e.target.id);
    var id = e.target.id.substr(e.target.id.length - 1, 1)
    id = parseInt(id);
    
    console.log(id);
    current_location = 1;

    if (current_location == 0) {
    } else if (current_location == 1) {
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
    } else if (current_location == 2) {

    } else if (current_location == 3) {
        
    } else if (current_location == 4) {

    } else if (current_location == 5) {

    } else if (current_location == 6) {

    }

    "./../img/background/background_luxuryHotel.png", 
    "./../img/background/background_nature.png",
    "./../img/background/background_rural.png", 
    "./../img/background/background_urban.png"


}


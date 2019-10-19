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
    
}


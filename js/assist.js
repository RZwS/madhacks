function dragFromRight(e){
// var id = e.target.id.substr(e.target.id.length - 1, 1)
   var image = $("#" + e.target.id).prop("background-image");
   $("#column-wrap").append(
         "<div class='drag_item' id='drag_" + e.target.id +
         "'><img src='" + image +"' class='dragImage'><img></div>");
    
   $("#" + id).css("background-image", null);
   

}


function draw_activity() {
    $("#main-wrap").append(
        "<div id='activity-B' class='ab-class'></div>");
    $("#activity-B").css("background", "url('./../img/activity/activityPage.png'");
    $("#activity-B").css("background-size", "cover");
    $("#activity-B").css("top", "100px");
    $("#activity-B").css("width", "40%");
    $("#activity-B").css("left", "30%");
    $("#activity-B").css("height", "100%");
   

    $("#activity-B").append(
        "<div id='activity-1' class='activity ab-class'><img src='./../img/activity/activity1.png'\
        class='activity' id='activity-img-1'></img></div>");
    
    // $("#activity-img-1").css("width", "150px");
    $("#activity-1").css("top", "35%");
    

    $("#activity-B").append(
        "<div id='activity-2' class='activity ab-class'><img src='./../img/activity/activity2.png'\
        class='activity' id='activity-img-2'></img></div>");
    // $("#activity-img-2").css("width", "150px");
    $("#activity-2").css("top", "50%");
       

    $("#activity-B").append(
        "<div id='activity-3' class='activity ab-class'><img src='./../img/activity/activity3.png'\
        class='activity' id='activity-img-3'></img></div>");
    // $("#activity-img-3").css("width", "150px");
    $("#activity-3").css("top", "65%");
}
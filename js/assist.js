function dragFromRight(e){
// var id = e.target.id.substr(e.target.id.length - 1, 1)
   var image = $("#" + e.target.id).prop("background-image");
   $("#column-wrap").append(
         "<div class='drag_item' id='drag_" + e.target.id +
         "'><img src='" + image +"' class='dragImage'><img></div>");
    
   $("#" + id).css("background-image", null);
   

}


function draw_activity() {
    $("#column-left").append(
        "<div id='activity-B' class='activity'><img src='./../img/activity/Page.png'\
        class = 'activity' id='activity-background'></img></div>");
    $("id='activity-background").css("position", "absolute");
    $("#activity-B").css("margin-top", "100px");
   

    $("#column-left").append(
        "<div id='activity-1' class='activity'><img src='./../img/activity/activity1.png'\
        class = 'activity' id='activity-img-1'></img></div>");
    $("#activity-img-1").css("width", "150px");
    $("#activity-1").css("margin-top", "200px");
    

    $("#column-left").append(
        "<div id='activity-2' class='activity'><img src='./../img/activity/activity2.png'\
        class = 'activity' id='activity-img-2'></img></div>");
        $("#activity-img-2").css("width", "150px");
        $("#activity-2").css("margin-top", "250px");
       

    $("#column-left").append(
        "<div id='activity-3' class='activity'><img src='./../img/activity/activity3.png'\
        class = 'activity' id='activity-img-1'></img></div>");
     $("#activity-img-3").css("width", "150px");
    $("#activity-3").css("margin-top", "200px");
    
   

    $(".shoes").hide();
}
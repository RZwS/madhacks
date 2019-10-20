function dragFromRight(e){
// var id = e.target.id.substr(e.target.id.length - 1, 1)
   var image = $("#" + e.target.id).prop("background-image");
   $("#column-wrap").append(
         "<div class='drag_item' id='drag_" + e.target.id +
         "'><img src='" + image +"' class='dragImage'><img></div>");
    
   $("#" + id).css("background-image", null);
   

}
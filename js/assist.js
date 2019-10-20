

function dragFromRight(e){
 var id =e.target.id.substr(e.target.id.length - 1, 1)

 if(e.onclick){

    var image = $("#"+id).prop("background-image");
    $("#column-wrap").append(
        "<div id='draging' class='dragItem'><img src='" +image+"' id='dragImage'><img></div>");

    
    
     $("#"+id).css("background-image",null);

    

}
  
   

}
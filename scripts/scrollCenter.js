var contents = document.getElementsByClassName("content-section")[0];
var marker = document.getElementById("scrollMarker");
contents.addEventListener("mouseover", function(){
    marker.scrollIntoView({behavior: "smooth"});
}, {once:true})
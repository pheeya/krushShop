//search functionality

function search() {
    var input = document.getElementById("search");
    var filter = input.value.toUpperCase();
    var services = document.getElementsByClassName("col-lg-3");
    for(let i=0;i<services.length;i++){
      var title = services[i].getElementsByClassName('profile__product__title1')[0].innerText;
    
        if (title.toUpperCase().indexOf(filter)>-1){
          services[i].style.display="";
      }
      else{
          services[i].style.display="none"
      }
    }
}


//scroll cards container into view
var contents = document.getElementsByClassName("content-section")[0];
var marker = document.getElementById("scrollMarker");
contents.addEventListener("mouseover", function(){
    marker.scrollIntoView({behavior: "smooth"});
}, {once:true})



// add in stock label to all cards
var cards = Array.from(document.getElementsByClassName("profile__product__info"));

cards.forEach(function(card){
    var stock  = document.createElement("div");
    if(card.classList.contains("noStock")){
        stock.innerHTML="<i class='far fa-circle'></i>Not In Stock";
    }
    else {
        stock.innerHTML="<i class='far fa-circle'></i>In Stock";
    }
    stock.classList.add("stock");

    card.appendChild(stock)
});



var telegramOpener = document.getElementById("telegramButton");
var chatBox = document.getElementsByClassName("chatBox")[0];
var cross = document.getElementsByClassName("cross")[0];
telegramOpener.addEventListener("click", function(){
chatBox.style.maxWidth="100%";
chatBox.style.maxHeight="400px";
});

cross.addEventListener("click", function(){
    chatBox.style.maxWidth="0";
    chatBox.style.maxHeight="0";
    })
    

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


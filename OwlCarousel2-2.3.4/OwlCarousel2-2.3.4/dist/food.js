console.log('food.js included')
// When the user clicks on <div>, open the popup


$().ready(function(){

    var popup;

    /*$(document).click(function(){
        popup.classList.toggle("show");
    });*/

$(".popup").click(function(){
    popup = this.childNodes[1];
    popup.classList.toggle("show");
})



});
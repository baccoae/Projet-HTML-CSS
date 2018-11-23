console.log('food.js included')
// When the user clicks on <div>, open the popup
/*function myFunction(event) {
    var popup = document.getElementById("myPopup");
    //var popup = event.target.getElementByClassName("myPopup");
    popup.classList.toggle("show");
}*/

$().ready(function(){

$(".popup").click(function(){
    var popup = document.getElementById("myPopup");
    //var popup = event.target.getElementByClassName("myPopup");
    popup.classList.toggle("show");
})

});
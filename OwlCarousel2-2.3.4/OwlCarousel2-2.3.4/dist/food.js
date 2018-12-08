console.log('food.js included')
// When the user clicks on <div>, open the popup


$().ready(function(){

    var popup;
    var x;

    if (window.innerWidth<600){
        x=2;
        console.log("width < 600");
    }
    else if(window.innerWidth<1000){
        console.log("width<1000");
        x=1;
    }
    else{
        x=0;
        console.log("width>1000");
    }

    /*$(document).click(function(){
        popup.classList.toggle("show");
    });*/

$(".popup").click(function(){
    
    console.log($("#myBigCarousel").owlCarousel);
    $('#myBigCarousel').trigger('stop.owl.autoplay');
    $('#myLittleCarousel').trigger('stop.owl.autoplay');
    $('#stop').val("Relancer le plateau");
    $('#description-box').empty();
    var data = $(this).attr('id');
    var findIt = $('#definition').find('[data-popup=' + data + ']');
    var position = $('#definition').find('[data-popup=' + data + ']').attr('data-place');
    console.log(position);
    $('#myBigCarousel').trigger('to.owl.carousel', position-x);
    $('#myLittleCarousel').trigger('to.owl.carousel', position-5);
    var copie = findIt.clone();
    $('#description-box').append(copie);
    console.log($('#description-box').find('[data-popup=' + data + ']').toggleClass("show"));

    //console.log($(this).find('.popuptext').toggleClass("show"));
    

})



});
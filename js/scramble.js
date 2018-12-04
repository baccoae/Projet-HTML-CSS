console.log('scramble.js has been linked.');

$(document).ready(function() {

  $('#sec-change1').on('mouseenter', function(e) {
    TweenLite.to("#sec-change1", 0.5, {scrambleText:{text:"Accueil", chars:"upperAndLowerCase", revealDelay:0.2, tweenLength:false, ease:Linear.easeNone}})
  });

  $('#sec-change1').on('mouseleave', function(e) {
    TweenLite.to("#sec-change1", 0.5, {scrambleText:{text:"歓迎", chars:"upperAndLowerCase", revealDelay:0.5, tweenLength:false, ease:Linear.easeNone}} );
  });


  $('#sec-change2').on('mouseenter', function(e) {
    TweenLite.to("#sec-change2", 0.5, {scrambleText:{text:"Découvrir", chars:"upperAndLowerCase", revealDelay:0.2, tweenLength:false, ease:Linear.easeNone}})
  });

  $('#sec-change2').on('mouseleave', function(e) {
    TweenLite.to("#sec-change2", 0.5, {scrambleText:{text:"発見", chars:"upperAndLowerCase", revealDelay:0.5, tweenLength:4, ease:Linear.easeNone}} );
  });


  $('#sec-change3').on('mouseenter', function(e) {
    TweenLite.to("#sec-change3", 0.5, {scrambleText:{text:"Nourriture", chars:"upperAndLowerCase", revealDelay:0.2, tweenLength:false, ease:Linear.easeNone}})
  });

  $('#sec-change3').on('mouseleave', function(e) {
    TweenLite.to("#sec-change3", 0.5, {scrambleText:{text:"食べ物", chars:"upperAndLowerCase", revealDelay:0.5, tweenLength:false, ease:Linear.easeNone}} );
  });


  $('#sec-change4').on('mouseenter', function(e) {
    TweenLite.to("#sec-change4", 0.5, {scrambleText:{text:"Ancestral", chars:"upperAndLowerCase", revealDelay:0.2, tweenLength:false, ease:Linear.easeNone}})
  });

  $('#sec-change4').on('mouseleave', function(e) {
    TweenLite.to("#sec-change4", 0.5, {scrambleText:{text:"先祖", chars:"upperAndLowerCase", revealDelay:0.5, tweenLength:4, ease:Linear.easeNone}} );
  });


  $('#sec-change5').on('mouseenter', function(e) {
    TweenLite.to("#sec-change5", 0.5, {scrambleText:{text:"Contemporain", chars:"upperAndLowerCase", revealDelay:0.2, tweenLength:false, ease:Linear.easeNone}})
  });

  $('#sec-change5').on('mouseleave', function(e) {
    TweenLite.to("#sec-change5", 0.5, {scrambleText:{text:"現在", chars:"upperAndLowerCase", revealDelay:0.5, tweenLength:4, ease:Linear.easeNone}} );
  });

});
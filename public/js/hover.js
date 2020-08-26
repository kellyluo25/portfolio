$(document).ready(function() {
    $(".box").hover(function(){
    $('.box').not(this).removeClass('show');
    $(this).toggleClass('show');
    });
      
    $(".box-featured").hover(function(){
    $('.box-featured').not(this).removeClass('show');
    $(this).toggleClass('show');
    }); 
});
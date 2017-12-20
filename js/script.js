$(document).ready(function(){ 

  $('#scroll-top-btn').on('click', function (e) { 
    e.preventDefault();              
    $('body,html').animate({'scrollTop':0},1000); 
  });
});
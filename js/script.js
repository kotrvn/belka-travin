$(document).ready(function(){ 
// Плавный скролл наверх
  $('#scroll-top-btn').on('click', function (e) { 
    e.preventDefault();              
    $('body,html').animate({'scrollTop':0},1000); 
  });

// Слайдеры
  $('#track-slider').slick({
        mobileFirst: true,
        slidesToShow: 1,
        centerMode: true,
        arrow: true
  });
  $('#galery-slider').slick({
        mobileFirst: true,
        slidesToShow: 1,
        centerMode: true,
        arrow: true
  });
  $('#review-slider').slick({
        mobileFirst: true,
        slidesToShow: 1,
        centerMode: true,
        arrow: true
  });
});
$(document).ready(function(){ 
  let link = $('accordion-link');
  let drop = $('.accordion-link__list--hidden');

    link.on('click', function(e) {
    e.preventDefault();
    drop.toggleClass('.accordion-link--active')
  });




  });
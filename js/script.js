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
        arrow: true,
        nextArrow: '<button type="button" class="slick-next"></button>',
        prevArrow: '<button type="button" class="slick-prev"></button>'
  });
  $('#galery-slider').slick({
        mobileFirst: true,
        slidesToShow: 1,
        arrow: true,
        nextArrow: '<button type="button" class="slick-next"></button>',
        prevArrow: '<button type="button" class="slick-prev"></button>'
  });
  $('#review-slider').slick({
        mobileFirst: true,
        slidesToShow: 1,
        arrow: true,
        nextArrow: '<button type="button" class="slick-next"></button>',
        prevArrow: '<button type="button" class="slick-prev"></button>'

  });

  // Аккордеон

  $('.price__content').hide();

  $('.price__trigger').on('click', function(){
    $(this).closest('.price').find('.price__content').slideToggle();
  });

  $('#price input:radio').on('change', function(){
    calcPrice();
  });

  calcPrice();

  function calcPrice () {
    var price = 0;

    $('#price input:checked').each(function(){
      price = price + $(this).data('price');
    });

    $('#price-view').text(price);
  }

  // Навигация
  // let burger = $('.j-burger');
  // let dropdown = $('j-header-nav');

  // burger.on('click', function() {
  //   if (dropdown.hasClass('is-drop') ) {
  //     dropdown.removeClass('is-drop');
  //     return;
  //   }

  //   dropdown.addClass('is-drop');
  // });

});

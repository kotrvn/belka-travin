$(document).ready(function(){ 
// Плавный скролл наверх
  $('#scroll-top-btn').on('click', function (e) { 
    e.preventDefault();              
    $('body,html').animate({'scrollTop':0},1000); 
  });


// Слайдеры

  function slickTrack() {
      $('#track-slider').slick({
      mobileFirst: true,
      slidesToShow: 1,
      arrow: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1280,
          settings: 'unslick'
        }
      ],
      nextArrow: '<button type="button" class="slick-next"></button>',
      prevArrow: '<button type="button" class="slick-prev"></button>'
    });
  }
  
  slickTrack();

  $(window).resize(function() {
    if ($('#track-slider').hasClass('slick-initialized')) {
      console.log('Eже работает!');
      return;
    }
    else if ( $(window).width() < 1280 ) {
      console.log('Врубил');
      slickTrack(); 
    } else {
      console.log('И нна, не включу');
    }
  });

  function slickGalery() {
    $('#galery-slider').slick({
      mobileFirst: true,
      slidesToShow: 1,
      arrow: true,
      responsive: [
        {
          breakpoint: 767,
          settings: 'unslick'
        }
      ],
      nextArrow: '<button type="button" class="slick-next"></button>',
      prevArrow: '<button type="button" class="slick-prev"></button>'
    });
  }

  slickGalery();

  $(window).resize(function() {
    if ($('#galery-slider').hasClass('slick-initialized')) {
      console.log('Eже работает!');
      return;
    }
    else if ( $(window).width() < 768 ) {
      console.log('Врубил');
      slickGalery(); 
    } else {
      console.log('И нна, не включу');
    }
  });

    $('#review-slider').slick({
          mobileFirst: true,
          slidesToShow: 1,
          arrow: true,
          responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          }
          ],
          nextArrow: '<button type="button" class="slick-next"></button>',
          prevArrow: '<button type="button" class="slick-prev"></button>'
    });
  });
  
  // Аккордеон
$(document).ready(function(){
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
});

$(document).ready(function(){
  // Навигация
  let burger = $('.j-burger');
  let dropdown = $('.j-header-nav');

  burger.on('click', function() {
    if (dropdown.hasClass('is-drop') ) {
      dropdown.removeClass('is-drop');
      return;
    }

    dropdown.addClass('is-drop');
  });
});

// Определение точных координат: http://www.mapcoordinates.net/ru
// Примеры кода: https://developers.google.com/maps/documentation/javascript/examples/?hl=ru

// Одна или несколько точек на карте
var mapPoints = [
  [
    'Точка на карте', 
    60.038246, 
    30.317798, 
    '<div class="some-class"><h2>Белка</h2><p>Лучший скалодром в городе</p></div>'
  ]
];

// Стилизация карты
// Подробнее о стилях: https://developers.google.com/maps/documentation/javascript/styling?hl=ru
var mapStyle = [{
  featureType: 'all',
  stylers: [{ saturation: -100 }]
}];

// Будущее инфоокно, возникающее по клику на маркере карты
var mapInfoWindow = null;

// Инициализация карты (вызывается после загрузки скрипта)
function initMap() {
  // Найдем тег карты по id
  var mapDiv = document.getElementById('map');
  // Определим центр карты
  var center = {lat: 60.038246, lng: 30.317798};
  // Создадим объект карты
  var map = new google.maps.Map(mapDiv, {
    zoom: 13,
    center: center,
    disableDefaultUI: true,
    styles: mapStyle
  });
  //  Вызовем функцию, которая расставит маркеры
  setMapMarkers(map);
  // Создадим объект инфоокна
  mapInfoWindow = new google.maps.InfoWindow({
    content: "loading...",
    maxWidth: 200
  });
  // Начнем следить за ресайзом карты
  map.addListener('resize', function() {
    map.panTo(center); // Отцентруем
  });
  // Начнем следить за ресайзом окна (важно, если ресайз окна влияет на размер блока карты)
  google.maps.event.addDomListener(window, 'resize', function(){
    google.maps.event.trigger(map, 'resize'); // Вызовем событие ресайза карты
  });
  // Начнем следить за изменением центра, через 3 с. вернем центр по умолчанию
  // map.addListener('center_changed', function() {
  //   window.setTimeout(function() {
  //     map.panTo(center);
  //   }, 3000);
  // });
}

// Функция проставляет маркеры карты
function setMapMarkers(map) {
  // Данные о картинке-маркере (в этом примере для всех маркеров одна картинка)
  var image = {
    url: '../img/map_marker.png',
    // Эта картинка 128×128 пикселей.
    // Точка «упора» нарисованного маркера по горизонтали — середина 
    // Точка «упора» нарисованного маркера по вертикали в 11 пикселях от нижнего края картинки 
    size: new google.maps.Size(22, 30),
    anchor: new google.maps.Point(11, 19) // 128 / 2 (горизонталь) и 128 - 11 (вертикаль)
  };
  // Обходим массив маркеров и проставляем каждый
  for (var i = 0; i < mapPoints.length; i++) {
    // Переменная с данными этой точки
    var point = mapPoints[i];
    // Создаем маркер карты
    var marker = new google.maps.Marker({
      position: {lat: point[1], lng: point[2]},
      map: map,
      icon: image,
      title: point[0],
      html: point[3],
    });
    // Начинаем следить за кликом на маркере
    google.maps.event.addListener(marker, 'click', function () {
      mapInfoWindow.setContent(this.html);
      mapInfoWindow.open(map, this);
    });
  }
}


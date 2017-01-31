$(function initializeMap (){
  var markerArray = [];
  const hotelArr = [];
  const activityArr = [];
  const restaurantArr = [];
  var fullstackAcademy = new google.maps.LatLng(40.705086, -74.009151);

  var styleArr = [{
    featureType: 'landscape',
    stylers: [{ saturation: -100 }, { lightness: 60 }]
  }, {
    featureType: 'road.local',
    stylers: [{ saturation: -100 }, { lightness: 40 }, { visibility: 'on' }]
  }, {
    featureType: 'transit',
    stylers: [{ saturation: -100 }, { visibility: 'simplified' }]
  }, {
    featureType: 'administrative.province',
    stylers: [{ visibility: 'off' }]
  }, {
    featureType: 'water',
    stylers: [{ visibility: 'on' }, { lightness: 30 }]
  }, {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [{ color: '#ef8c25' }, { lightness: 40 }]
  }, {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{ visibility: 'off' }]
  }, {
    featureType: 'poi.park',
    elementType: 'geometry.fill',
    stylers: [{ color: '#b6c54c' }, { lightness: 40 }, { saturation: -40 }]
  }];

  var mapCanvas = document.getElementById('map-canvas');

  var currentMap = new google.maps.Map(mapCanvas, {
    center: fullstackAcademy,
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: styleArr
  });

  var iconURLs = {
    hotel: '/images/lodging_0star.png',
    restaurant: '/images/restaurant.png',
    activity: '/images/star-3.png'
  };

  function drawMarker (type, coords) {
    var latLng = new google.maps.LatLng(coords[0], coords[1]);
    var iconURL = iconURLs[type];
    var marker = new google.maps.Marker({
      icon: iconURL,
      position: latLng
    });


   if (type === 'hotel') {
    hotelArr.push(marker);
    if (hotelArr.length > 1) {
      hotelArr[0].setMap(null);
      hotelArr.shift();
    }
  }
   if (type === 'activity') activityArr.push(marker);
   if (type === 'restaurant') restaurantArr.push(marker);
   marker.setMap(currentMap);

   //marker.getPosition().lat()
    //marker.getPosition().lng()

  }

  // drawMarker('hotel', [40.705137, -74.007624]);
  // drawMarker('restaurant', [40.705137, -74.013940]);
  // drawMarker('activity', [40.716291, -73.995315]);



function findKey(obj, currentItem ){
  for (var key in obj){
    if (obj[key].name === currentItem){
      return obj[key].place.location;
    }
  }
}


$('#hotel-choices').siblings('button').on('click', function(){
    const currentHotel = $('#hotel-choices').find('option:selected').val();
    const location = findKey(hotels, currentHotel);
    var marker = drawMarker('hotel', location);
});

$('#restaurant-choices').siblings('button').on('click', function(){
    const currentRestaurant = $('#restaurant-choices').find('option:selected').val();
    const location = findKey(restaurants, currentRestaurant);
    drawMarker('restaurant', location);
});

$('#activity-choices').siblings('button').on('click', function(){
    const currentActivity = $('#activity-choices').find('option:selected').val();
    const location = findKey(activities, currentActivity);
    drawMarker('activity', location);
});


$('.hotel-list').on('click', 'button', function(){
    const currentHotel = $(this).prev().data('name');
    const location = findKey(hotels, currentHotel);
    hotelArr.forEach( (hotel, index, array) => {
      let lat = parseFloat(hotel.getPosition().lat().toFixed(6));
      let lng = parseFloat(hotel.getPosition().lng().toFixed(6));

      if (lat === location[0] && lng === location[1]){
        hotel.setMap(null);
        array[index] = array[array.length - 1];
        array.pop();

      }
    })

})

//Have to remove markers from itinerary



});

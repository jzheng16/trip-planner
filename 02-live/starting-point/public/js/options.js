$(document).ready(function(){
  hotels.forEach(hotel => {
    $('#hotel-choices').append(`<option value="${hotel.name}">${hotel.name}</option>`);
  })

  restaurants.forEach(restaurant => {
    $('#restaurant-choices').append(`<option value="${restaurant.name}">${restaurant.name}</option>`);
  })

  activities.forEach(activity => {
    $('#activity-choices').append(`<option value="${activity.name}">${activity.name}</option>`);

  })
})

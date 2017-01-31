$(document).ready(function(){

  $('#hotel-choices').siblings('button').on('click', function(){
    const currentHotel = $('#hotel-choices').find('option:selected').val();
    let itineraryItem = `<div class="itinerary-item"><span data-name="${currentHotel}">${currentHotel}</span><button class="btn btn-xs btn-danger remove btn-circle">x</button></div>`

    if ($('.hotel-list').children().length){
      $('.hotel-list').children().first().replaceWith(itineraryItem);
    }
    else {
      $('.hotel-list').append(itineraryItem);
    }

  })

 $('#restaurant-choices').siblings('button').on('click', function(){
  const currentRestaurant = $('#restaurant-choices').find('option:selected').val();
  let itineraryItem = `<div class="itinerary-item"><span ="${currentRestaurant}">${currentRestaurant}</span><button class="btn btn-xs btn-danger remove btn-circle">x</button></div>`
  $('.restaurant-list').append(itineraryItem);
})

  $('#activity-choices').siblings('button').on('click', function(){
  const currentActivity = $('#activity-choices').find('option:selected').val();
  let itineraryItem = `<div class="itinerary-item"><span class="${currentActivity}">${currentActivity}</span><button class="btn btn-xs btn-danger remove btn-circle">x</button></div>`
  $('.activity-list').append(itineraryItem);
  })


$('.hotel-list').on('click', 'button', function(){
    $(this).parent().remove();

})


});



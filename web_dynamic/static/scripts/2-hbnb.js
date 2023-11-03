$(document).ready(function () {
  const id = {};
  $('input[data-id]').on('change', function () {
    if (this.checked) {
      const amenity_id = $(this).attr('data-id');
      const amenity_name = $(this).attr('data-name');
      id[amenity_id] = amenity_name;
    } else {
      delete id.amenity_id;
    }
    $('.amenities H4').text(Object.values(id).join(', '));
  });
});

const url = 'http://' + window.location.hostname + ':5001/api/v1/status/';
$.get(url, function (data) {
  if (data.status === 'OK') {
    $('div#api_status').addClass('available');
  } else {
    $('div#api_status').removeClass('available');
  }
});

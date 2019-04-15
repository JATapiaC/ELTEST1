// Initialize and add the maps
function initMap() {
  // Your location
  const loc = { lat: 34.0522, lng: -118.2437 };

  // 34.0522° N, 118.2437° W

  // Centered map on lcoation
  const map = new google.maps.Map(document.querySelector('.map')
  , {
    zoom: 14,
    center: loc
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map });
}

window.addEventListener('scroll', function() {
  if(window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});

// Smooth Scrolling
$('#navbar a').on('click', function(event) {
  if(this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});

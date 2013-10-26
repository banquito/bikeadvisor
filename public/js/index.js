$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  $("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
  });

  $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#sidebar-wrapper").toggleClass("active");
  });

  function initialize() {
    
    google.maps.visualRefresh = true;
    var map = new google.maps.Map(document.getElementById('search'), {
      center: new google.maps.LatLng(-34.6217381, 58.416051),
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    // Try W3C Geolocation (Preferred)
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
        map.setCenter(initialLocation);
      });
    }

    layer = new google.maps.FusionTablesLayer({
      map: map,
      heatmap: { enabled: false },
      query: {
        select: "col3",
        from: "1TPLF1lEXlNzf7aL-eT7b6Qh33EjI8Su6efKnapU",
        where: ""
      },
      options: {
        styleId: 2,
        templateId: 2
      }
    });
  }

  google.maps.event.addDomListener(window, 'load', initialize);
});
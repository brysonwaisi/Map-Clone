
  mapboxgl.accessToken = 'pk.eyJ1IjoiYnJ5c29uMjQiLCJhIjoiY2tyMTVhZzdlMXl5cjJ2cXBwMW45enhwNSJ9.t0wXwefMyq9u61wiWo1nHA';
  
  navigator.geolocation.getCurrentPosition(successLocation, errorLocation,{ enableHighAccuracy:true})
  
  function successLocation(position){
      setupMap([position.coords.longitude, position.coords.latitude])
  }
  function errorLocation(){
      setupMap([-122.41, 37.77])
  }


  function setupMap(center){
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 13
      });
     const nav = new mapboxgl.NavigationControl();
     map.addControl(nav);
     const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
        
      })
      
      map.addControl(directions, 'top-left') 
  }
  
  
  

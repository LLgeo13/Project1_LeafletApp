var map = L.map('map').setView([41.595, -93.55], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

function onEachFeature(feature, layer) {
  if (feature.properties && feature.properties.Name) {
    layer.bindPopup("<b>" + feature.properties.Name + "</b>");
    }
}

// Add Buildings_and_Structures layer
$.getJSON("https://gist.githubusercontent.com/LLgeo13/8132f355742d56f3c1fb85419c9ab959/raw/d64c0d2c473bfa08f7e95f3152a052067f9c7b01/Buildings_and_Structures.geojson", function(data) {
  L.geoJson(data, {
    style: {
      color: "#ff0000",
      weight: 3,
      opacity: 0.8
    },
    onEachFeature: onEachFeature
  }).addTo(map);
});

// Add Tram_Line layer
$.getJSON("https://gist.githubusercontent.com/LLgeo13/71313ed5ed7748cc99b2b73b7d59270e/raw/d4eeb9cbdf88681ea534d3e643086d86ba145490/TramPath.geojson", function(data) {
  L.geoJson(data, {
    style: {
      color: "#00CED1",
      weight: 3,
      opacity: 1
        },
    onEachFeature: onEachFeature  
  }).addTo(map);
});

// Add Entrances Layer
$.getJSON("https://gist.githubusercontent.com/LLgeo13/822dbe042602f9bd82aa500213fbc0a6/raw/bbbfec2ad9b49907918e6902160a051861f46a17/Gates.geojson", function(data) {
  L.geoJson(data, {
    pointToLayer: function(feature, latlng) {
      return L.marker(latlng, {
        icon: L.divIcon({
          className: 'custom-icon',
          html: '<div style="background-color: rgba(244, 247, 134, 1); width: 10px; height: 10px; border: 2px solid black;"></div>',
          iconSize: [10, 10]
        })
      });
        },
    onEachFeature: onEachFeature  
  }).addTo(map);
});

// Add Favorites Layer
$.getJSON("https://gist.githubusercontent.com/LLgeo13/f76df1022122c574ddc8ac8dc4909f2b/raw/15a7ec4e06a33d99a2385dd4b13114a255ffaedf/Favorites.geojson", function(data) {
  L.geoJson(data, {
    pointToLayer: function(feature, latlng) {
      return L.marker(latlng, {
        icon: L.divIcon({
          className: 'custom-icon',
          html: '<div style="background-color: #00ff00; width: 8px; height: 8px; border: 2px solid black; border-radius: 50%;"></div>',
          iconSize: [8, 8]
        })
      });
        },
    onEachFeature: onEachFeature
  }).addTo(map);
});

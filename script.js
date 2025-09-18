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
$.getJSON("https://gist.githubusercontent.com/LLgeo13/05174c9cc83fec6b482087893b30f570/raw/53d38febf43fc01a773a6c7ac5e2dbdcbc2a1f4b/Tram_Lines_SmoothLine.geojson", function(data) {
  L.geoJson(data, {
    style: {
      color: "#00CED1",
      weight: 3,
      opacity: 1
        },
  }).addTo(map);
});

// Add Entrances Layer
$.getJSON("https://gist.githubusercontent.com/LLgeo13/52fcd1eed3a3c9c249f842b2b905d91b/raw/89f9de24aa2b40152f28c864a94ce83734192d63/Entrances.geojson", function(data) {
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
  }).addTo(map);
});

// Add Favorites Layer
$.getJSON("https://gist.githubusercontent.com/LLgeo13/750ae88a75b9eedee8e2117081cf2ea3/raw/14c65ef9ab248741b615fb7b73786e93d479dc79/gistfile1.txt", function(data) {
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

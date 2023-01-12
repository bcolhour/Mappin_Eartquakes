// Create the map object with a center and zoom level.
// Create the map object with center at the San Francisco airport.
// let map = L.map('mapid').setView([30, 30], 3
// );

// Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"14",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};

//create the GeoJSON layer and add it to our map
//L.geoJSON(geojsonFeature).addTo(map);
// Grabbing our GeoJSON data.
//L.geoJSON(sanFranAirport, ).addTo(map);



//The pointToLayer Function
//Grabbing our GeoJSON data
// L.geoJson(sanFranAirport, {
//   //We turn each feature into a marker on our map
//   pointToLayer: function(feature, latlng) {
//     console.log(feature);
//     return L.marker(latlng)
//    .bindPopup("<h2> Airport Code: " + feature.properties.faa 
//       + "</h2>" + "<h4> Airport Name: " + feature.properties.name + "</h4>");
//   }
//   }).addTo(map);

// onEachFeature
// L.geoJson(sanFranAirport, {
//     //We turn each feature into a marker on our map
//    onEachFeature: function(feature, layer) {
//       console.log(layer);
//       layer.bindPopup();
//     }
//     }).addTo(map);

// L.circleMarker([34.0522, -118.2437],{
//     radius: 300,
//     color:"black", fillColor:"yellow"}).addTo(map);


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
var dark = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "dark-v10",
  accessToken: API_KEY
});

// var outdoors = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//   attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//   maxZoom: 18,
//   id: "outdoors-v11",
//   accessToken: API_KEY
// });


// Create a base layer that holds both maps.
let baseMaps = {
  Street: streets,
  Dark: dark
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [30, 30],
  zoom: 2,
  layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
// dark.addTo(map);
//outdoors.addTo(map);

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/bcolhour/Mapping_Earthquakes/main/majorAirports.json";

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJSON(data).addTo(map);
});





// L.geoJson(sanFranAirport, {
//   //We turn each feature into a marker on our map
//   pointToLayer: function(feature, latlng) {
//     console.log(feature);
//     return L.marker(latlng)
//    .bindPopup("<h2> Airport Code: " + feature.properties.faa 
//       + "</h2>" + "<h4> Airport Name: " + feature.properties.name + "</h4>");
//   }
//   }).addTo(map);
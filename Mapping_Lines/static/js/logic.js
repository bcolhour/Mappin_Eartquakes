
// Create the map object with a center and zoom level.
//let map = L.map('mapid').setView([36.1733, -120.1794], 7);

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6214, -122.3790], 4);

// Coordinates for each point to be used in the single line.
// let line = [
//   [33.9416, -118.4085],
//   [37.6214, -122.3790]
// ];

// Coordinates for each multipoint to be used in the polyline.
// let line = [
//   [33.9416, -118.4085],
//   [37.6214, -122.3790],
//   [40.7899, -111.9791],
//   [47.4502, -122.3088]
// ];

//JFK - XNA - AUS - YYZ
let line = [
  [33.9416, -118.4085],
  [30.1975, -97.6664],
  [36.2787, -94.3043],
  [40.6413, -73.7781],
  [43.6777, -79.6248]
];


// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "blue",
  opacity: 0.5,
  weight: 4,
  dashArray: '10, 20',
}).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
var satellite = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "satellite-streets-v11",
  accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
//dark.addTo(map)
// satellite.addTo(map);
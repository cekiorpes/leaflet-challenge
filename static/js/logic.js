//Create map with layers
let map = L.map("map", {
    center: [39.828175, -98.5795],
    zoom: 5,
});

// Create the background tile layer
let streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//Link for GeoJSON data
let link = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson";

//Getting GeoJSON data
d3.json(link).then(function(data) {
    L.geoJson(data).addTo(map);
});

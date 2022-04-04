//Create map with layers
let map = L.map("map", {
    center: [39.828175, -98.5795],
    zoom: 5,
});

// Create the background tile layer
let streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//Function for size of marker by magnitude
function chooseRadius(magnitude) {
    if (magnitude > 8) return 50 ;
    else if (magnitude >= 7) return 40;
    else if (magnitude >= 6) return 30;
    else if (magnitude >= 5) return 20;
    else if (magnitude >= 4) return 10;
    else return 5;
};

//Function for color of marker by depth
function chooseColor (depth) {
    if (depth > 300) return "red";
    else if (depth >= 70) return "yellow";
    else return "green";
};

//Link for GeoJSON data
let link = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

//Getting GeoJSON data
d3.json(link).then(function(data) {
    console.log(data);
    L.geoJson(data, {
        pointToLayer: (feature, coordinates)=> {
            return L.circleMarker(coordinates)
        },
        style: function(feature) {
            return {
                fillOpacity: 0.5,
                radius: chooseRadius(feature.properties.mag),
                fillColor: chooseColor(feature.geometry.coordinates[2]),
                color: "black",
            };
        },
    }).addTo(map);
});

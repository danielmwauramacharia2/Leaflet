// Base maps
var osmMap = L.tileLayer.provider("OpenStreetMap.Mapnik");
var stamenMap = L.tileLayer.provider("Stadia.StamenWatercolor");
var imageryMap = L.tileLayer.provider("Esri.WorldImagery");

var baseMaps = {
    OSM: osmMap,
    "Stamen Watercolor": stamenMap,
    "World Imagery": imageryMap,
};

// Initialize the map
var map = L.map('map', {
    center: [-1.286389, 36.817223],
    zoom: 5,
    layers: [osmMap]
});


// Initialize empty overlays first
var overlayMaps = {};

// Add layer control immediately
var layerControl = L.control.layers(baseMaps, overlayMaps, { position: 'topright' }).addTo(map);

// Fetch and add Kenya Counties later
var kenyaCountyLayer;
fetch('resources/Kenya_Counties_map.geojson')
    .then(response => response.json())
    .then(data => {
        kenyaCountyLayer = L.geoJSON(data, {
            style: {
                // color: '#5e0606ff',
                weight: 0.5,
                // fillColor: '#bc62b7ff',
                // fillOpacity: 0.5,
                // // fill: false
            },
            onEachFeature: function (feature, layer) {
                if (feature.properties && feature.properties.NAME) {
                    layer.bindPopup(feature.properties.NAME);
                }
            }
        }).addTo(map);

        // Update overlays AFTER layer is created
        layerControl.addOverlay(kenyaCountyLayer, "Kenya Counties");
    });

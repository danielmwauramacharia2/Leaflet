var osmMap = L.tileLayer.provider("OpenStreetMap.Mapnik");
var stamenMap = L.tileLayer.provider("Stadia.StamenWatercolor");
var imageryMap = L.tileLayer.provider("Esri.WorldImagery");

var baseMaps = {
    OSM: osmMap,
    "Stamen Watercolor": stamenMap,
    "World Imagery": imageryMap

}

var map = L.map('map', 
    {
        center: [-1.286389, 36.817223],
        zoom: 5,
        layers: [osmMap]
    });
var mapLayers = L.control.layers(baseMaps).addTo(map);




/* Begin by adding your on ready handler here, and then create the
   rest of your functions inside the on ready handler.

   (Note that you do not need to manually call Bootstrap functions in
   your Javascript because Bootstrap will automatically recognize your
   HTML structures and invoke the proper JS code accordingly. Be sure
   to reference the Bootstrap documentation.)
*/

// TODO: Inside of your on ready handler, invoke the Leaflet.js library
// to draw a map in your `#map-container` div.

// TODO: Add 2 layers to your map you have visuals. Use the Open Street Maps
// tiles served through the MapQuest CDN. Consult this example to set up
// the map tiles layers:


// TODO: Customize that Map to show markers with popups at no fewer than 3
// interesting locations. (You'll need to figure out the latitude/longitude for
// these locations using a mapping tool such as Google Maps.)

$(document).ready(function() {
// Added Map and two layers of Satellite and Terrian View

var map = L.map('map-container').setView([46.852, -121.760], 13);

var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
var osm = new L.tileLayer(osmUrl, {minZoom: 8, maxZoom: 18, attribution: osmAttrib});

var satelliteLayer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.satellite',
    accessToken: 'pk.eyJ1IjoibGV3aXNqMTMiLCJhIjoiY2oyMWEzZDBpMDAyMzJxcXQ4dHZhMWV6diJ9.yrUQusRNz7_GJHFztsDJIw'
});

var terrianLayer= L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 15,
    id: 'mapbox.mapbox-traffic-v1',
    accessToken: 'pk.eyJ1IjoibGV3aXNqMTMiLCJhIjoiY2oyMWEzZDBpMDAyMzJxcXQ4dHZhMWV6diJ9.yrUQusRNz7_GJHFztsDJIw'

});
var mapLayers = {
    "Open Street Maps": osm,
    "Satellite": satelliteLayer,
    "Terrian View": terrianLayer,
}

// Added Three Locations

L.control.layers(mapLayers).addTo(map);
osm.addTo(map);

var mountain = L.marker([46.852, -121.760]).addTo(map);
mountain.bindPopup("Mt. Rainier! Which is beautiful and majestic!");

var glacier = L.marker([46.834722, -121.746389]).addTo(map);
glacier.bindPopup("Nisqually Glaicer which is one of many glaciers around Mt. Rainier.");

var peak = L.marker([46.8717746, -121.7320405]).addTo(map);
peak.bindPopup("Steamboat Prow is 4765ft shorter than Mt. Rainier");


  });

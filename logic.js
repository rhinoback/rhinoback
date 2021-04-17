// Creating map object
var myMap = L.map("map", {
  center: [33.68, -117.82],
  zoom: 11
});

// Adding tile layer to the map
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

d3.csv("static/js/Seismic_Data.csv").then(function(eqdata){
  console.log(eqdata)
  console.log(eqdata.Latitude)

// })

// Store API query variables
// var baseURL = "https://data.cityofnewyork.us/resource/fhrw-4uyv.json?";
// var date = "$where=created_date between'2016-01-01T00:00:00' and '2017-01-01T00:00:00'";
// var complaint = "&complaint_type=Rodent";
// var limit = "&$limit=10000";

// Assemble API query URL
// var url = baseURL + date + complaint + limit;

// var baseUrl = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson?";
// var date = "$where=starttime=2021-03-01' and endtime='2021-03-08'";
// var eventType ="&eventtype=earthquake";
// var limit = "&limit=4000"

// Assemble API query URL
// var url = baseURL + date + complaint + limit;
// var url = baseURL + date + eventType + limit;
// var url = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2021-03-01&endtime=2021-03-08&eventtype=earthquake&limit=4000";

// d3.csv("Seismic_Data.csv").then(function(eqdata){
//   console.log(eqdata)
// })

// Grab the data with d3
// d3.json(url).then(function(response) {


  // Create a new marker cluster group
  var markers = L.markerClusterGroup();

  // Loop through data
  for (var i = 0; i < eqdata.length; i++) {

    // Set the data location property to a variable
    var location = eqdata[i].location;

    // Check for location property
    // if (location) {

      // Add a new marker to the cluster group and bind a pop-up
      markers.addLayer(L.marker([eqdata[i].Latitude, eqdata[i].Longitude])
        .bindPopup(eqdata[i].descriptor));
    // }

  }

  // Add our marker cluster layer to the map
  myMap.addLayer(markers);

});

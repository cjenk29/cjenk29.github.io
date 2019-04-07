let nola = L.map('webmap3').setView([29.978651, -90.057317], 12);
let basemap = 'https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png';
L.tileLayer(basemap).addTo(nola);
let nolaDemographicsUrl = 'https://opendata.arcgis.com/datasets/3273a5f8334d40838681ff0337eddb8c_0.geojson';
jQuery.getJSON(nolaDemographicsUrl, function (data) {
  let parkStyle = function (feature) {
    let council = feature.properties.COUNCIL;
    let parkColor = 'purple';
    if ( council == 'A'  ) { parkColor = 'teal' }
    return {
      stroke: true,
      opacity: 1,
      color: parkColor,
      weight: 2,
      fillOpacity: 0.5
    };
  };
    let popup = function (feature, layer) {
      let name = feature.properties.NAME;
      let neighborhood = feature.properties.NEGIHBORHOOD_NAME;
      let street = feature.properties.STREET;
      let acres = feature.properties.ACRES;
      let council = feature.properties.COUNCIL;
      layer.bindPopup('Name: ' + name + '<br>Street: ' + street + '<br>Neighborhood: ' + neighborhood + '<br>Acres: ' + acres + '<br>Council: ' + council);
  };
  let parksGeojsonOptions = {
    style: parkStyle,
    onEachFeature: popup
  };
  L.geoJSON(data, parksGeojsonOptions).addTo(nola);
})

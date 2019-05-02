let usmap = L.map('webmap3').setView([37.5, -95], 4.0);
let basemap = 'https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png';
L.tileLayer(basemap).addTo(usmap);
let usmapDemographicsUrl = 'https://geog4046.github.io/portfolio/data/us_state_demographics_ESRI_2010A.geojson';
jQuery.getJSON(usmapDemographicsUrl, function (data) {
  let stateStyle = function (feature) {
    let population = feature.properties.POPULATION;
    let stateColor = 'purple';
    if ( population >= '5000000'  ) { stateColor = 'teal' }
    return {
      stroke: false,
      color: stateColor,
      weight: 2,
      fillOpacity: 0.5
    };
  };
    let onEachFeature = function (feature, layer) {
      let name = feature.properties.STATE_NAME;
      let pop10 = feature.properties.POP2010;
      let population = feature.properties.POPULATION;
       layer.bindPopup('Total population of ' + name + ' ' + 'is' + ': ' + population + '<br>Population in 2010 was: ' + pop10 + ' ' )
  };
  let parksGeojsonOptions = {
    style: stateStyle,
    onEachFeature: onEachFeature
  };
  L.geoJSON(data, parksGeojsonOptions).addTo(usmap);
})

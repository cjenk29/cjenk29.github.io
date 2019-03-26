let myMap = L.map('Baton Rouge, LA').setView([30.36, -91.06], 4)
//L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png').addTo(myMap)
var OpenStreetMap_BlackAndWhite = L.tileLayer('https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);
let BRPoint = L.marker([30.36, -91.06]).addTo(myMap)
let myPolygon = L.polygon([
  [30, -90],
  [31, -91],
  [32, -90],
]).addTo(myMap);
let TigerStadium = L.polygon([
	[30.4120, -91.1838],
	[30.4445, -91.1890]
]).addTo(myMap);

myPolygon.bindPopup('A polygon')
BRPoint.bindPopup('A <strong>marker</strong>')
TigerStadium.bindPopup ('BR Line')

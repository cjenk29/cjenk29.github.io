let USA = L.map('webmap2').setView([38, -100], 4.4);
	L.tileLayer('https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png').addTo(USA);
	L.tileLayer.wms('https://nowcoast.noaa.gov/arcgis/services/nowcoast/analysis_ocean_sfc_sst_time/MapServer/WMSServer', {
  		layers: '1',
  		format: 'image/png',
  		transparent: true,
  		attribution: 'NOAA'
	}).addTo(USA)
	L.tileLayer.wms('https://nowcoast.noaa.gov/arcgis/services/nowcoast/guidance_model_coastalocean_estofs_time/MapServer/WMSServer', {
 		 layers: '1',
 		 format: 'image/png',
  		transparent: true,
  attribution: 'NOAA'
}).addTo(USA);

let us = L.map('webmap2').setView([38, -100], 4.4);
	L.tileLayer('https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png').addTo(us);
	L.tileLayer.wms('https://nowcoast.noaa.gov/arcgis/services/nowcoast/analysis_ocean_sfc_sst_time/MapServer/WMSServer', {
  		layers: '1',
  		format: 'image/png',
  		transparent: true,
  		attribution: 'NOAA'
	}).addTo(us)
	L.tileLayer.wms('https://mesonet.agron.iastate.edu/cgi-bin/wms/us/mrms_nn.cgi?', {
 		 layers: 'mrms_p72h',
 		 format: 'image/png',
  		transparent: true,
  attribution: 'NOAA, Iowa State University'
}).addTo(us);

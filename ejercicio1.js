require(["esri/map",  "esri/geometry/Extent","dojo/domReady!"], function(Map, Extent){
    var peninsula = new Extent(
        {
            xmin: -2439123.78463958,
            ymin: 4040985.2139362297,
            xmax: 1317909.0296324044,
            ymax: 5787418.436195472,
            spatialReference: {
               wkid: 102100
            }
});

    var myMap = new Map('divMap', {
        basemap: 'satellite',
        center: [-4.69, 40.65],
        zoom: 12,
    })

})
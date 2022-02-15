require(["esri/map",  "esri/geometry/Extent","dojo/domReady!"], function(Map, on, Extent){
    var sanFrancisco = new Extent(
        {
            xmin: -13657316.825748093,
            ymin: 4528226.47072426,
            xmax: -13598613.188025158,
            ymax: 4555514.489822032,
            spatialReference: {
               wkid: 102100
            }

        }
    );

    var myMap = new Map('divMap', {
        basemap: 'topo',
        extent: sanFrancisco
    })
})


// Buscar el codigo en github
on(myMap, 'click', function(){
    console.log('has hecho clikc')
});

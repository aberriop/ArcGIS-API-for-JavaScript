require(["esri/map", "esri/geometry/Extent", "esri/layers/ArcGISDynamicMapServiceLayer", "esri/layers/FeatureLayer", "esri/dijit/BasemapToggle", "esri/dijit/OverviewMap","esri/dijit/Legend", "dojo/_base/array", "dojo/parser",
"dijit/layout/BorderContainer", "dijit/layout/ContentPane",
"dijit/layout/AccordionContainer", "dojo/domReady!",
], function (Map, Extent, ArcGISDynamicMapServiceLayer, FeatureLayer, BasemapToggle, OverviewMap, Legend, Measurement) {
    var map = new Map("divMap", {
        basemap: "topo",
        extent: new Extent({
            xmin: -14374651.058794111,
            ymin: 3597572.9883619756,
            xmax: -12408079.19507362,
            ymax: 5441845.606826218,
            spatialReference: {
                wkid: 102100
            }
        })
    });

    var ciudades = new ArcGISDynamicMapServiceLayer("http://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer", {
        opacity: 0.5
    });
    map.addLayer(ciudades);


    // DefinitionExpression permite seleccionar en base un dato. Los queries son solo de consulta
    var terremotos = new FeatureLayer("http://services.arcgis.com/ue9rwulIoeLEI9bj/arcgis/rest/services/Earthquakes/FeatureServer/0"); terremotos.setDefinitionExpression("MAGNITUDE >= 2.0");
    map.addLayer(terremotos);

    var toggle = new BasemapToggle({
        map: map,
    }, 'BasemapToggle');
    toggle.startup();

    var overviewMapDijit = new OverviewMap({
        map: map,
        visible: 'bottom-right'
      });
    OverviewMap,startup();

    map.on("layers-add-result", function(){
        var legend = new Legend({
        map: map,
        arrangement: Legend.ALIGN_RIGHT
        layerInfos: [{
            layer: lyrQuakes,
            title: 'Titulo terremotos'
        }, {
            layer: lyrUSA,
            
        }]
      }, "legendDiv");
      legend.startup();

    });
      
});

require ([
    "dojo/dom",
    "dojo/on",
    "dojo/fx",
    "dojo/domReady!"
], function(dom, on, fx){
    var el =dom.byId("contenedor");
    el.innerHTML = "Haz click";
    on(el,"click", function(evt){

    }));
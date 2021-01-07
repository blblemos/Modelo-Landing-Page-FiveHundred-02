window.onload = $.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBw8XII2wq6HkO2lnLxOcQqywT6RNvLUGE", function(){
    var map;

    function initialize(){
        var mapProp = {
            center: new google.maps.LatLng(-11.327264,-41.864126,),
            scrollWheel:false,
            zoom:15,
            MapTypoId:google.maps.MapTypeId.ROADMAP,
        };

        map = new google.maps.Map(document.getElementById("mapa"),mapProp);

    }

    function addMarker(lat,long,icon,content){
        var latLng = {
            "lat": lat,
            "lng": long
        };

        var marker = new google.maps.Marker({
            "position": latLng,
            "map": map,
            "icon": icon
        });

        var infoWindow = new google.maps.InfoWindow({
            "content": content,
            "maxWidth": 200,
            "pixelOffset": new google.maps.Size(0,20),
        });
        google.maps.event.addListener(marker, "click", function(){
            infoWindow.open(map, marker);
        });
        
    }

    initialize();

    var conteudo = `<p style="color:black;font-size:13px;padding:10px 0;">Five Hundred</p> <p style="color:black;font-size:10px;padding:10px 0;" >Instituto Federal de Educação, Ciência e Tecnologia da Bahia - Campus Irecê Rodovia BA 148, km 04, n°. 1800 – Bairro Vila Esperança. Irecê / BA-CEP:44900-000.Tel.:  (74) 3688-6701 - 3688-6705</p>`;
    addMarker(-11.327264,-41.864126,"",conteudo);
});



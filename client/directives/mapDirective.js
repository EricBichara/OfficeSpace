/**
 * Created by ericbichara on Oct/13/13.
 */
app.directive('map', function () {
    return {
        restrict:'E',
        transclude:true,
        scope:{ title:'@title' },
        template:'<canvas class="myMap"></canvas>',
        replace:true,
        link: function(scope, element, attrs, controller){
            initializeMap();
        }

    };

    function initializeMap(){
        var mapOptions = {
            zoom: 8,
            center: new google.maps.LatLng(-34.397, 150.644),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
    }
});
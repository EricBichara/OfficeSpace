app.directive('panel', function () {
    return {
        restrict:'E',
        transclude:true,
        scope:{ title:'@title' },
        template:
            '<div class="panel">' +
                '<h4 class="panel-title">{{title}}</h4>' +
                '<div class="panel-content" ng-transclude></div>' +
            '</div>',
        replace:true
    };
});
app.service('officeService', ['$http', '$log', '$q', function ($http, $log, $q) {

    this.city = "stockholm";
    this.projects = [];
    this.news = [];

    this.getProjects = function(){
        var _this = this;
        $http.get('/getProjects')
            .success(function(result){
                _this.projects = result.data;
            })
            .error(function(result){
                _this.projects = null;
            });
    };

    this.getProjectById = function(id){
        var deferred = $q.defer();
        $http.post('/getProjectById', {id: id}).then(
            function(result){
                if(result.data.Success === true){
                    deferred.resolve(result.data.data);
                }else{
                    deferred.reject('Error getting project');
                }
            },
            function(error){
               deferred.reject('Error getting project');
            }
        );

        return deferred.promise;
    };

    this.deleteProjectById = function(id){
        var _this = this;
        $http.post('/deleteProjectById', {id: id}).
            success(function(result){
                $log.log('Success deleting project:' + id);
                _this.getProjects();
            }).
            error(function(result){
                $log.error('Error delete project');
            });
    };

    this.saveProject = function(project){
        return $http.post('/updateProject', project).
            success(function(data, status){

            }).
            error(function(data, status){
                console.log(data + " " + status);
            });
    };


    /** News **/
    this.getNews = function(){
        var _this = this;
        $http.get('/getNews')
            .success(function(result){
                _this.news = result.data;
            })
            .error(function(result){
                _this.news = null;
            });
    };

    this.saveNews = function(news){
        var _this = this;
        return $http.post('/updateNews', news)
            .success(function(){
                _this.getNews();
            })
            .error(function(){

            });
    };

    this.deleteNews = function(id){
        var _this = this;
        $http.post('/deleteNews', {id: id})
            .success(function(result){
                _this.getNews();
            })
            .error(function(result){

            });
    };

    /** Users **/
    this.getUsers = function(){
        var _this = this;
        return $http.get('/getUsers')
            .success(function(result){
                _this.users = result.data;
            })
            .error(function(result){
                _this.users = null;
            });
    };

    this.getUserById = function(id){
        var deferred = $q.defer();
        $http.post('/getUserById', {id: id}).then(
            function(result){
                if(result.data.Success === true){
                    deferred.resolve(result.data.data);
                }else{
                    deferred.reject("Error getting user");
                }
            },
            function(error){
                deferred.reject("Error getting user");
            }
        );

        return deferred.promise;
    }

    this.saveUser = function(user){
        var _this = this;
        return $http.post('/updateUser', user)
            .success(function(){
                _this.getUsers();
            })
            .error(function(){

            });
    };

    this.deleteUser = function(id){
        var _this = this;
        $http.post('/deleteUser', {id: id})
            .success(function(result){
                _this.getUsers();
            })
            .error(function(result){

            });
    };
}]);
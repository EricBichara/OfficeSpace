app.service('officeService', function ($http, $log) {

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
        this.id = id;
        for(var i = 0; i<this.projects.length; i++){
            var project = this.projects[i];
            if(project._id === this.id){
                return project;
            }
        }
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
});
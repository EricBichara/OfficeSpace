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
    }

    this.getProjectById = function(id){
        this.id = id;
        for(var i = 0; i<this.projects.length; i++){
            var project = this.projects[i];
            if(project._id === this.id){
                return project;
            }
        }
    }

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
    }

    this.saveProject = function(project){
        var post = $http.post('/updateProject', project).
            success(function(data, status){

            }).
            error(function(data, status){
                console.log(data + " " + status);
            });

        return post;
    }


    this.getNews = function(){

    }

});
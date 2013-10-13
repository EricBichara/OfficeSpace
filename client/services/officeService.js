app.service('officeService', function ($http) {

    this.city = "stockholm";
    this.projects = [];
    this.news = [];

    this.getProjects = function(){
        if(this.projects.length === 0){
            this.projects = createProjects();
        }
        return this.projects;
    }

    this.getNews = function(){
        if(this.news.length === 0){
            this.news = createNews();
        }

        return this.news;
    }

    this.fetchOffices = function () {
        return $http.get('/getOffices').then(function(result){
               return result.data;
        });
    }

    this.createOffice = function(office){
        console.log("here");
        /*$http.post('/getOffices', office).then(function(result){
           return result.data;
        });*/
    }

    this.setCity = function(city){
        this.city = city;
    }

    function createProjects(){
        var tempProjects = [];

        for(var i = 0; i<10; i++){
            var project = new Project();
            project.name = "Project" + i;
            project.apps = i * 100;
            project.startDate = '2014-05-0' + i;
            project.endDate = '2014-09-0' + i;
            project.minPrice = i*1 + " Mkr";
            project.maxPrice = i*2 + " Mkr";
            project.minRooms = 1;
            project.maxRooms = 5;
            project.rent = "3500 kr";
            project.companyPic = "content/images/logo.gif";
            project.projectPic = "content/images/app.jpg";

            tempProjects.push(project);
        }

        return tempProjects;
    }

    function createNews(){
        var tempNews = [];

        for(var i = 0; i<5; i++){
            var news = new News();
            news.date = "2014-10-05";
            news.title = "Yo";
            news.content = "Some shit happened";

            tempNews.push(news);
        }

        return tempNews;
    }
});
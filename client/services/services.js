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
            news.title = "Yo" + i;
            news.content = "Some shit happened";

            tempNews.push(news);
        }

        return tempNews;
    }
});
function Office(){
    this.isOffice = null;
    this.isWorkshop = null;
    this.isShop = null;
    this.isStorage = null;
    this.isHotel = null;
    this.isOther = null;
    this.pitch = null;
    this.streetAddress = null;
    this.postNumber = null;
    this.place = null;
    this.county = null;
    this.municipality = null;
    this.area = null;
    this.directions = null;
    this.buildDate = null;
    this.renovatedDate = null;
    this.floor = null;
    this.rooms = null;
    this.layout = null;
    this.rent = null;
    this.rentInfo = null;
    this.transferCharge = null;
    this.transferInfo = null;
    this.movingInDate = null;
    this.movingInInfo = null;
    this.otherInfo = null;
    this.contactList = [];
}

function Project(){
    this.name = null;
    this.apps = null;
    this.startDate = null;
    this.endDate = null;
    this.minRooms = null;
    this.maxRooms = null;
    this.minPrice = null;
    this.maxPrice = null;
    this.rent = null;
    this.projectPic = null;
    this.companyPic = null;
}

function News(){
    this.date = null;
    this.title = null;
    this.content = null;
}


function Contact(){
    this.name = "";
    this.title = "";
}
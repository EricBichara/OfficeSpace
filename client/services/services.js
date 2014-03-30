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
        $http.post('/updateProject', project).
            success(function(data, status){

            }).
            error(function(data, status){
                console.log(data + " " + status);
            });
    }


    this.getNews = function(){

    }

});
function Project(){
    this.id = null;

    this.name = null;
    this.builder = null;
    this.appartments = null;
    this.startDate = null;
    this.endDate = null;
    this.minRooms = null;
    this.maxRooms = null;
    this.minPrice = null;
    this.maxPrice = null;
    this.minSize = null;
    this.maxSize = null;
    this.minRent = null;
    this.maxRent = null;
    this.projectPic = null;
    this.companyPic = null;
    this.descriptionTitle = null;
    this.description = null;
    this.areaInfo = null;
    this.contactList = null;
}

function Apartment(){
    this.id = null;

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
    this.floor = null;
    this.rooms = null;
    this.layout = null;
    this.rent = null;
    this.rentInfo = null;
    this.movingInDate = null;
    this.movingInInfo = null;
    this.otherInfo = null;
    this.contactList = [];
}

function News(){
    this.id = null;

    this.date = null;
    this.title = null;
    this.content = null;
}


function Contact(){
    this.id = null;

    this.name = null;
    this.telephone = null;
    this.email = null;
}
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

    this.getProjectById = function(id){
        this.id = id;
        for(var i = 0; i<this.projects.length; i++){
            var project = this.projects[i];
            if(project.id === parseInt(this.id)){
                return project;
            }
        }
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
            project.id = i;
            project.name = "Project" + i;
            project.builder = "JM";
            project.appartments = i * 100;
            project.startDate = '2014-05-0' + i;
            project.endDate = '2014-09-0' + i;
            project.minPrice = i*1;
            project.maxPrice = i*2;
            project.minRooms = 1;
            project.maxRooms = 5;
            project.minSize = 35;
            project.maxSize = 83;
            project.minRent = "3500";
            project.maxRent = "4500";
            project.companyPic = "/content/images/company-jm.png";
            project.projectPic = "/content/images/img-project-01.png";
            project.descriptionTitle = "Strandparken";
            project.description = "Folkhem bygger 4 hus och ca 128 unika lägenheter i Sundbybergs strandpark strax intill vattenbrynet. Husen är ritade av Wingårdhs arkitektkontor, Sveriges mest välrenommerade och internationellt kända arkitektbyrå. Det kommer att bli Stockholmsområdets allra första 8-våningshus byggda helt i trä. De har alltså en stomme av trä, en vacker träfasad och inredningsdetaljer i trä. Detta ger en unik inomhusmiljö då man lever omgiven av naturliga material. Lägenheterna är rymliga, öppna och vackert planerade, med stora fönsterpartier och vackra dubbeldörrar i glas ut till det extra uterummet, balkongen. Alla balkonger har sjöutsikt och är runt 13 kvm med plats för härliga middagar i kvällssolen. Lägenheterna kommer att vara inredda med naturliga material och med vattenburen golvvärme under alla trägolv. Köken kommer att ha full tekniskt utrustning med induktionshäll som standard och badrummen kommer naturligtvis att vara helkaklade och har alla egna tvättmaskiner och torktumlare. Det finns förråd till alla lägenheter och garage källarplan med hiss direkt upp till ditt våningsplan. Trapphusen är generöst utformade med plats att stanna upp och genomsiktliga för att ljus ska flöda genom och ge dig en härlig känsla så fort du stiger innanför dörren. Husen ligger på Sundbybergs absolut bästa läge, solsidan av Bällstaviken. Det byggs bryggor och en vacker strandpromenad framför husen och ett nytt härligt torg som en förlängning ner mot vattnet av den upprustade Tuvanparken ovanför. Torget kommer att utföras som ett aktivitetstorg med plats för café, torghandel och tex. beachvolleyplan och isbana.";
            project.areaInfo = "Strandparken har ett fantastiskt trevligt läge intill Bällstaviken. Här bor man inte långt ifrån allt vad Sundbyberg har att erbjuda. Flertalet matbutiker ligger inom 5 minuters promenadavstånd. Sundbybergs Centrum, som ligger på 10 minuters promenadavstånd, erbjuder det mesta i form av restauranger, butiker och caféer. Kommunikationerna i området är också mycket goda med T-bana, bussar och tvärbana inom några minuters avstånd. Bromma Flygplats ligger cirka 15 minuters promenad bort och lika långt är det till köpcentrumet Bromma Blocks.";

            var contact = new Contact();
            contact.name = "Patrik Lindholm";
            contact.telephone = "0705555555";
            contact.email = "patrik.lindholm@nyprod.se";

            project.contactList = contact;

            tempProjects.push(project);
        }
        return tempProjects;
    }

    this.createNewProject = function(){
        var project = new Project();
        project.id = (this.projects[this.projects.length-1]).id + 1;
        this.projects.push(project);
        return project;
    }

    this.deleteProject = function(projectId){
        for(var i = 0; i<this.projects.length; i++){
            var project = this.projects[i];
            if(project.id === projectId){
                this.projects.splice(i, 1);
            }
        }
    }

    this.saveProject = function(project){
        for(var i = 0; i<this.projects.length; i++){
            var tempProject = this.projects[i];
            if(project.id === tempProject.id){
                this.projects[i] = project;
            }
        }
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

function News(){
    this.date = null;
    this.title = null;
    this.content = null;
}


function Contact(){
    this.name = "";
    this.telephone = "";
    this.email = "";
}
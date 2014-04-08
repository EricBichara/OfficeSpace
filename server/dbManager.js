var mongoose = require('mongoose'),
    schemas = require('./schemas');

var ProjectModel = mongoose.model('projects', schemas.projectSchema);
var ApartmentModel = mongoose.model('apartments', schemas.apartmentSchema);
var UserModel = mongoose.model('users', schemas.userSchema);
var NewsModel = mongoose.model('news', schemas.newsSchema);


/**** Projects ****/
module.exports.getProjects = function getProjects(req, res){
    ProjectModel.find(function(err, offices){
        if(!err){
            res.json({Success: true, data: offices});
        } else{
            console.log("Error: " + err);
            res.json({Success: false, data: null});

        }
    })
}

var mapProject = function(project1, project2){
    project1.name = project2.name;
    project1.builder = project2.builder;
    project1.apartments = project2.apartments;
    project1.startDate = project2.startDate;
    project1.endDate = project2.endDate;
    //project.minRooms = project2.minRooms;
    //project.maxRooms = project2.maxRooms;
    //project.minPrice = project2.minPrice;
    //project.maxPrice = project2.maxPrice;
    //project.minSize = project2.minSize;
    //project.maxSize = project2.maxSize;
    //project.minRent = project2.minRent;
    //project.maxRent = project2.maxRent;
    project1.projectPic = project2.projectPic;
    project1.companyPic = project2.companyPic;
    project1.descriptionTitle = project2.descriptionTitle;
    project1.description = project2.description;
    project1.areaInfo = project2.areaInfo;
    project1.contactList = project2.contactList;
};

var saveProject = function(project, res){
    project.save(function(err){
        if(!err){
            console.log("project saved succesfully");
            res.json({Success: true, data: null});
        } else{
            console.log("Error:" + err);
            res.json({Success: false, data: null});
        }
    });
};

module.exports.updateProject = function updateProject(req, res){
    var project = null;
    if(req.body._id){
        ProjectModel.findById(req.body._id, function(err, result){
            console.log("Looking for project: " + err);
            if(!err){
                project = result;
                mapProject(project, req.body);
                saveProject(project, res);
            }else{
                console.log('Error fetching project');
            }
        });
    }else{
        project = new ProjectModel();
        mapProject(project, req.body);
        saveProject(project, res);
    }
}

module.exports.deleteProjectById = function deleteProjectById(req, res) {
    ProjectModel.findById(req.body.id, function (err, project) {
        if (!err) {
            if(project)project.remove();
            res.json({Success: true, data: null});
        } else {
            console.log("Error: " + err);
            res.json({Success: false, data: null});
        }
    });
}

module.exports.fetchProjectById = function fetchProjectById(req, res){
    ProjectModel.findById(req.params.id, function(err, office){
        if(!err){
            res.json({Success: true, data: office});
        } else{
            console.log("Error: " + err);
            res.json({Success: false, data: null});
        }
    })
}


/**** Apartments ****/



/**** USERS ****/
module.exports.createUser = function createUser(){

}

module.exports.updateUser = function updateUser(){

}

module.exports.deleteUser = function deleteUser(userId){

}

module.exports.getUser = function getUser(userId){

}


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
            res.json({Success: false, data: null});
            console.log("Error: " + err);
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
}

module.exports.updateProject = function updateProject(req, res){
    var project = null;
    if(req.body._id){
        ProjectModel.findById(req.body._id, function(err, result){
            if(!err){
                project = result;
                mapProject(project, req.body);
                project.save(function(err){
                    if(!err){
                        res.json({Success: true, data: null});
                    } else{
                        res.json({Success: false, data: null});
                        console.log("Error:" + err);
                    }
                });

            }else{
                console.log('Error fetching project');
            }
        });
    }else{
        project = new ProjectModel();
        mapProject(project, req.body)
    }
}

module.exports.deleteProjectById = function deleteProjectById(req, res) {
    ProjectModel.findById(req.body.id, function (err, project) {
        if (!err) {
            if(project)project.remove();
            res.json({Success: true, data: null});
        } else {
            res.json({Success: false, data: null});
            console.log("Error: " + err);
        }
    });
}

module.exports.fetchProjectById = function fetchProjectById(req, res){
    ProjectModel.findById(req.params.id, function(err, office){
        if(!err){
            res.json({Success: true, data: office});
        } else{
            res.json({Success: false, data: null});
            console.log("Error: " + err);
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


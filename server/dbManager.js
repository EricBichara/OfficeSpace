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

module.exports.updateProject = function updateProject(req, res){
    var project = null;
    if(req.body.id){
        ProjectModel.findById(ObjectId.fromString(req.body.id), function(err, result){
            if(!err){
                project = result;
            }else{
                console.log('Error fetching project');
            }
        });
    }else{
        project = new ProjectModel();
    }

    project.name = req.body.name;
    project.builder = req.body.builder;
    project.apartments = req.body.apartments;
    project.startDate = req.body.startDate;
    project.endDate = req.body.endDate;
    //project.minRooms = req.body.minRooms;
    //project.maxRooms = req.body.maxRooms;
    //project.minPrice = req.body.minPrice;
    //project.maxPrice = req.body.maxPrice;
    //project.minSize = req.body.minSize;
    //project.maxSize = req.body.maxSize;
    //project.minRent = req.body.minRent;
    //project.maxRent = req.body.maxRent;
    project.projectPic = req.body.projectPic;
    project.companyPic = req.body.companyPic;
    project.descriptionTitle = req.body.descriptionTitle;
    project.description = req.body.description;
    project.areaInfo = req.body.areaInfo;
    project.contactList = req.body.contactList;

    project.save(function(err){
        if(!err){
            res.json({Success: true, data: null});
        } else{
            res.json({Success: false, data: null});
            console.log("Error:" + err);
        }
    });
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


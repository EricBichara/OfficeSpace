var mongoose = require('mongoose'),
    schemas = require('./schemas'),
    async = require('async');

var ProjectModel = mongoose.model('projects', schemas.projectSchema);
var ApartmentModel = mongoose.model('apartments', schemas.apartmentSchema);

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
};

var mapProject = function(project1, project2){
    project1.name = project2.name;
    project1.builder = project2.builder;
    project1.apartments = project2.apartments;
    project1.startDate = project2.startDate;
    project1.endDate = project2.endDate;
    project1.minRooms = project2.minRooms;
    project1.maxRooms = project2.maxRooms;
    project1.minPrice = project2.minPrice;
    project1.maxPrice = project2.maxPrice;
    project1.minSize = project2.minSize;
    project1.maxSize = project2.maxSize;
    project1.minRent = project2.minRent;
    project1.maxRent = project2.maxRent;
    project1.projectPic = project2.projectPic;
    project1.companyPic = project2.companyPic;
    project1.descriptionTitle = project2.descriptionTitle;
    project1.description = project2.description;
    project1.areaInfo = project2.areaInfo;
    project1.contact = project2.contact;
};

var mapApartment = function(ap1, ap2){
    ap1.projectId = ap2.projectId;

    ap1.price = ap2.price;
    ap1.isOffice = ap2.isOffice;
    ap1.isWorkshop = ap2.isWorkshop;
    ap1.isShop = ap2.isShop;
    ap1.isStorage = ap2.isStorage;
    ap1.isHotel = ap2.isHotel;
    ap1.isOther = ap2.isOther;
    ap1.description = ap2.description;
    ap1.size = ap2.size;
    ap1.floor = ap2.floor;
    ap1.rooms = ap2.rooms;
    ap1.layout = ap2.layout;
    ap1.rent = ap2.rent;
    ap1.rentInfo = ap2.rentInfo;
    ap1.movingInDate = ap2.movingInDate;
    ap1.movingInInfo = ap2.movingInInfo;
    ap1.otherInfo = ap2.otherInfo;
}

var saveProject = function(project, res){
    project.save(function(err){
        if(!err){
            console.log("project saved successfully");

            res.json({Success: true, data: null});
        } else{
            console.log("Error:" + err);
            res.json({Success: false, data: null});
        }
    });
};

module.exports.updateProject = function updateProject(req, res){
    var project = null;
    if(req.body.project._id){
        ProjectModel.findById(req.body.project._id, function(err, result){
            if(!err){
                project = result;
                mapProject(project, req.body.project);
                //saveApartments
                saveApartments(req.body.apartments, project);
                saveProject(project, res);
            }else{
                res.json({Success: false, data: null});
            }
        });
    }else{
        project = new ProjectModel();
        mapProject(project, req.body.project);
        //save apartments
        saveApartments(req.body.apartments, project);
        saveProject(project, res);
    }
};

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
};

module.exports.getProjectById = function fetchProjectById(req, res){
    var currentProject = {};
    var currentApartments = [];
    ProjectModel.findById(req.body.id, function(err, project){
        if(!err){
            currentProject = project;
        } else{
            console.log("Error: " + err);
            res.json({Success: false, data: null});
        }
    });

    ApartmentModel.find({projectId: req.body.id}, function(err, apartments){
        if(!err){
            currentApartments = apartments;
            res.json({Success: true, data:{project:currentProject, apartments: currentApartments}});
        }else{
            console.log("Error: " + err);
            res.json({Success: false, data: null});
        }
    });
};


/**** Apartments ****/

var saveApartments = function(apartments, project){
    async.each(apartments,
        function(apartment, callback){
            apartment.projectId = project._id;
            if(apartment._id){
                var fetchedApartment = null;
                ApartmentModel.findById(apartment._id, function(err, ap){
                    if(!err){
                        fetchedApartment = ap;
                        mapApartment(fetchedApartment, apartment);
                        saveApartment(fetchedApartment);
                        callback();
                    }
                });

            }else{
                var newApartment = new ApartmentModel();
                mapApartment(newApartment, apartment);
                saveApartment(newApartment);
                callback();
            }

        },
        // 3rd parameter is the function call when everything is done
        function(err){
            if(!err){

            }
        }
    );

};

var saveApartment = function(apartment){
    apartment.save(function(err){
        if(!err){
            console.log("apartment saved successfully");
        } else{
            console.log("Error:" + err);
        }
    });
};






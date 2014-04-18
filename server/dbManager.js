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
    if(req.body._id){
        ProjectModel.findById(req.body._id, function(err, result){
            if(!err){
                project = result;
                mapProject(project, req.body);
                saveProject(project, res);
            }else{
                res.json({Success: false, data: null});
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


/**** News ****/
module.exports.getNews = function(req, res){
    NewsModel.find(function(err, news){
        if(!err){
            res.json({Success: true, data: news});
        }else{
            res.json({Success: false, data: null});
        }
    });
};

var mapNews = function(news1, news2){
    news1.date = news2.date;
    news1.title = news2.title;
    news1.content = news2.content;
};

var saveNews = function(news, res){
    news.save(function(err){
        if(!err){
            console.log("news saved successfully");
            res.json({Success: true, data: null});
        } else{
            console.log("Error:" + err);
            res.json({Success: false, data: null});
        }
    });
};

module.exports.updateNews = function(req, res){
    var news = null;
    if(req.body._id){
        NewsModel.findById(req.body._id, function(err, result){
            if(!err){
                news = result;
                mapNews(news, req.body);
                saveNews(news, res);
            }else{
                res.json({Success: false, data: null});
            }
        });
    }else{
        news = new NewsModel();
        mapNews(news, req.body);
        saveNews(news, res);
    }
};

module.exports.deleteNews = function(req, res){
    NewsModel.findById(req.body.id, function (err, news) {
        if (!err) {
            if(news)news.remove();
            res.json({Success: true, data: null});
        } else {
            console.log("Error: " + err);
            res.json({Success: false, data: null});
        }
    });
};


/**** USERS ****/
module.exports.getUsers = function(req, res){
    UserModel.find(function(err, user){
        if(!err){
            res.json({Success: true, data: user});
        }else{
            res.json({Success: false, data: null});
        }
    });
};

var mapUser = function(user1, user2){
    user1.name = user2.name;
    user1.telephone = user2.telephone;
    user1.email = user2.email;
};

var saveUser = function(user, res){
    user.save(function(err){
        if(!err){
            console.log("user saved successfully");
            res.json({Success: true, data: null});
        } else{
            console.log("Error:" + err);
            res.json({Success: false, data: null});
        }
    });
};

module.exports.updateUser = function(req, res){
    var user = null;
    if(req.body._id){
        UserModel.findById(req.body._id, function(err, result){
            if(!err){
                user = result;
                mapUser(user, req.body);
                saveUser(user, res);
            }else{
                res.json({Success: false, data: null});
            }
        });
    }else{
        user = new UserModel();
        mapUser(user, req.body);
        saveUser(user, res);
    }
};

module.exports.deleteUser = function(req, res){
    UserModel.findById(req.body.id, function (err, user) {
        if (!err) {
            if(user)user.remove();
            res.json({Success: true, data: null});
        } else {
            console.log("Error: " + err);
            res.json({Success: false, data: null});
        }
    });
};


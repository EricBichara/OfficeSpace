/**
 * Created by ericbichara on Apr/26/14.
 */
/**** USERS ****/
var mongoose = require('mongoose'),
    schemas = require('./schemas');
var UserModel = mongoose.model('users', schemas.userSchema);

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

module.exports.getUserById = function(req, res){
    UserModel.findById(req.body.id, function(err, user){
        if(!err){
            res.json({Success: true, data: user});
        }else{
            res.json({Success: false, data: null});
        }
    })
}
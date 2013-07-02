var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OfficeSchema= new Schema({
    isOffice: { type: Boolean, required: true },
    isWorkshop: { type: Boolean, require: false},
    isShop: { type: Boolean},
    isStorage: {type: Boolean},
    isHotel: {type: Boolean},
    isOther: {type: Boolean},
    pitch: {type: String},
    streetAddress: {type: String},
    postNumber: {type: Number},
    place: {type: String},
    county: {type: String},
    municipality: {type: String},
    area: {type: String},
    directions: {type: String},
    buildDate: {type: Date},
    renovatedDate: {type: Date},
    floor: {type: String},
    rooms: {type: Number},
    layout: {type: String},
    rent: {type: Number},
    rentInfo: {type: String},
    transferCharge: {type: Number},
    transferInfo: {type: String},
    movingInDate: {type: Date},
    movingInInfo: {type: String},
    otherInfo: {type: String},
    contactPerson: {type: String},
    contactPhone: {type: String}
});

var OfficeModel = mongoose.model('Office', OfficeSchema);

/**** Offices ****/
module.exports.fetchOffices = function fetchOffices(req, res){
    OfficeModel.find(function(err, offices){
        if(!err){
            res.json({Success: true, data: offices});
        } else{
            res.json({Success: false, data: null});
            console.log("Error: " + err);
        }
    })
}

module.exports.createOffice = function createOffice(req, res){
    var office = new OfficeModel({
        isOffice: req.body.isOffice,
        isWorkshop: req.body.isWorkshop,
        isShop: req.body.isShop,
        isStorage: req.body.isStorage,
        isHotel: req.body.isHotel,
        isOther: req.body.isOther,
        pitch: req.body.pitch,
        streetAddress: req.body.streeAddress,
        postNumber: req.body.postNumber,
        place: req.body.place,
        county: req.body.county,
        municipality: req.body.municipality,
        area: req.body.area,
        directions: req.body.directions,
        buildDate: req.body.buildDate,
        renovatedDate: req.body.renovatedDate,
        floor: req.body.floor,
        rooms: req.body.rooms,
        layout: req.body.layout,
        rent: req.body.rent,
        rentInfo: req.body.rentInfo,
        transferCharge: req.body.transferCharge,
        transferInfo: req.body.transferInfo,
        movingInDate: req.body.movingInDate,
        movingInInfo: req.body.movingInInfo,
        otherInfo: req.body.otherInfo,
        contactPerson: req.body.contactPerson,
        contactPhone: req.body.contactPhone
    });

    office.save(function(err){
        if(!err){
            res.json({Success: true, data: null});
        } else{
            res.json({Success: false, data: null});
            console.log("Error:" + err);
        }
    });
}

module.exports.fetchOffice = function fetchOffice(req, res){
    return OfficeModel.findById(req.params.id, function(err, office){
        if(!err){
            res.json({Success: true, data: office});
        } else{
            res.json({Success: false, data: null});
            console.log("Error: " + err);
        }
    })
}

module.exports.updateOffice = function updateOffice(req, res){

}


/**** USERS ****/
module.exports.createUser = function createUser(){

}

module.exports.updateUser = function updateUser(){

}

module.exports.deleteUser = function deleteUser(userId){

}

module.exports.getUser = function getUser(userId){

}


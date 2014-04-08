/**
 * Created by ericbichara on Mar/29/14.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema= new Schema({
    name: String,
    builder: String,
    apartments: [],
    startDate: Date,
    endDate: Date,
    minRooms: Number,
    maxRooms: Number,
    minPrice: Number,
    maxPrice: Number,
    minSize: Number,
    maxSize: Number,
    minRent: Number,
    maxRent: Number,
    projectPic: String,
    companyPic: String,
    descriptionTitle: String,
    description: String,
    areaInfo: String,
    contactList: []
});

var ApartmentSchema = new Schema({
    isOffice: Boolean,
    isWorkshop: Boolean,
    isShop: Boolean,
    isStorage: Boolean,
    isHotel: Boolean,
    isOther: Boolean,
    pitch: String,
    streetAddress: String,
    postNumber: Number,
    place: String,
    county: String,
    municipality: String,
    area: String,
    directions: String,
    floor: Number,
    rooms: Number,
    layout: String,
    rent: Number,
    rentInfo: String,
    movingInDate: Date,
    movingInInfo: String,
    otherInfo: String,
    contactList: []
});

var UserSchema = new Schema({
    name: String,
    telephone: String,
    email: String
});

var NewsSchema = new Schema({
    date: Date,
    title: String,
    content: String
});



module.exports.projectSchema = ProjectSchema;
module.exports.apartmentSchema = ApartmentSchema;
module.exports.userSchema = UserSchema;
module.exports.newsSchema = NewsSchema;

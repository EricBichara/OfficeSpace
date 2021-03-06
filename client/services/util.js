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

    this.price = null,
    this.isOffice = false,
    this.isWorkshop = false,
    this.isShop = false,
    this.isStorage = false,
    this.isHotel = false,
    this.isOther = false,
    this.description = null,
    this.size = null,
    this.floor = null,
    this.rooms = null,
    this.layout = null,
    this.rent = null,
    this.rentInfo = null,
    this.movingInDate = null,
    this.movingInInfo = null,
    this.otherInfo = null
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
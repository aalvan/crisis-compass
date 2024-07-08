const Locations = require("../../db/models/location.model")
const Users = require("../../db/models/user.model");

exports.getLocations = async() => {
    try{
        let data = await Locations.findAll({
            attributes:[
                'id',
                'name',
                'address',
                'region',
                'city',
                'locationType',
                'createdAt',
                'updatedAt'
            ]
        })
        return data
    }catch (error){
        console.log(error)
        return error
    }
}

exports.getLocation = async (locationId) => {
    try{
        let data = await Locations.findByPk(locationId);
        return data
    }catch (error){
        console.log(error)
        return error
    }
}

exports.removeLocation = async (locationId) => {
    try {
        const location = await Locations.findByPk(locationId);

        if (location) {
            await location.destroy();
        }
    } catch (error) {
        console.error('Error deleting location:', error);
    }
}

exports.addLocation = async (dataLocation) => {
    try {
        const newLocation = await Users.create({
            name: dataLocation.name,
            address: dataLocation.address,
            region: dataLocation.region,
            city: dataLocation.city,
            locationType: dataLocation.locationType,
        });
        console.log('New location created:', newLocation.toJSON());
    }catch (error) {
        console.error('Error creating location:', error);
    }
}
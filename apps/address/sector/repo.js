import Sector from './model'

exports.create = async (name, district) =>{
try {
    const newSector = new Sector({
        name,
        district
    })
    await newSector.save()
    return newSector;
} catch (error) {
    throw error; 
}
};

exports.update = async (sectorId, name) => {
    try {
        return await Sector.findByIdAndUpdate(
            {_id: sectorId},
            {name: name},{new: true},
            (err, success) => {
                if(err){
                    console.log(err);
                    return false;
                }
                return success;
            }
        );
    } catch (error) {
        throw error;
    }
}

exports.getAll = async () => {
    try {
        return await Sector.find()
                .then(res => {
                    return res;
                })
                .catch(err => {
                    console.log(err);
                    return false;
                })
    } catch (error) {
        throw error;
    }
}

exports.getAllDistrictSectors = async (districtId) => {
    try {
        return await Sector.find({district: districtId})
                .then(res => {
                    return res;
                })
                .catch(err => {
                    console.log(err);
                    return false;
                })
    } catch (error) {
        throw error;
    }
}

exports.getOneSector = async (sectorId) => {
    try {
        return await Sector.findById(sectorId)
                .then(res => {
                    return res;
                })
                .catch(err => {
                    console.log(err);
                    return false;
                })
    } catch (error) {
        throw error;
    }
}

exports.delete = async (sectorId) => {
    try {
        return await Sector.findByIdAndDelete(sectorId);
    } catch (error) {
        throw error;
    }
}
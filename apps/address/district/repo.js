import District from './model'

exports.create = async (name, province) =>{
try {
    const newDistrict = new District({
        name,
        province
    })
    await newDistrict.save()
    return newDistrict;
} catch (error) {
    throw error; 
}
};

exports.update = async (districtId, name) => {
    try {
        return await District.findByIdAndUpdate(
            {_id: districtId},
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
        return await District.find()
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

exports.getAllProvinceDistricts = async (provinceId) => {
    try {
        return await District.find({province: provinceId})
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

exports.getOneDistrict = async (districtId) => {
    try {
        return await District.findById(districtId)
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

exports.delete = async (districtId) => {
    try {
        return await District.findByIdAndDelete(districtId);
    } catch (error) {
        throw error;
    }
}
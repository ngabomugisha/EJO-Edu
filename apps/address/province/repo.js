import Province from './model'

exports.create = async (name) =>{
try {
    const newProvince = new Province({
        name
    })
    await newProvince.save()
    return newProvince;
} catch (error) {
    throw error; 
}
};

exports.update = async (provinceId, name) => {
    try {
        return await Province.findByIdAndUpdate(
            {_id: provinceId},
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

exports.getAllProvinces = async () => {
    try {
        return await Province.find()
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

exports.getOneProvince = async (provinceId) => {
    try {
        return await Province.findById(provinceId)
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

exports.delete = async (provinceId) => {
    try {
        return await Province.findByIdAndDelete(provinceId);
    } catch (error) {
        throw error;
    }
}
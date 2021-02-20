import Village from './model'

exports.create = async (name, cell) =>{
try {
    const newVillage = new Village({
        name,
        cell
    })
    await newVillage.save()
    return newVillage;
} catch (error) {
    throw error; 
}
};

exports.update = async (villageId, name) => {
    try {
        return await Village.findByIdAndUpdate(
            {_id: villageId},
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
        return await Village.find()
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

exports.getAllCellVillages = async (cellId) => {
    try {
        return await Village.find({cell: cellId})
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

exports.getOneVillage = async (villageId) => {
    try {
        return await Village.findById(villageId)
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

exports.delete = async (villageId) => {
    try {
        return await Village.findByIdAndDelete(villageId);
    } catch (error) {
        throw error;
    }
}
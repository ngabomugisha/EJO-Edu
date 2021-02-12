import Level from './model'

exports.create = async (name) =>{
try {
    const newLevel = new Level({
        name
    })
    await newLevel.save()
    return newLevel;
} catch (error) {
    throw error; 
}
};

exports.update = async (levelId, name) => {
    try {
        return await Level.findByIdAndUpdate(
            {_id: levelId},
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

exports.getAllLevels = async () => {
    try {
        return await Level.find()
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

exports.getOneLevel = async (levelId) => {
    try {
        return await Level.findById(levelId)
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

exports.delete = async (levelId) => {
    try {
        return await Level.findByIdAndDelete(levelId);
    } catch (error) {
        throw error;
    }
}
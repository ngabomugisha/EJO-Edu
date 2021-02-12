import School from './model'

exports.create = async (name) =>{
try {
    const newSchool = new School({
        name
    })
    await newSchool.save()
    return newSchool;
} catch (error) {
    throw error; 
}
};

exports.update = async (schoolId, name) => {
    try {
        return await School.findByIdAndUpdate(
            {_id: schoolId},
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

exports.getAllSchools = async () => {
    try {
        return await School.find()
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

exports.getOneSchool = async (schoolId) => {
    try {
        return await School.findById(schoolId)
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

exports.delete = async (schoolId) => {
    try {
        return await School.findByIdAndDelete(schoolId);
    } catch (error) {
        throw error;
    }
}
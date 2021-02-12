import Class from './model'

exports.create = async (school, level, combination, label) =>{
try {
    const newClass = new Class({
        school,
        level,
        combination,
        label
    })
    await newClass.save()
    return newClass;
} catch (error) {
    throw error; 
}
};

exports.update = async (classId, label) => {
    try {
        return await Class.findByIdAndUpdate(
            {_id: classId},
            {label: label},{new: true},
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

exports.getAllShoolclasses = async (schoolId) => {
    try {
        return await Class.find({school: schoolId})
                .populate({
                        path: "level combination"
                    })
                .exec()
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

exports.getOneClass = async (classId) => {
    try {
        return await Class.findById(classId)
                .populate({
                        path: "scool level combination"
                    })
                .exec()
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

exports.delete = async (classId) => {
    try {
        return await Class.findByIdAndDelete(classId);
    } catch (error) {
        throw error;
    }
}
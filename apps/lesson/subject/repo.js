import Subject from './model'

exports.create = async (name) =>{
try {
    const newSubject = new Subject({
        name
    })
    await newSubject.save()
    return newSubject;
} catch (error) {
    throw error; 
}
};

exports.update = async (subjectId, name) => {
    try {
        return await Subject.findByIdAndUpdate(
            {_id: subjectId},
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

exports.getAllSubjects = async () => {
    try {
        return await Subject.find()
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

exports.getOneSubject = async (subjectId) => {
    try {
        return await Subject.findById(subjectId)
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

exports.delete = async (subjectId) => {
    try {
        return await Subject.findByIdAndDelete(subjectId);
    } catch (error) {
        throw error;
    }
}
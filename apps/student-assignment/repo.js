import StudentAssigment from './model'

exports.create = async (title, assignedClass, subject, teacher) =>{
try {
    const newStudentAssigment = new StudentAssigment({
        title,
        assignedClass,
        subject,
        teacher
    })
    await newStudentAssigment.save()
    return newStudentAssigment;
} catch (error) {
    throw error; 
}
};

exports.update = async (studentAssigmentId, title) => {
    try {
        return await StudentAssigment.findByIdAndUpdate(
            {_id: studentAssigmentId},
            {title},{new: true},
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

exports.getAllClassSubjectStudentAssigmentes = async (classId, subjectId) => {
    try {
        return await StudentAssigment.find({class: classId, subject: subjectId})
                .populate({
                        path: "teacher"
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

exports.getOneStudentAssigment = async (studentAssigmentId) => {
    try {
        return await StudentAssigment.findById(studentAssigmentId)
                .populate({
                        path: "teacher"
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

exports.delete = async (studentAssigmentId) => {
    try {
        return await StudentAssigment.findByIdAndDelete(studentAssigmentId);
    } catch (error) {
        throw error;
    }
}
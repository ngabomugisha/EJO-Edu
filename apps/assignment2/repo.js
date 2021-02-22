import Assignment from './model'

exports.create = async (title, assignedClass, subject, teacher) =>{
try {
    const newAssignment = new Assignment({
        title,
        assignedClass,
        subject,
        teacher
    })
    await newAssignment.save()
    return newAssignment;
} catch (error) {
    throw error; 
}
};

exports.update = async (assignmentId, title) => {
    try {
        return await Assignment.findByIdAndUpdate(
            {_id: assignmentId},
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

exports.getAllClassSubjectAssignmentes = async (classId, subjectId) => {
    try {
        return await Assignment.find({class: classId, subject: subjectId})
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

exports.getOneAssignment = async (assignmentId) => {
    try {
        return await Assignment.findById(assignmentId)
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

exports.delete = async (assignmentId) => {
    try {
        return await Assignment.findByIdAndDelete(assignmentId);
    } catch (error) {
        throw error;
    }
}
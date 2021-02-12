import TeacherLeave from './model'

exports.create = async (teacher, reason, starts, ends) =>{
try {
    const newTeacherLeave = new TeacherLeave({
        teacher,
        reason,
        starts,
        ends
    })
    await newTeacherLeave.save()
    return newTeacherLeave;
} catch (error) {
    throw error; 
}
};

exports.update = async (teacherLeaveId, approved, approvedBy) => {
    try {
        return await TeacherLeave.findByIdAndUpdate(
            {_id: teacherLeaveId},
            {approved: approved, approvedBy},{new: true},
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

exports.getAllTeacherLeaves = async () => {
    try {
        return await TeacherLeave.find()
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

exports.getOneTeacherLeave = async (teacherLeaveId) => {
    try {
        return await TeacherLeave.findById(teacherLeaveId)
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

exports.delete = async (teacherLeaveId) => {
    try {
        return await TeacherLeave.findByIdAndDelete(teacherLeaveId);
    } catch (error) {
        throw error;
    }
}
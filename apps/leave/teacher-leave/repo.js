import TeacherLeave from './model'

exports.create = async (teacher, applyTo, reason, otherReason,  starts, ends, school) =>{
try {
    const newTeacherLeave = new TeacherLeave({
        teacher,
        applyTo,
        reason,
        otherReason,
        starts,
        ends,
        school
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
        )
        .populate({
            path: "teacher",
            select: "firstName lastName role"
        })
        .exec();
    } catch (error) {
        throw error;
    }
}

exports.getSchoolTeacherLeaves = async (schoolId) => {
    try {
        return await TeacherLeave.find({school: schoolId})
                .populate({
                    path: "teacher",
                    select: "firstName lastName role"
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

exports.getOneTeacherLeave = async (teacherLeaveId) => {
    try {
        return await TeacherLeave.findById(teacherLeaveId)
                .populate({
                    path: "teacher",
                    select: "firstName lastName role"
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

exports.delete = async (teacherLeaveId) => {
    try {
        return await TeacherLeave.findByIdAndDelete(teacherLeaveId);
    } catch (error) {
        throw error;
    }
}
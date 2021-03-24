import StudentLeave from './model'

exports.create = async (student, reason, checkout, leavingWithWho, provisionalCheckin, checkedoutBy, school) =>{
try {
    const newStudentLeave = new StudentLeave({
        student, reason, checkout, leavingWithWho, provisionalCheckin, checkedoutBy, school
    })
    await newStudentLeave.save()
    return newStudentLeave;
} catch (error) {
    throw error; 
}
};

exports.update = async (studentLeaveId, checkin, checkedinBy) => {
    try {
        return await StudentLeave.findByIdAndUpdate(
            {_id: studentLeaveId},
            {checkin: checkin, checkedinBy},{new: true},
            (err, success) => {
                if(err){
                    console.log(err);
                    return false;
                }
                return success;
            }
        )
        .populate({
            path: "checkedinBy checkedoutBy student",
            select: "firstName lastName role gender"
        })
        .exec();
    } catch (error) {
        throw error;
    }
}

exports.getSchoolStudentLeaves = async (schoolId) => {
    try {
        return await StudentLeave.find({school: schoolId})
                .populate({
                    path: "checkedinBy checkedoutBy student",
                    select: "firstName lastName role gender"
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

exports.getOneStudentLeave = async (studentLeaveId) => {
    try {
        return await StudentLeave.findById(studentLeaveId)
                .populate({
                    path: "checkedinBy checkedoutBy student",
                    select: "firstName lastName role gender"
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

exports.delete = async (studentLeaveId) => {
    try {
        return await StudentLeave.findByIdAndDelete(studentLeaveId);
    } catch (error) {
        throw error;
    }
}
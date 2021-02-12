import StudentLeave from './model'

exports.create = async (student, reason, checkout, checkedoutBy) =>{
try {
    const newStudentLeave = new StudentLeave({
        student,
        reason,
        checkout,
        checkedoutBy
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
        );
    } catch (error) {
        throw error;
    }
}

exports.getAllStudentLeaves = async () => {
    try {
        return await StudentLeave.find()
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
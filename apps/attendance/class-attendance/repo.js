import ClassAttendance from './model'

exports.create = async (slotOnTimetable, students) =>{
try {
    const newClassAttendance = new ClassAttendance({
        slotOnTimetable,
        students
    })
    await newClassAttendance.save()
    return newClassAttendance;
} catch (error) {
    throw error; 
}
};

exports.getClassAttendanceBySlotOnTimetable = async (slotOnTimetableId) => {
    try {
        return await ClassAttendance.findOne({slotOnTimetable: slotOnTimetableId})
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

exports.getOneClassAttendance = async (classAttendanceId) => {
    try {
        return await ClassAttendance.findById(classAttendanceId)
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

exports.delete = async (classAttendanceId) => {
    try {
        return await ClassAttendance.findByIdAndDelete(classAttendanceId);
    } catch (error) {
        throw error;
    }
}
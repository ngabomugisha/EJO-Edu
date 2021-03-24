import ClassAttendance from './model'

exports.create = async (slotOnTimetable, students, subject, assignedClass, teacher, school) =>{
try {
    console.log(slotOnTimetable, students, subject, assignedClass, teacher, school)
    const newClassAttendance = new ClassAttendance({
        slotOnTimetable, students, class: assignedClass, subject, teacher, school
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

exports.getAllClassAttendances = async (classId) => {
    try {
        return await ClassAttendance.find({class: classId})
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

exports.getAllSubjectClassAttendances = async (classId, subjectId) => {
    try {
        console.log(classId, subjectId)
        return await ClassAttendance.find({class: classId, subject: subjectId})
                .populate({
                    path: "students.student",
                    select: "firstName lastName gender"
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

exports.getOneStudentAttendanceBySubject = async (studentId, subjectId) => {
    try {
        return await ClassAttendance.find(
                {
                    subject: subjectId,
                    students: {
                        $elemMatch: {
                            student: studentId
                        }
                    }
                }, { "students.$": 1, 'createdAt': 1, 'slotOnTimetable': 1 }
                )
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

exports.getOneStudentAttendance = async (studentId) => {
    try {
        console.log(studentId)
        return await ClassAttendance.find({
                    students: {
                        $elemMatch: {
                            student: studentId
                        }
                    }
                }, { "students.$": 1, 'createdAt': 1, 'slotOnTimetable': 1 })
                .populate({
                    path: 'slotOnTimetable'
                })
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
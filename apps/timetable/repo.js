import Timetable from './model'

exports.create = async (
    school,
    assignedClass,
    teacher,
    subject,
    term,
    time
) => {
    try {
        const newTimetable = new Timetable({
            school,
            class: assignedClass,
            teacher,
            subject,
            term,
            time
        })
        await newTimetable.save()
        return newTimetable;
    } catch (error) {
        throw error;
    }
};

exports.update = async (
    timetableId,
    teacher,
    subject,
    term,
    time
) => {
    try {
        return await Timetable.findByIdAndUpdate({
                _id: timetableId
            }, {
                teacher,
                subject,
                term,
                time
            }, {
                new: true
            },
            (err, success) => {
                if (err) {
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

exports.getAllClassTimetable = async (classId) => {
    try {
        console.log("class:", "class: " + classId)
        return await Timetable.find({
                class: classId
            })
            .sort({"time.dayOfWeek": 1, "time.starts": 1})
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
 
exports.getAllClassTeacherTimetable = async (classId, teacherId) => {
    try {
        console.log("class-teach:", "class: " + classId, "teacherId: " + teacherId)
        return await Timetable.find({
                class: classId,
                teacher: teacherId
            })
            .sort({"time.dayOfWeek": 1, "time.starts": 1})
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

exports.getAllClassTeacherSubjectTimetable = async (classId, teacherId, subjectId) => {
    try {
        return await Timetable.find({
                class: classId,
                teacher: teacherId,
                subject: subjectId
            })
            .sort({"time.dayOfWeek": 1, "time.starts": 1})
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
exports.getAllTeacherTimetable = async (teacherId) => {
    try {
        return await Timetable.find({
                teacher: teacherId
            })
            .sort({"time.dayOfWeek": 1, "time.starts": 1})
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

exports.getOneTimetableSlot = async (timetableId) => {
    try {
        return await Timetable.findById(timetableId)
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

exports.delete = async (timetableId) => {
    try {
        return await Timetable.findByIdAndDelete(timetableId);
    } catch (error) {
        throw error;
    }
}

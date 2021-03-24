import ClassTeacher from './model'

exports.create = async (assignedClass, teacher, subject) => {
    try {
        const newClassTeacher = new ClassTeacher({
            class: assignedClass,
            teacher,
            subject
        })
        await newClassTeacher.save()
        return newClassTeacher;
    } catch (error) {
        throw error;
    }
};

exports.update = async (classTeacherId, assignedClass, teacher, subject) => {
    try {
        return await ClassTeacher.findByIdAndUpdate({
                _id: classTeacherId
            }, {
                class: assignedClass,
                teacher,
                subject
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

exports.getOneClassTeachers = async (classId) => {
    try {
        return await ClassTeacher.find({
                class: classId
            })
            .populate({
                path: 'teacher subject',
                select: 'firstName lastName email name'
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
exports.getOneTeacherClasses = async (teacherId) => {
    try {
        return await ClassTeacher.find({
                teacher: teacherId
            })
            .populate({
                path: 'class subject',
                select: 'level combination label name',
                populate: {
                    path: 'level combination'
                }
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

exports.getOneClassTeacher = async (classTeacherId) => {
    try {
        return await ClassTeacher.findById(classTeacherId)

            .populate({
                path: 'class teacher subject',
                select: 'level combination label firstName lastName name',
                populate: {
                    path: 'level combination'
                }
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

exports.getOneClassSubjects = async (classId) => {
    try {
        console.log(classId)
        return await ClassTeacher.find({
                class: classId
            })
            .populate({
                path: ' teacher subject',
                select: 'firstName lastName name'
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

exports.delete = async (classTeacherId) => {
    try {
        return await ClassTeacher.findByIdAndDelete(classTeacherId);
    } catch (error) {
        throw error;
    }
}
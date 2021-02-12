import Student from './model'

exports.create = async (firstName, lastName, school, studentClass) =>{
try {
    const newStudent = new Student({
        firstName,
        lastName,
        school,
        class: studentClass
    })
    await newStudent.save()
    return newStudent;
} catch (error) {
    throw error; 
}
};

exports.update = async (studentId, firstName, lastName, studentClass) => {
    try {
        return await Student.findByIdAndUpdate(
            {_id: studentId},
            {firstName, lastName, class: studentClass},{new: true},
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

exports.getAllClassStudents = async (classId) => {
    try {
        return await Student.find({class: classId})
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

exports.getAllSchoolStudents = async (schoolId) => {
    try {
        return await Student.find({school: schoolId})
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

exports.getOneStudent = async (studentId) => {
    try {
        return await Student.findById(studentId)
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

exports.delete = async (studentId) => {
    try {
        return await Student.findByIdAndDelete(studentId);
    } catch (error) {
        throw error;
    }
}
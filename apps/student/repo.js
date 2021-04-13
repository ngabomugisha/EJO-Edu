import Student from './model'

exports.create = async (
    school,
    studentClass,
    firstName,
    lastName,
    registrationNumber,
    gender,
    studentProgram,
    dateOfBirth,
    address,
    scholarship,
    ngo,
    allergies,
    permanentHealthConditions,
    guardians
) => {
    try {
        const newStudent = new Student({
            school,
            class: studentClass,
            firstName,
            lastName,
            registrationNumber,
            gender,
            studentProgram,
            dateOfBirth,
            address,
            scholarship,
            ngo,
            allergies,
            permanentHealthConditions,
            guardians
        })
        await newStudent.save()
        return newStudent;
    } catch (error) {
        throw error;
    }
};

exports.update = async (
    studentId,
    studentClass,
    firstName,
    lastName,
    registrationNumber,
    gender,
    studentProgram,
    dateOfBirth,
    address,
    scholarship,
    ngo,
    allergies,
    permanentHealthConditions,
    guardians
) => {
    try {
        return await Student.findByIdAndUpdate({
                _id: studentId
            }, {
                class: studentClass,
                firstName,
                lastName,
                registrationNumber,
                gender,
                studentProgram,
                dateOfBirth,
                address,
                scholarship,
                ngo,
                allergies,
                permanentHealthConditions,
                guardians
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

exports.getAllClassStudents = async (classId) => {
    try {
        return await Student.find({
                class: classId,
                expelled: false
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

exports.getAllSchoolStudents = async (schoolId) => {
    try {
        return await Student.find({
                school: schoolId
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

exports.expel = async (
    studentId,
    expelled,
    school
) => {
    try {
        console.log(studentId,
            expelled,
            school)
        return await Student.findOneAndUpdate({
                _id: studentId,
                school: school
            }, {
                expelled: expelled
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

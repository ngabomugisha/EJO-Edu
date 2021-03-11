import Student from './model'

exports.create = async (
    school,
    studentClass,
    firstName,
    lastName,
    gender,
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
            studentClass,
            firstName,
            lastName,
            gender,
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
    gender,
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
                gender,
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
                class: classId
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
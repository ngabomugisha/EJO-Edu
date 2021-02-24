import Student from './repo'
import Response from '../../utils/Responses';

exports.create = async (req, res) => {
    try {
        const {
            studentClass,
            firstName,
            lastName,
            gender,
            dateOfBirth,
            address,
            scholarship,
            allergies,
            permanentHealthConditions,
            mother,
            father
        } = req.body;
        const school = req.user.school
        Student.create(
                school,
                studentClass,
                firstName,
                lastName,
                gender,
                dateOfBirth,
                address,
                scholarship,
                allergies,
                permanentHealthConditions,
                mother,
                father
            )
            .then(results => {
                Response.Success(res, 200, "created successfully", results);
            })
            .catch(err => {
                console.log(err);
                Response.InternalServerError(res, "We are having issues! please try again soon");
            });

    } catch (error) {
        console.log(error);
        Response.InternalServerError(res, "We are having issues! please try again soon");
    }

}

exports.update = async (req, res) => {
    try {
        const studentId = req.params.studentId;
        const {
            studentClass,
            firstName,
            lastName,
            gender,
            dateOfBirth,
            address,
            scholarship,
            allergies,
            permanentHealthConditions,
            mother,
            father
        } = req.body;
        Student.update(
                studentId,
                studentClass,
                firstName,
                lastName,
                gender,
                dateOfBirth,
                address,
                scholarship,
                allergies,
                permanentHealthConditions,
                mother,
                father
            )
            .then(results => {
                Response.Success(res, 200, "updated successfully", results);
            })
            .catch(err => {
                console.log(err);
                Response.InternalServerError(res, "We are having issues! please try again soon");
            });

    } catch (error) {
        console.log(error);
        Response.InternalServerError(res, "We are having issues! please try again soon");
    }

}

exports.getAllClassStudents = async (req, res) => {
    try {
        const classId = req.params.classId;
        Student.getAllClassStudents(classId)
            .then(results => {
                Response.Success(res, 200, "queried successfully", results);
            })
            .catch(err => {
                console.log(err);
                Response.InternalServerError(res, "We are having issues! please try again soon");
            });

    } catch (error) {
        console.log(error);
        Response.InternalServerError(res, "We are having issues! please try again soon");
    }

}

exports.getAllSchoolStudents = async (req, res) => {
    try {
        const schoolId = req.params.schoolId;
        Student.getAllSchoolStudents(schoolId)
            .then(results => {
                Response.Success(res, 200, "queried successfully", results);
            })
            .catch(err => {
                console.log(err);
                Response.InternalServerError(res, "We are having issues! please try again soon");
            });

    } catch (error) {
        console.log(error);
        Response.InternalServerError(res, "We are having issues! please try again soon");
    }

}

exports.getOneStudent = async (req, res) => {
    try {
        const studentId = req.params.studentId;

        Student.getOneStudent(studentId)
            .then(results => {
                Response.Success(res, 200, "queried successfully", results);
            })
            .catch(err => {
                console.log(err);
                Response.InternalServerError(res, "We are having issues! please try again soon");
            });

    } catch (error) {
        console.log(error);
        Response.InternalServerError(res, "We are having issues! please try again soon");
    }

}

exports.delete = async (req, res) => {
    try {
        const studentId = req.params.studentId;

        Student.delete(studentId)
            .then(results => {
                Response.Success(res, 200, "deleted successfully", results);
            })
            .catch(err => {
                console.log(err);
                Response.InternalServerError(res, "We are having issues! please try again soon");
            });

    } catch (error) {
        console.log(error);
        Response.InternalServerError(res, "We are having issues! please try again soon");
    }

}
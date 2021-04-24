import StudentLeave from './repo'
import Response from '../../../utils/Responses';

exports.create = async (req, res) => {
    try {
        const {
            student,
            studentClass,
            reason,
            checkout,
            leavingWithWho,
            provisionalCheckin
        } = req.body;
        const checkedoutBy = req.user._id
        const school = req.user.school

        StudentLeave.create(student, studentClass, reason, checkout, leavingWithWho, provisionalCheckin, checkedoutBy, school)
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
        const studentLeaveId = req.params.studentLeaveId;
        const checkedinBy = req.user._id
        const {
            checkin
        } = req.body;
        StudentLeave.update(studentLeaveId, checkin, checkedinBy)
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

exports.getSchoolStudentLeaves = async (req, res) => {
    try {

        const schoolId = req.params.schoolId;
        StudentLeave.getSchoolStudentLeaves(schoolId)
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

exports.getClassStudentsOnLeave = async (req, res) => {
    try {

        const classId = req.params.classId;
        StudentLeave.getClassStudentsOnLeave(classId)
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


exports.getClassStudentsOnLeaveNow = async (req, res) => {
    try {

        const classId = req.params.classId;
        StudentLeave.getClassStudentsOnLeaveNow(classId)
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


exports.getOneStudentLeave = async (req, res) => {
    try {
        const studentLeaveId = req.params.studentLeaveId;

        StudentLeave.getOneStudentLeave(studentLeaveId)
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
        const studentLeaveId = req.params.studentLeaveId;
        
        StudentLeave.delete(studentLeaveId)
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
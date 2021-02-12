import TeacherLeave from './repo'
import Response from '../../utils/Responses';

exports.create = async (req, res) => {
    try {
        const {
            reason,
            starts,
            ends
        } = req.body;
        const teacher = req.user._id

        TeacherLeave.create(teacher, reason, starts, ends)
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
        const teacherLeaveId = req.params.teacherLeaveId;
        const {
            approved
        } = req.body;
        const approvedBy = req.user._id
        TeacherLeave.update(teacherLeaveId, approved, approvedBy)
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

exports.getAllTeacherLeaves = async (req, res) => {
    try {

        TeacherLeave.getAllTeacherLeaves()
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


exports.getOneTeacherLeave = async (req, res) => {
    try {
        const teacherLeaveId = req.params.teacherLeaveId;

        TeacherLeave.getOneTeacherLeave(teacherLeaveId)
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
        const teacherLeaveId = req.params.teacherLeaveId;
        
        TeacherLeave.delete(teacherLeaveId)
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
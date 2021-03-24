import Marks from './repo'
import Response from '../../utils/Responses';

exports.create = async (req, res) => {
    try {
        const {
            student,
            answers,
            totalMarks,
            subject,
            studentClass,
            assignment,
            started,
            ended,
            marksPublished
        } = req.body;

        Marks.create(
            student,
            answers,
            totalMarks,
            subject,
            studentClass,
            assignment,
            started,
            ended,
            marksPublished
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
        const marksId = req.params.marksId;
        const {
            answers,
            totalMarks,
            subject,
            started,
            ended,
            marksPublished
        } = req.body;
        Marks.update(
            marksId,
            answers,
            totalMarks,
            subject,
            started,
            ended,
            marksPublished
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

exports.getStudentSubjectMarks = async (req, res) => {
    try {

        const studentId = req.params.studentId;
        const subjectId = req.params.subjectId
        Marks.getStudentSubjectMarks(studentId, subjectId)
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

exports.getAssignmentMarks = async (req, res) => {
    try {
        const assignmentId = req.params.assignmentId
        Marks.getAssignmentMarks(assignmentId)
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

exports.getClassMarks = async (req, res) => {
    try {
        const classId = req.params.classId
        Marks.getClassMarks(classId)
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

exports.getClassSubjectMarks = async (req, res) => {
    try {
        const classId = req.params.classId
        const subjectId = req.params.subjectId
        Marks.getClassSubjectMarks(classId, subjectId)
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


exports.getOneMarks = async (req, res) => {
    try {
        const marksId = req.params.marksId;

        Marks.getOneMarks(marksId)
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
        const marksId = req.params.marksId;
        
        Marks.delete(marksId)
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
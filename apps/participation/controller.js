import Participation from './repo'
import Student from '../student/repo'
import Response from '../../utils/Responses';

exports.create = async (req, res) => {
    try {
        const {
            assignedClass,
            subject
        } = req.body;
        const teacher = req.user._id
        const rawStudents = await Student.getAllClassStudents(assignedClass);    
        const students = [];
        rawStudents.map(student => {
            students.push({
                student: student._id
            })
        })
        
        Participation.create(
            assignedClass,
            teacher,
            subject,
            students
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

exports.addStudentParticipation = async (req, res) => {
    try {
        const participationId = req.params.participationId;
        const {
            students,
            positive,
            firstLevel,
            record
        } = req.body

        const teacher = req.user._id

        Participation.addStudentParticipation(
            participationId,
            teacher,
            students,
            positive,
            firstLevel,
            record
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

exports.addComment = async (req, res) => {
    try {
        const student = req.params.studentId;
        const {
            comment,
            studentClass,
            subject,
        } = req.body
        const teacher = req.user._id
        Participation.addComment(
                studentClass,
                subject,
                student,
                comment,
                teacher
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

exports.getStudentComments = async (req, res) => {
    try {

        const studentId = req.params.studentId
        const subject = req.params.subjectId
        const classId = req.params.classId
        Participation.getStudentComments( classId, subject, studentId )
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

exports.getStudentParticipation = async (req, res) => {
    try {

        const studentId = req.params.studentId
        const subjectId = req.params.subjectId
        const classId = req.params.classId
        Participation.getStudentParticipation( studentId, classId, subjectId )
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

exports.getClassParticipation = async (req, res) => {
    try {

        const classId = req.params.classId
        const subject = req.params.subject
        const teacher = req.user._id
        Participation.getClassParticipation(classId, subject, teacher)
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
        const participationId = req.params.participationId;
        
        Participation.delete(participationId)
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
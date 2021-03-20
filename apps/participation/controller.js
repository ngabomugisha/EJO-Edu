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

        Participation.addStudentParticipation(
            participationId,
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
        const participationId = req.params.participationId;
        const {
            student,
            comment
        } = req.body

        const author = req.user._id
        Participation.addComment(
            participationId,
            student,
            comment,
            author
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

exports.getClassParticipation = async (req, res) => {
    try {

        const classId = req.params.classId
        const teacher = req.user._id
        console.log("class: ", classId)
        Participation.getClassParticipation(classId, teacher)
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
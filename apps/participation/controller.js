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
            studentId,
            positive,
            firstLevel,
            secondLevel,
            thirdLevel
        } = req.body

        Participation.addStudentParticipation(
            participationId,
            studentId,
            positive,
            firstLevel,
            secondLevel,
            thirdLevel
            )
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


exports.getOneParticipation = async (req, res) => {
    try {
        const participationId = req.params.participationId;

        Participation.getOneParticipation(participationId)
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
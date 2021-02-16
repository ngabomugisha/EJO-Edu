import StudentAssigment from './repo'
import Response from '../../utils/Responses';

exports.create = async (req, res) => {
    try {
        const {
            title, assignedClass, subject
        } = req.body;
        const teacher = req.user._id

        StudentAssigment.create(title, assignedClass, subject, teacher)
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
        const studentAssigmentId = req.params.studentAssigmentId;
        const {
            title
        } = req.body;
        StudentAssigment.update(studentAssigmentId, title)
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

exports.getAllClassSubjectStudentAssigmentes = async (req, res) => {
    try {

        const classId = req.params.classId;
        const subjectId = req.params.subjectId
        StudentAssigment.getAllClassSubjectStudentAssigmentes(classId, subjectId)
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


exports.getOneStudentAssigment = async (req, res) => {
    try {
        const studentAssigmentId = req.params.studentAssigmentId;

        StudentAssigment.getOneStudentAssigment(studentAssigmentId)
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
        const studentAssigmentId = req.params.studentAssigmentId;
        
        StudentAssigment.delete(studentAssigmentId)
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
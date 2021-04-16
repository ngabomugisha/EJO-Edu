import Discipline from './repo'
import SchoolDiscipline from '../school-discipline/repo'
import Response from '../../utils/Responses';

exports.addStudentDiscipline = async (req, res) => {
    try {
        const {
            studentClass,
            students,
            firstLevel,
            secondLevel,
            thirdLevel,
            forthLevel
        } = req.body
        const schoolId = req.user.school
        const disciplineAction = await SchoolDiscipline.getDisciplineAction(
            req.user.school,
            firstLevel.trim().toLowerCase(),
            secondLevel.trim().toLowerCase(),
            thirdLevel.trim().toLowerCase(),
            forthLevel.trim().toLowerCase()
         )
         
        if(!disciplineAction){
            return Response.validationError(res, "Discipline action not found, Please contact school admin to register it")
        }

        Discipline.addStudentDiscipline(
            studentClass,
            schoolId,
            students,
            firstLevel,
            secondLevel,
            thirdLevel,
            forthLevel,
            disciplineAction.marks
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
        const {
            studentClass,
            student,
            comment
        } = req.body

        const author = req.user._id
        const school = req.user.school

        Discipline.addComment(
            studentClass,
            student,
            comment,
            author,
            school
            )
            .then(results => {
                Response.Success(res, 200, "Created successfully", results);
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

exports.getClassDiscipline = async (req, res) => {
    try {

        const classId = req.params.classId
        Discipline.getClassDiscipline(classId)
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

exports.getStudentDiscipline = async (req, res) => {
    try {

        const studentId = req.params.studentId
        Discipline.getStudentDiscipline(studentId)
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
        const disciplineId = req.params.disciplineId;
        
        Discipline.delete(disciplineId)
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
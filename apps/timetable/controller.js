import Timetable from './repo'
import Response from '../../utils/Responses';

exports.create = async (req, res) => {
    try {
        const {
            assignedClass,
            teacher,
            subject,
            term,
            time
        } = req.body;
        const school = req.user.school

        const checkConflicts = await Timetable.checkConflicts(assignedClass, teacher, term, time)
        console.log(checkConflicts)
        if(checkConflicts){
            return Response.validationError(res, "This entry is conflicing with an existing one, change time and try again");
        }
        Timetable.create(
            school,
            assignedClass,
            teacher,
            subject,
            term,
            time
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
        const timetableId = req.params.timetableId;
        const {
            teacher,
            subject,
            term,
            time
        } = req.body;
        Timetable.update(
            timetableId,
            teacher,
            subject,
            term,
            time
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

exports.getAllClassTimetable = async (req, res) => {
    try {

        const classId = req.params.classId;
        Timetable.getAllClassTimetable(classId)
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

exports.getAllClassTeacherTimetable = async (req, res) => {
    try {

        const classId = req.params.classId;
        const teacherId = req.params.teacherId;
        Timetable.getAllClassTeacherTimetable(classId, teacherId)
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

exports.getAllClassTeacherSubjectTimetable = async (req, res) => {
    try {

        const classId = req.params.classId;
        const teacherId = req.params.teacherId;
        const subjectId = req.params.subjectId;
        Timetable.getAllClassTeacherSubjectTimetable(classId, teacherId, subjectId)
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

exports.getAllTeacherTimetable = async (req, res) => {
    try {
        const teacherId = req.params.teacherId;
        Timetable.getAllTeacherTimetable(teacherId)
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

exports.getAllTodaysTeacherTimetable = async (req, res) => {
    try {
        const teacherId = req.params.teacherId;
        Timetable.getAllTodaysTeacherTimetable(teacherId)
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

exports.getOneTimetableSlot = async (req, res) => {
    try {
        const timetableId = req.params.timetableId;

        Timetable.getOneTimetableSlot(timetableId)
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
        const timetableId = req.params.timetableId;
        
        Timetable.delete(timetableId)
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
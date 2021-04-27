import ClassAttendance from './repo'
import Timetable from '../../timetable/repo'
import Response from '../../../utils/Responses';

exports.create = async (req, res) => {
    try {
        const {
            students,
            subject,
            assignedClass
        } = req.body;
        const today = new Date(Date.now())
        let day = today.getDay()
        const hour = today.getHours()
        const minutes = today.getMinutes()
        // day = (day == 0)? 7 : day + 1
        console.log(assignedClass, subject, day, hour, minutes, today.getDay())
        const slotOnTimetable = await Timetable.getTimetableSlotBasedOnTime(assignedClass, subject, day, hour, minutes)

        if(!slotOnTimetable){
            return Response.validationError(res, "No slot on time table now! request to be added by admin");
        }

        const teacher = req.user._id;
        const school = req.user.school

        ClassAttendance.create(slotOnTimetable, students, subject, assignedClass, teacher, school)
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

exports.getClassAttendanceBySlotOnTimetable = async (req, res) => {
    try {
        const slotOnTimetableId = req.params.slotOnTimetableId;

        ClassAttendance.getClassAttendanceBySlotOnTimetable(slotOnTimetableId)
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

exports.getOneClassAttendance = async (req, res) => {
    try {
        const classAttendanceId = req.params.classAttendanceId;

        ClassAttendance.getOneClassAttendance(classAttendanceId)
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

exports.getAllClassAttendances = async (req, res) => {
    try {
        const classId = req.params.classId;
        ClassAttendance.getAllClassAttendances(classId)
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

exports.getAllSubjectClassAttendances = async (req, res) => {
    try {
        const classId = req.params.classId;
        const subjectId = req.params.subjectId;
        ClassAttendance.getAllSubjectClassAttendances(classId, subjectId)
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

exports.getAllSubjectClassAttendanceStatistics = async (req, res) => {
    try {
        const classId = req.params.classId;
        const subjectId = req.params.subjectId;
        ClassAttendance.getAllSubjectClassAttendanceStatistics(classId, subjectId)
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


exports.getOneStudentAttendanceBySubject = async (req, res) => {
    try {
        const studentId = req.params.studentId;
        const subjectId = req.params.subjectId;
        ClassAttendance.getOneStudentAttendanceBySubject(studentId, subjectId)
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

exports.getOneStudentAttendance = async (req, res) => {
    try {
        const studentId = req.params.studentId;

        ClassAttendance.getOneStudentAttendance(studentId)
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
        const classAttendanceId = req.params.classAttendanceId;
        
        ClassAttendance.delete(classAttendanceId)
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
import ClassAttendance from './repo'
import Response from '../../../utils/Responses';

exports.create = async (req, res) => {
    try {
        const {
            slotOnTimetable,
            students
        } = req.body;

        ClassAttendance.create(slotOnTimetable, students)
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
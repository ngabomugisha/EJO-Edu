const mongoose = require('mongoose');

const classAttendanceSchema = new mongoose.Schema({
    slotOnTimetable: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'timetable'
    },
    students: [{
        student: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'student'
        },
        present: {
            type: Boolean
        }
    }]
}, {timestamps: true});

export default mongoose.model("classAttendance", classAttendanceSchema);

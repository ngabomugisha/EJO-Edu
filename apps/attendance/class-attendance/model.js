const mongoose = require('mongoose');

const classAttendanceSchema = new mongoose.Schema({
    slotOnTimetable: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'timetable'
    },
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'class'
    },
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subject'
    },
    school: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'school'
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    time: {
        type: Date,
        default: Date.now
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

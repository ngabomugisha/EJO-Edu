const mongoose = require('mongoose');

const timetablechema = new mongoose.Schema({
    school: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'school'
    },
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'class'
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subject'
    },
    term: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'term'
    },
    time: {
            dayOfWeek: Number,
            starts: String,
            ends: String
    }
}, {timestamps: true});

export default mongoose.model("timetable", timetablechema);

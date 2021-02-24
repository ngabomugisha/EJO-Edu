const mongoose = require('mongoose');

const classTeacherSchema = new mongoose.Schema({
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
}, {timestamps: true});

export default mongoose.model("classTeacher", classTeacherSchema);

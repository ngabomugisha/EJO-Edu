const mongoose = require('mongoose');

const assignmenteschema = new mongoose.Schema({
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'course'
    },
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'class'
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: String,
}, {timestamps: true});

export default mongoose.model("assignment", assignmenteschema);

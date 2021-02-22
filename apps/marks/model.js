const mongoose = require('mongoose');

const markseschema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'student'
    },
    answers: [{
        question: {
            type: mongoose.Schema.Types.ObjectId,
        },
        answer: [{
            answer: String
        }],
        markedBy: {
            type: String,
            enum: ['MACHINE', 'HUMAN'],
            default: 'HUMAN'
        },
        awardedPoints: Number
    }],
    totalMarks: Number,
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subject'
    },
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'class'
    },
    assignment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'assignment'
    },
    started: Date,
    ended: Date,
    marksPublished: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});

export default mongoose.model("marks", markseschema);

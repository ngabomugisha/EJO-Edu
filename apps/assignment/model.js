const mongoose = require('mongoose');

const assignmenteschema = new mongoose.Schema({
    title: String,
    questions: [{
        question: String,
        unit: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'unit'
        },
        questionType: {
            type: String,
            enum: ['OPEN', 'MULTIPLE-CHOICE', 'SINGLE-CHOICE']
        },
        possibleAnswer: [{
                answer: String
        }],
        answer: String,
        points: Number
    }],
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subject'
    },
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'class'
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    duration: Number,
    starts: Date,
    ends: Date
}, {timestamps: true});

export default mongoose.model("assignment", assignmenteschema);

const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
    title: String,
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subject'
    },
    unit: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'unit'
    },
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
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'assignmentQuestion'
    }],
    duration: Number,
    starts: Date,
    ends: Date,
    assignmentSetting: {
        type: String,
        enum: ['ONLINE','IN-CLASS']
    },
    assignmentType: {
        type: String,
        enum: ['INDIVIDUAL','GROUP', 'HOME-WORK', 'SUMMATIVE', 'EXAM']
    },
    testMethod: {
        type: String,
        enum: ['ORAL','WRITTEN']
    }
}, {
    timestamps: true
});


const assignmentQuestionSchema = new mongoose.Schema({
    difficultLevel: {
        type: String,
        enum: ['EASY', 'MEDIUM', 'DIFFICULT']
    },
    questionObjective: {
        type: String,
        enum: ['REMEMBERING', 'UNDERSTANDING', 'APPLYING', 'ANALYSING', 'CREATING', 'EVALUATING']
    },
    question: String,
    questionType: {
        type: String,
        enum: ['MULTI-CHOICE', 'TRUE/FALSE', 'MATCHING', 'FILL-IN-THE-BLANK', 'SHORT-ANSWER', 'LONG-ANSWER']
    },
    possibleAnswer: [{
        answer: String
    }],
    matchingAnswer: [{
        answer: String,
        matchesWith: String
    }],
    answer: [{
        answer: String
    }],
    points: Number
})


module.exports.Assignment = mongoose.model("assignment", assignmentSchema);
module.exports.AssignmentQuestion = mongoose.model("assignmentQuestion", assignmentQuestionSchema);

// export default {Assignment, AssignmentQuestion}

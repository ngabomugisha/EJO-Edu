const mongoose = require('mongoose');

const questionBankSchema = new mongoose.Schema({
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
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    questionsObjective: String, //develop
    difficultLevel: {
        type: String,
        enum: ['EASY','MEDIUM','DIFFICULT']
    },
    questionsObjective: {
        type: String,
        enum: ['REMEMBERING','UNDERSTANDING','APPLYING','ANALYSING','CREATING','EVALUATING']
    },
    question: String,
    questionType: {
        type: String,
        enum: ['MULTI-CHOICE', 'TRUE/FALSE', 'MATCHING','FILL-IN-THE-BLANK','SHORT-ANSWER','LONG-ANSWER']
    },
    possibleAnswer: [{
            answer: String
    }],
    answer: String,
}, {timestamps: true});

export default mongoose.model("questionBank", questionBankSchema);

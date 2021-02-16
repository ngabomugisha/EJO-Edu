const mongoose = require('mongoose');

const questionBankSchema = new mongoose.Schema({
    question: String,
    questionType: {
        type: String,
        enum: ['OPEN', 'MULTIPLE-CHOICE', 'SINGLE-CHOICE']
    },
    possibleAnswer: [{
            answer: String
    }],
    answer: String,
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
}, {timestamps: true});

export default mongoose.model("questionBank", questionBankSchema);

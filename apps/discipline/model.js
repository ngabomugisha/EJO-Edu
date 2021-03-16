const mongoose = require('mongoose');

const disciplineSchema = new mongoose.Schema({
    term: {
        type: mongoose.Schema.Types.ObjectId,
            ref: 'class'
    },
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'class'
    },
    school: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'school'
    },
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'student'
    },
    total: {
        type: Number,
        default: 0
    },
    disciplineEntries: [{
        firstLevel: String,
        secondLevel: String,
        thirdLevel: String,
        forthLevel: String,
        marks: Number,
        time: Date,
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        },
        
    }],
    comments: [{
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        },
        comment: String,
        time: Date
    }]
}, {
    timestamps: true
});

export default mongoose.model("discipline", disciplineSchema);

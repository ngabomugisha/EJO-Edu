const mongoose = require('mongoose');

const participationSchema = new mongoose.Schema({
    ended: Date,
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
    students: [{
        student: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'student'
        },
        participation: [{
            positive: Boolean,
            firstLevel: {
                type: String
            },
            record: [{
                secondLevel: {
                    type: String
                },
                thirdLevel: {
                    type: String
                }
            }],
            time: Date
        }],
    }]
}, {
    timestamps: true
});



const participationCommentSchema = new mongoose.Schema({
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
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'student'
    },
    comment: String,

}, {
    timestamps: true
});

const participationModel = mongoose.model("participation", participationSchema);
const participationCommentModel = mongoose.model("participationComment", participationCommentSchema);

module.exports = {Participation: participationModel, ParticipationComment: participationCommentModel} ;

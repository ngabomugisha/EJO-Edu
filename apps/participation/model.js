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
    cycleNumber: {
        type: Number,
        default: 1
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
        comments: [{
            author: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'user'
            },
            comment: String,
            time: Date
        }]
    }]
}, {
    timestamps: true
});

export default mongoose.model("participation", participationSchema);

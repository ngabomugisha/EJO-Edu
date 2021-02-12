const mongoose = require('mongoose');

const studentLeaveSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'student'
    },
    reason: String,
    checkout: Date,
    checkin: Date,
    checkedoutBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    checkedinBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
}, {timestamps: true});

export default mongoose.model("studentLeave", studentLeaveSchema);

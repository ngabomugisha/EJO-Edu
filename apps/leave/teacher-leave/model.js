const mongoose = require('mongoose');

const teacherLeaveSchema = new mongoose.Schema({
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    school: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'school'
    },
    applyTo: {
        type: String
    },
    reason: {
        type: String
    },
    otherReason: {
        type: String
    },
    starts: Date,
    ends: Date,
    approved: {
        type: Boolean,
        default: false
    },
    approvedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
}, {timestamps: true});

export default mongoose.model("teacherLeave", teacherLeaveSchema);

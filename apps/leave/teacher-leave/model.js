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
    reason: {
        type: String,
        enum: ['STUDY','HOLIDAY','SICK','FAMILY']
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

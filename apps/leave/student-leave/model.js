const mongoose = require('mongoose');

const studentLeaveSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'student'
    },
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'class'
    },
    school: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'school'
    },
    reason: {
        type: String,
        enum: ['STUDY','HOLIDAY','SICK','FAMILY']
    },
    checkout: Date,
    checkin: Date,

    leavingWithWho: {
        firstName: String,
        lastName: String,
        phone: String,
        identificationNumber: String,
        relationship: String,
    },
    provisionalCheckin: Date,
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

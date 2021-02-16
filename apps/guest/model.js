const mongoose = require('mongoose');

const guestSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    reason: String,
    checkout: Date,
    checkin: Date,
    school: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'school'
    },
    checkedoutBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    checkedinBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
}, {timestamps: true});

export default mongoose.model("guest", guestSchema);

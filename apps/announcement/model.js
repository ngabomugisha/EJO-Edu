const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({
    announcement: String,
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    receiverTypes: [{
        receiver: String
    }],
    receivers: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        },
        read: {
            type: Boolean,
            default: false
        }
    }],
    school: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'school'
    },
}, {timestamps: true});

export default mongoose.model("announcement", announcementSchema);

const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({
    announcement: String,
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    school: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'school'
    },
}, {timestamps: true});

export default mongoose.model("announcement", announcementSchema);

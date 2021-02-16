const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
    name: String,
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    school: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'school'
    },
    unit: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'unit'
    },
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subject'
    },
    lessons: [
        {
            type: String
        }
    ]
}, {timestamps: true});

export default mongoose.model("plan", planSchema);

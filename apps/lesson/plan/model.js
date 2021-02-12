const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
    name: String,
    unit: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'unit'
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'unit'
    },
    lessons: [
        {
            type: String
        }
    ]
}, {timestamps: true});

export default mongoose.model("plan", planSchema);

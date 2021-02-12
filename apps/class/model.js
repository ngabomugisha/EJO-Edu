const mongoose = require('mongoose');

const classeschema = new mongoose.Schema({
    school: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'school'
    },
    level: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'level'
    },
    combination: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'combination'
    },
    label: String,
}, {timestamps: true});

export default mongoose.model("class", classeschema);

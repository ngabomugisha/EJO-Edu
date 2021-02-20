const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
    name: String,
    level: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'level'
    },

}, {timestamps: true});

export default mongoose.model("subject", subjectSchema);

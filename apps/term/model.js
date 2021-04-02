const mongoose = require('mongoose');

const termSchema = new mongoose.Schema({
    name: String,
    starts: Date,
    ends: Date,
    school: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'school'
    },
}, {timestamps: true});

export default mongoose.model("term", termSchema);

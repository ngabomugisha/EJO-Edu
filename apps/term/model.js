const mongoose = require('mongoose');

const termSchema = new mongoose.Schema({
    name: String,
    starts: Date,
    ends: Date,
}, {timestamps: true});

export default mongoose.model("term", termSchema);

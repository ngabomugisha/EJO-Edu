const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
    name: String
}, {timestamps: true});

export default mongoose.model("subject", subjectSchema);

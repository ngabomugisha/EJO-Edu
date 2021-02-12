const mongoose = require('mongoose');

const schoolSchema = new mongoose.Schema({
    name: String
}, {timestamps: true});

export default mongoose.model("school", schoolSchema);

const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: String
}, {timestamps: true});

export default mongoose.model("course", courseSchema);

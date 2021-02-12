const mongoose = require('mongoose');

const levelSchema = new mongoose.Schema({
    name: String
}, {timestamps: true});

export default mongoose.model("level", levelSchema);

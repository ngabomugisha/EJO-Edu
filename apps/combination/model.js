const mongoose = require('mongoose');

const combinationSchema = new mongoose.Schema({
    name: String,
    subjects: [{
        subject: String
    }],
}, {timestamps: true});

export default mongoose.model("combination", combinationSchema);

const mongoose = require('mongoose');

const assignmenteschema = new mongoose.Schema({
    title: String,
    published: {},
    
    
}, {timestamps: true});

export default mongoose.model("assignment", assignmenteschema);

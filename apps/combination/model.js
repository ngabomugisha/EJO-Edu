const mongoose = require('mongoose');

const combinationSchema = new mongoose.Schema({
    name: String,
    subjects: [{
        subject: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'subject'
        }
    }],
}, {timestamps: true});

export default mongoose.model("combination", combinationSchema);

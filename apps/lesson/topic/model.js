const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
    name: String,
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subject'
    }
}, {timestamps: true});

export default mongoose.model("topic", topicSchema);

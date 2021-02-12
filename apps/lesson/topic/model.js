const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
    name: String,
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'course'
    }
}, {timestamps: true});

export default mongoose.model("topic", topicSchema);

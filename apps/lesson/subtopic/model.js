const mongoose = require('mongoose');

const subTopicSchema = new mongoose.Schema({
    name: String,
    topic: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'topic'
    }
}, {timestamps: true});

export default mongoose.model("subTopic", subTopicSchema);

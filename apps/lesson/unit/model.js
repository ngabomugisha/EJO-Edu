const mongoose = require('mongoose');

const unitSchema = new mongoose.Schema({
    name: String,
    subTopic: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subTopic'
    }
}, {timestamps: true});

export default mongoose.model("unit", unitSchema);

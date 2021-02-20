const mongoose = require('mongoose');

const unitSchema = new mongoose.Schema({
    name: String,
    subTopic: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subTopic'
    },
    numberOfPeriods: Number,
    keyCompetency: String,
    content: {
        knowledgeAndUnderstanding: [{
            topic: String
        }],
        skills: [{
            topic: String
        }],
        attitudesAndValues: [{
            topic: String
        }]
    },
    activities: [{
        activity: String
    }]
}, {timestamps: true});

export default mongoose.model("unit", unitSchema);


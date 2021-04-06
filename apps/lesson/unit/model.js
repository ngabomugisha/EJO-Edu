const mongoose = require('mongoose');

const unitSchema = new mongoose.Schema({
    name: String,
    subTopic: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subTopic'
    },
    topic: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'topic'
    },
    numberOfPeriods: Number,
    keyCompetency: String,
    content: {
        knowledgeAndUnderstanding: [{
            topic: String,
            files: [{
                fileType: String,
                file: String
            }]
        }],
        skills: [{
            topic: String,
            files: [{
                fileType: String,
                file: String
            }]
        }],
        attitudesAndValues: [{
            topic: String,
            files: [{
                fileType: String,
                file: String
            }]
        }]
    },
    activities: [{
        activity: String,
        files: [{
            fileType: String,
            file: String
        }]
    }]
}, {timestamps: true});

export default mongoose.model("unit", unitSchema);


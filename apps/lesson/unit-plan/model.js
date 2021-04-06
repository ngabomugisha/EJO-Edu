const mongoose = require('mongoose');

const unitPlanSchema = new mongoose.Schema({
    unit: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'unit'
    },
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subject'
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'teacher'
    },
    time: {
        start: Date,
        end: Date,
        realEnd: Date
    },
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
            }],
            bloomTaxonomy: {
                type: String
            },
            standardCriteriaPerfomance: Number,
            numberOftimesTaught: {
                type: Number,
                default: 0
            },
            lastTaught: Date
        }],
        skills: [{
            topic: String,
            files: [{
                fileType: String,
                file: String
            }],
            bloomTaxonomy: {
                type: String
            },
            standardCriteriaPerfomance: Number,
            numberOftimesTaught: {
                type: Number,
                default: 0
            },
            lastTaught: Date
        }],
        attitudesAndValues: [{
            topic: String,
            files: [{
                fileType: String,
                file: String
            }],
            bloomTaxonomy: {
                type: String
            },
            standardCriteriaPerfomance: Number,
            numberOftimesTaught: {
                type: Number,
                default: 0
            },
            lastTaught: Date
        }]
    },
    activities: [{
        activity: String,
        files: [{
            fileType: String,
            file: String
        }],
        numberOftimesTaught: {
            type: Number,
            default: 0
        },
        lastTaught: Date
    }]
}, {timestamps: true});

export default mongoose.model("unitPlan", unitPlanSchema);

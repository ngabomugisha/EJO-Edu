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
    numberOfPeriods: Number,
    keyCompetency: String,
    content: {
        knowledgeAndUnderstanding: [{
            topic: String,
            numberOftimesTaught: {
                type: Number,
                default: 0
            },
            lastTaught: Date
        }],
        skills: [{
            topic: String,
            numberOftimesTaught: {
                type: Number,
                default: 0
            },
            lastTaught: Date
        }],
        attitudesAndValues: [{
            topic: String,
            numberOftimesTaught: {
                type: Number,
                default: 0
            },
            lastTaught: Date
        }]
    },
    activities: [{
        activity: String,
        numberOftimesTaught: {
            type: Number,
            default: 0
        },
        lastTaught: Date
    }]
}, {timestamps: true});

export default mongoose.model("unitPlan", unitPlanSchema);

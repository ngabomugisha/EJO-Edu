const mongoose = require('mongoose');

const schoolSchema = new mongoose.Schema({
    name: String,
    roles: [{
        role: {
            temp: String,
            given: String
        }
    }],
    address: {
        type: mongoose.Schema.Types.ObjectId,
            ref: 'village'
    },
    gender: {
        type: String,
        enum: ['GIRLS-ONLY', 'BOYS-ONLY', 'MIXED']
    },
    educationalStage: [{
        level: {
            type: String,
            enum: ['LOWER-PRIMARY', 'UPPER-PRIMARY','ORDINARY-LEVEL-SECONDARY','ADVANCED-LEVEL-SECONDARY']
        }
    }],
    status: {
        type: String,
        enum: ['PRIVATE', 'GOVERMENT-SCHOOL', 'GOVERMENT-AIDED']
    },
    disciplineMarks: {
        type: Number,
        default: 0
    },
    howLongIsClassPeriod: {
        type: Number,
        default: 40
    },
}, {
    timestamps: true
});

export default mongoose.model("school", schoolSchema);

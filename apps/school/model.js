const mongoose = require('mongoose');

const schoolSchema = new mongoose.Schema({
    name: String,
    roles: [
        {
            role: {
                temp: String,
                given: String
            },

        }
    ],
    address: String,
    gender: {
        type: String,
        enum: ['GIRLS-ONLY','BOYS-ONLY','MIXED']
    },
    howLongIsClassPeriod: Number,
    educationalStage: [
        {
            level: String
        }
    ], // primary[lower, upper], secondary[ordinary, advanced]
    status: {
        type: String,
        enum: ['PRIVATE', 'GOVERMENT-SCHOOL','GOVERMENT-AIDED']
    }
    
}, {timestamps: true});

export default mongoose.model("school", schoolSchema);

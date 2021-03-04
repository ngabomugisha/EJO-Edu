const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    dateOfBirth: Date,
    boardingStatus: String,
    gender: {
        type: String,
        enum: ['M','F', null]
    },
    busRoute: String,
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'village'
    },
    scholarshipStatus: {
        type: String,
        enum: ['PRIVATE','SCHOOL','GOVERMENT', null]
    },
    allergies: String,
    permanentHealthConditions: [
        {
            condition: {
                type:  String,
                enum: ['VISUAL-DIFFICULTIES','PHYSICAL-IMPAIREMENT','HEARING-DIFFICULTIES','LEARNING-DIFFICULTIES','PHSYCHOLOGICAL-DIFFICULTIES', null]
            }
        }
    ],
    mother: {
        firstName: String,
        lastName: String,
        identificationNumber: String,
        phone: String,
        email: String,
        maritalStatus: {
            type: String,
            enum: ['SINGLE','MARIED','DIVORCED', null]
        }
    },
    father: {
        firstName: String,
        lastName: String,
        identificationNumber: String,
        phone: String,
        email: String,
        maritalStatus: {
            type: String,
            enum: ['SINGLE','MARIED','DIVORCED', null]
        }
    },
    school: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'school'
    },
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'class'
    }
}, {timestamps: true});

export default mongoose.model("student", studentSchema);

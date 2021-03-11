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
    ngo: {
        name: String,
        contactPerson: {
            title: String,
            name: String,
            phone: String
        }
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
    guardians: [{
        firstName: String,
        lastName: String,
        identificationNumber: String,
        phone: String,
        email: String,
        maritalStatus: {
            type: String,
            enum: ['SINGLE','MARIED','DIVORCED', 'RE-MARIED', null]
        },
        relationship: {
            type: String,
            enum: ['FATHER', 'MOTHER', 'GUARDIAN', null]
        }
    }],
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

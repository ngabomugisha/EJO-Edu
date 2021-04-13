const mongoose = require('mongoose')
//Head master should be the same as admin
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    role: {
        type: String,
        enum: ['SUPER-ADMIN','SCHOOL-ADMIN','TEACHER','HEAD-OF-DISPLINE','HEAD-OF-STUDIES'],
    },
    school: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'school'
    },
    phoneNumber: String,
    level: {
        type: String,
        enum: ['BACHELOR', 'DIPLOMA', 'MASTERS'], // to be provided
    },
    yearsOfExperience: Number,
    workingStatus: {
        type: String,
        enum: ['PART-TIME', 'FULL-TIME']
    },
    verificationDigits: {
        type: Number,
        default: null
    },
    resetPasswordToken: {
        type: String,
        default: null
    },
    isVerfied: {
        type: Boolean,
        default: false
    },
    passwordChanged: {
        type: Boolean,
        default: false
    }, 
    lastLogin: {
        type: Date,
        default: Date.now
    }
}, {timestamps: true});

export default mongoose.model("user", userSchema);
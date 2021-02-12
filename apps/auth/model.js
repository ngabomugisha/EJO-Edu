const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    
    role: {
        type: String,
        enum: ['SUPER-ADMIN','SCHOOL-ADMIN','TEACHER','HEAD-OF-DISPLINE','HEAD-OF-STUDIES',null],
    },
    verificationDigits: {
        type: Number,
        default: null
    },
    isVerfied: {
        type: Boolean,
        default: false
    },
    lastLogin: {
        type: Date,
        default: Date.now
    }
}, {timestamps: true});

export default mongoose.model("user", userSchema);
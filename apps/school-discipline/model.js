const mongoose = require('mongoose');

const schoolDisciplineSchema = new mongoose.Schema({
    school: {
        type: mongoose.Schema.Types.ObjectId,
            ref: 'school'
    },
    firstLevel: String,
    secondLevel: String,
    thirdLevel: String,
    forthLevel: String,
    marks: Number
}, {timestamps: true});

export default mongoose.model("schoolDiscipline", schoolDisciplineSchema);

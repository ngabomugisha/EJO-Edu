const mongoose = require('mongoose');

const villageSchema = new mongoose.Schema({
    name: String,
    cell: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'cell'
    }
}, {timestamps: true});

export default mongoose.model("village", villageSchema);

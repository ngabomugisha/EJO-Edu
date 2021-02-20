const mongoose = require('mongoose');

const cellSchema = new mongoose.Schema({
    name: String,
    sector: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'sector'
    }
}, {timestamps: true});

export default mongoose.model("cell", cellSchema);

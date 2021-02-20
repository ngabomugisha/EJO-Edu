const mongoose = require('mongoose');

const sectorSchema = new mongoose.Schema({
    name: String,
    district: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'district'
    }
}, {timestamps: true});

export default mongoose.model("sector", sectorSchema);

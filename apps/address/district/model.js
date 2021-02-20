const mongoose = require('mongoose');

const districtSchema = new mongoose.Schema({
    name: String,
    province: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'province'
    }
}, {timestamps: true});

export default mongoose.model("district", districtSchema);

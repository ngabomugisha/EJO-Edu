const mongoose = require('mongoose');

const provinceSchema = new mongoose.Schema({
    name: String
}, {timestamps: true});

export default mongoose.model("province", provinceSchema);

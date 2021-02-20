import Cell from './model'

exports.create = async (name, sector) =>{
try {
    const newCell = new Cell({
        name,
        sector
    })
    await newCell.save()
    return newCell;
} catch (error) {
    throw error; 
}
};

exports.update = async (cellId, name) => {
    try {
        return await Cell.findByIdAndUpdate(
            {_id: cellId},
            {name: name},{new: true},
            (err, success) => {
                if(err){
                    console.log(err);
                    return false;
                }
                return success;
            }
        );
    } catch (error) {
        throw error;
    }
}

exports.getAll = async () => {
    try {
        return await Cell.find()
                .then(res => {
                    return res;
                })
                .catch(err => {
                    console.log(err);
                    return false;
                })
    } catch (error) {
        throw error;
    }
}

exports.getAllSectorCells = async (sectorId) => {
    try {
        return await Cell.find({sector: sectorId})
                .then(res => {
                    return res;
                })
                .catch(err => {
                    console.log(err);
                    return false;
                })
    } catch (error) {
        throw error;
    }
}

exports.getOneCell = async (cellId) => {
    try {
        return await Cell.findById(cellId)
                .then(res => {
                    return res;
                })
                .catch(err => {
                    console.log(err);
                    return false;
                })
    } catch (error) {
        throw error;
    }
}

exports.delete = async (cellId) => {
    try {
        return await Cell.findByIdAndDelete(cellId);
    } catch (error) {
        throw error;
    }
}
import Combination from './model'

exports.create = async (name) =>{
try {
    const newCombination = new Combination({
        name
    })
    await newCombination.save()
    return newCombination;
} catch (error) {
    throw error; 
}
};

exports.update = async (combinationId, name) => {
    try {
        return await Combination.findByIdAndUpdate(
            {_id: combinationId},
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

exports.getAllCombinations = async () => {
    try {
        return await Combination.find()
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

exports.getOneCombination = async (combinationId) => {
    try {
        return await Combination.findById(combinationId)
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

exports.delete = async (combinationId) => {
    try {
        return await Combination.findByIdAndDelete(combinationId);
    } catch (error) {
        throw error;
    }
}
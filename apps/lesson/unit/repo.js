import Unit from './model'

exports.create = async (name, subTopic,  numberOfPeriods, keyCompetency, content, activities) =>{
try {
    const newUnit = new Unit({
                name,
                subTopic,
                numberOfPeriods,
                keyCompetency,
                content,
                activities
    })
    await newUnit.save()
    return newUnit;
} catch (error) {
    throw error; 
}
};

exports.update = async (unitId, name, numberOfperiods, keyCompetency) => {
    try {
        return await Unit.findByIdAndUpdate(
            {_id: unitId},
            {name, numberOfperiods, keyCompetency},{new: true},
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

exports.getAllSubTopicUnits = async (subTopicId) => {
    try {
        return await Unit.find({subTopic: subTopicId})
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

exports.getOneUnit = async (unitId) => {
    try {
        return await Unit.findById(unitId)
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

exports.delete = async (unitId) => {
    try {
        return await Unit.findByIdAndDelete(unitId);
    } catch (error) {
        throw error;
    }
}
import Unit from './model'

exports.create = async (name, subTopic, topic, numberOfPeriods, keyCompetency, content, activities) => {
    try {
        const newUnit = new Unit({
            name,
            subTopic,
            topic, 
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
        return await Unit.findByIdAndUpdate({
                _id: unitId
            }, {
                name,
                numberOfperiods,
                keyCompetency
            }, {
                new: true
            },
            (err, success) => {
                if (err) {
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

exports.addFile = async (unitId,topic, location, file, fileType) => {
    try {
        let selector = null
        let saveLocation = null
        if(location === "activities"){
            selector = {
                activities: {
                    $elemMatch: {
                        activity: topic
                    }
                }
            }
            saveLocation = {
                "activities.$.files": {
                    file,
                    fileType
                }
            }
        }
        else{
            const temp1 = "content."+ location
            selector = {
                [temp1]: {
                    $elemMatch: {
                        topic: topic
                    }
                }
            }
            console.log(selector)
            const temp2 = "content." + location +".$.files" 
            saveLocation = {
                [temp2]: {
                    file,
                    fileType
                }
            }
        }
        return await Unit.findOneAndUpdate({
                _id: unitId,
                ...selector
            }, 
            {
               $push: {
                ...saveLocation
               }
            }, 
            {
                new: true
            },
            // (err, success) => {
            //     if (err) {
            //         console.log(err);
            //         return false;
            //     }
            //     return success;
            // }
        );
    } catch (error) {
        throw error;
    }
}

exports.getAllSubTopicUnits = async (subTopicId) => {
    try {
        return await Unit.find({
                subTopic: subTopicId
            })
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

exports.getAllTopicUnits = async (topicId) => {
    try {
        return await Unit.find({
                topic: topicId
            })
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
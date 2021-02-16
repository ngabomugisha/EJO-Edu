import SubTopic from './model'

exports.create = async (name, topic) =>{
try {
    const newSubTopic = new SubTopic({
        name,
        topic
    })
    await newSubTopic.save()
    return newSubTopic;
} catch (error) {
    throw error; 
}
};

exports.update = async (subTopicId, name) => {
    try {
        return await SubTopic.findByIdAndUpdate(
            {_id: subTopicId},
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

exports.getAllTopicSubTopics = async (topicId) => {
    try {
        return await SubTopic.find({topic: topicId})
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

exports.getOneSubTopic = async (subTopicId) => {
    try {
        return await SubTopic.findById(subTopicId)
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

exports.delete = async (subTopicId) => {
    try {
        return await SubTopic.findByIdAndDelete(subTopicId);
    } catch (error) {
        throw error;
    }
}
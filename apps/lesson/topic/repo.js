import Topic from './model'

exports.create = async (name, course) =>{
try {
    const newTopic = new Topic({
        name,
        course
    })
    await newTopic.save()
    return newTopic;
} catch (error) {
    throw error; 
}
};

exports.update = async (topicId, name) => {
    try {
        return await Topic.findByIdAndUpdate(
            {_id: topicId},
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

exports.getAllCourseTopics = async (courseId) => {
    try {
        return await Topic.find({course: courseId})
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

exports.getOneTopic = async (topicId) => {
    try {
        return await Topic.findById(topicId)
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

exports.delete = async (topicId) => {
    try {
        return await Topic.findByIdAndDelete(topicId);
    } catch (error) {
        throw error;
    }
}
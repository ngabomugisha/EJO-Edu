import Course from './model'

exports.create = async (name) =>{
try {
    const newCourse = new Course({
        name
    })
    await newCourse.save()
    return newCourse;
} catch (error) {
    throw error; 
}
};

exports.update = async (courseId, name) => {
    try {
        return await Course.findByIdAndUpdate(
            {_id: courseId},
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

exports.getAllCourses = async () => {
    try {
        return await Course.find()
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

exports.getOneCourse = async (courseId) => {
    try {
        return await Course.findById(courseId)
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

exports.delete = async (courseId) => {
    try {
        return await Course.findByIdAndDelete(courseId);
    } catch (error) {
        throw error;
    }
}
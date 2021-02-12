import Plan from './model'

exports.create = async (name, unit) =>{
try {
    const newPlan = new Plan({
        name,
        unit,
        course
    })
    await newPlan.save()
    return newPlan;
} catch (error) {
    throw error; 
}
};

exports.update = async (planId, name) => {
    try {
        return await Plan.findByIdAndUpdate(
            {_id: planId},
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

exports.getAllCoursePlan = async (courseId) => {
    try {
        return await Plan.find({course: courseId})
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

exports.getOnePlan = async (planId) => {
    try {
        return await Plan.findById(planId)
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

exports.delete = async (planId) => {
    try {
        return await Plan.findByIdAndDelete(planId);
    } catch (error) {
        throw error;
    }
}
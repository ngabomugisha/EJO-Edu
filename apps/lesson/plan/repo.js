import Plan from './model'

exports.create = async (
    teacher,
    school,
    unit,
    unitPlanId,
    subject,
    keyUnitCompetency,
    lessonNumber,
    lessonName,
    knowledge,
    skills,
    attitudesAndValues,
    activities,
    teachingTechniques,
    time
) => {
    try {
        const newPlan = new Plan({
            teacher,
            school,
            unit,
            unitPlanId,
            subject,
            keyUnitCompetency,
            lessonNumber,
            lessonName,
            knowledge,
            skills,
            attitudesAndValues,
            activities,
            teachingTechniques,
            time
        })
        await newPlan.save()
        return newPlan;
    } catch (error) {
        throw error;
    }
};

exports.update = async (
    planId,
    teacher,
    school,
    unit,
    unitPlanId,
    subject,
    keyUnitCompetency,
    lessonNumber,
    lessonName,
    knowledge,
    skills,
    attitudesAndValues,
    activities,
    teachingTechniques,
    time
) => {
    try {
        return await Plan.findByIdAndUpdate({
                _id: planId
            }, {
                $set: {
                    teacher,
                    school,
                    unit,
                    unitPlanId,
                    subject,
                    keyUnitCompetency,
                    lessonNumber,
                    lessonName,
                    knowledge,
                    skills,
                    attitudesAndValues,
                    activities,
                    teachingTechniques,
                    time
                }
            }, {
                upsert: true,
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

exports.evaluate = async (
    planId,
    studentSelfAssessment,
    teacherSelfAssessment
) => {
    try {
        return await Plan.findByIdAndUpdate({
                _id: planId
            }, {
                $set: {
                    studentSelfAssessment,
                    teacherSelfAssessment
                }
            }, {
                upsert: true,
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

exports.getAllSubjectPlan = async (subjectId) => {
    try {
        return await Plan.find({
                subject: subjectId
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

exports.getAllUnitPlan = async (unitId) => {
    try {
        return await Plan.find({
                unit: unitId
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

exports.getTopicDetails = async (unitId, topic, type, teacher) => {
    try {
        return await Plan.find({
                unit: unitId,
                teacher: teacher,
                [type]: {
                    $elemMatch: {
                        topic: topic
                    }
                },

            }).sort({
                createdAt: -1
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

exports.delete = async (planId) => {
    try {
        return await Plan.findByIdAndDelete(planId);
    } catch (error) {
        throw error;
    }
}
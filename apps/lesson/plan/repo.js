import Plan from './model'

exports.create = async (
    teacher,
    school,
    name,
    unit,
    subject,
    keyUnitCompetency,
    lessonNumber,
    lessonName,
    knowledge,
    skills,
    attitudesAndValues,
    instructionalMaterial,
    otherMaterialsAndReferences,
    activities,
    teachingTechniques,
    studentSelfAssessment,
    teacherSelfAssessment,
    time
) => {
    try {
        const newPlan = new Plan({
            teacher,
            school,
            name,
            unit,
            subject,
            keyUnitCompetency,
            lessonNumber,
            lessonName,
            knowledge,
            skills,
            attitudesAndValues,
            instructionalMaterial,
            otherMaterialsAndReferences,
            activities,
            teachingTechniques,
            studentSelfAssessment,
            teacherSelfAssessment,
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
    name,
    unit,
    subject,
    keyUnitCompetency,
    lessonNumber,
    lessonName,
    knowledge,
    skills,
    attitudesAndValues,
    instructionalMaterial,
    otherMaterialsAndReferences,
    activities,
    teachingTechniques,
    studentSelfAssessment,
    teacherSelfAssessment,
    time
) => {
    try {
        return await Plan.findByIdAndUpdate({
                _id: planId
            }, {
                $set: {
                    name,
                    unit,
                    subject,
                    keyUnitCompetency,
                    lessonNumber,
                    lessonName,
                    knowledge,
                    skills,
                    attitudesAndValues,
                    instructionalMaterial,
                    otherMaterialsAndReferences,
                    activities,
                    teachingTechniques,
                    studentSelfAssessment,
                    teacherSelfAssessment,
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
                    teacherSelfAssessment,
                    "time.realEnd": Date.now()
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
                [type] : {
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
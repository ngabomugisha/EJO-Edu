import UnitPlan from './model'

exports.create = async (
    unit,
    time,
    subject,
    teacher,
    subTopic,
    name,
    numberOfPeriods,
    keyCompetency,
    content,
    activities
) => {
    try {
        const newUnitPlan = new UnitPlan({
            unit,
            time,
            subject,
            teacher,
            subTopic,
            name,
            numberOfPeriods,
            keyCompetency,
            content,
            activities
        })
        await newUnitPlan.save()
        return newUnitPlan;
    } catch (error) {
        throw error;
    }
};

exports.update = async (
    unitPlanId,
    time,
    name,
    numberOfPeriods,
    keyCompetency,
    content,
    activities
) => {
    try {
        return await UnitPlan.findByIdAndUpdate({
                _id: unitPlanId
            }, {
                time,
                name,
                numberOfPeriods,
                keyCompetency,
                content,
                activities
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

exports.updateOneTopic = async (
    unitPlanId,
    type,
    topics,
    date,
    bloomTaxonomy,
    standardCriteriaPerfomance
) => {
    try {
        const  numberOftimesTaught= type +".$.numberOftimesTaught"
        const  lastTaught = type +".$.lastTaught"
        const  bloomTaxonomyPath = type +".$.bloomTaxonomy"
        const  standardCriteriaPerfomancePath= type +".$.standardCriteriaPerfomance"
        topics.map(async (item) => {
            console.log(unitPlanId, item)
            const data = await UnitPlan.findOneAndUpdate({
                    _id: unitPlanId,
                    [type]: {
                            $elemMatch: {
                                topic: item.topic
                            }
                        }
                }
                , {
                    $set: {
                        
                        [numberOftimesTaught]: 1,
                        [lastTaught]: date,
                        [bloomTaxonomyPath]: bloomTaxonomy,
                        [standardCriteriaPerfomancePath]: standardCriteriaPerfomance

                    }
                }
                //  {
                //     new: true
                // },
                // (err, success) => {
                //     if (err) {
                //         console.log(err);
                //         return false;
                //     }
                //     return true;
                // }
            );
        })
    } catch (error) {
        throw error;
    }
}

exports.updateActivities = async (
    unitPlanId,
    activities,
    date,
    bloomTaxonomy,
    standardCriteriaPerfomance
) => {
    try {
        
        const activitiesArr = []
        activitiesArr.push(...activities.introduction.activities)
        activitiesArr.push(...activities.development.activities)
        activitiesArr.push(...activities.conclusion.activities)

        activitiesArr.map(async (item) => {
            console.log(unitPlanId, item)
            const data = await UnitPlan.findOneAndUpdate({
                    _id: unitPlanId,
                    activities: {
                            $elemMatch: {
                                activity: item.activity
                            }
                        }
                }
                , {
                    $set: {
                        "activities.$.numberOftimesTaught": 1,
                        "activities.$.lastTaught": date,
                        "activities.$.bloomTaxonomy": bloomTaxonomy,
                        "activities.$.standardCriteriaPerfomance": standardCriteriaPerfomance
                    }
                }
                //  {
                //     new: true
                // },
                // (err, success) => {
                //     if (err) {
                //         console.log(err);
                //         return false;
                //     }
                //     return true;
                // }
            );
            // console.log(data)
        })
    } catch (error) {
        throw error;
    }
}

exports.getSubjectUnitPlans = async (subjectId, teacher) => {
    try {
        return await UnitPlan.find({
                subject: subjectId,
                teacher: teacher
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

exports.getSubTopicUnitPlans = async (subTopicId, teacher) => {
    try {
        return await UnitPlan.find({
                subTopic: subTopicId,
                teacher: teacher
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

exports.getOneUnitPlan = async (unit, teacher) => {
    try {
        return await UnitPlan.findOne({
                unit,
                teacher
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

exports.delete = async (unitPlanId) => {
    try {
        return await UnitPlan.findByIdAndDelete(unitPlanId);
    } catch (error) {
        throw error;
    }
}
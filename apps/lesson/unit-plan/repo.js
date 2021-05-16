import UnitPlan from './model'

exports.create = async (
    unit,
    time,
    subject,
    teacher,
    subTopic,
    topic,
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
            topic,
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
                    $inc: {
                        [numberOftimesTaught]: 1,
                    },
                    $set: {
                        [lastTaught]: date,
                        [bloomTaxonomyPath]: item.bloomTaxonomy,
                        [standardCriteriaPerfomancePath]: item.standardCriteriaPerfomance

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
            console.log(item, JSON.stringify(data.content))
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
        activitiesArr.push(...activities?.introduction?.content?.activities)
        activitiesArr.push(...activities?.development?.content?.activities)
        activitiesArr.push(...activities?.conclusion?.content?.activities)

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
                    $inc: {
                        'activities.$.numberOftimesTaught': 1,
                    },
                    $set: {
                        
                        "activities.$.lastTaught": date,
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

exports.getTopicUnitPlans = async (topicId, teacher) => {
    try {
        return await UnitPlan.find({
                topic: topicId,
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

exports.getTopicListUnitPlans = async (topicsList, teacher) => {
    try {
        return await UnitPlan.find({
                topic: {$in: topicsList},
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
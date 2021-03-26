import Plan from './repo'
import Response from '../../../utils/Responses';
import UnitPlan from '../unit-plan/repo'

exports.create = async (req, res) => {
    try {
        const {
            unit,
            assignedClass,
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

        } = req.body;
        const teacher = req.user._id
        const school = req.user.school
        // console.log(JSON.stringify(req.body))
        Plan.create(
                teacher,
                school,
                unit,
                assignedClass,
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
            )
            .then(async (results) => {
                // await UnitPlan.updateOneTopic(unitPlanId, "content.knowledgeAndUnderstanding", knowledge, time.day );
                // await UnitPlan.updateOneTopic(unitPlanId, "content.skills", skills, time.day );
                // await UnitPlan.updateOneTopic(unitPlanId, "content.attitudesAndValues", attitudesAndValues, time.day );

                //activities
                // await UnitPlan.updateActivities(unitPlanId, activities, time.day);

                Response.Success(res, 200, "created successfully", results);
            })
            .catch(err => {
                console.log(err);
                Response.InternalServerError(res, "We are having issues! please try again soon");
            });

    } catch (error) {
        console.log(error);
        Response.InternalServerError(res, "We are having issues! please try again soon");
    }

}

exports.update = async (req, res) => {
    try {
        const planId = req.params.planId;
        const {
            teacher,
            school,
            unit,
            assignedClass,
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
        } = req.body;
        Plan.update(
                planId,
                teacher,
                school,
                unit,
                assignedClass,
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
            )
            .then(results => {
                Response.Success(res, 200, "updated successfully", results);
            })
            .catch(err => {
                console.log(err);
                Response.InternalServerError(res, "We are having issues! please try again soon");
            });

    } catch (error) {
        console.log(error);
        Response.InternalServerError(res, "We are having issues! please try again soon");
    }

}

exports.evaluate = async (req, res) => {
    try {
        const planId = req.params.planId;
        const {
            studentSelfAssessment,
            teacherSelfAssessment
        } = req.body;
        Plan.evaluate(
                planId,
                studentSelfAssessment,
                teacherSelfAssessment
            )
            .then(results => {
                Response.Success(res, 200, "evaluated successfully", results);
            })
            .catch(err => {
                console.log(err);
                Response.InternalServerError(res, "We are having issues! please try again soon");
            });

    } catch (error) {
        console.log(error);
        Response.InternalServerError(res, "We are having issues! please try again soon");
    }

}

exports.getSubjectPlan = async (req, res) => {
    try {

        const subjectId = req.params.subjectId;
        Plan.getAllSubjectPlan(subjectId)
            .then(results => {
                Response.Success(res, 200, "queried successfully", results);
            })
            .catch(err => {
                console.log(err);
                Response.InternalServerError(res, "We are having issues! please try again soon");
            });

    } catch (error) {
        console.log(error);
        Response.InternalServerError(res, "We are having issues! please try again soon");
    }

}

exports.getUnitPlan = async (req, res) => {
    try {

        const unitId = req.params.unitId;
        Plan.getAllUnitPlan(unitId)
            .then(results => {
                Response.Success(res, 200, "queried successfully", results);
            })
            .catch(err => {
                console.log(err);
                Response.InternalServerError(res, "We are having issues! please try again soon");
            });

    } catch (error) {
        console.log(error);
        Response.InternalServerError(res, "We are having issues! please try again soon");
    }

}

exports.getOnePlan = async (req, res) => {
    try {
        const planId = req.params.planId;

        Plan.getOnePlan(planId)
            .then(results => {
                Response.Success(res, 200, "queried successfully", results);
            })
            .catch(err => {
                console.log(err);
                Response.InternalServerError(res, "We are having issues! please try again soon");
            });

    } catch (error) {
        console.log(error);
        Response.InternalServerError(res, "We are having issues! please try again soon");
    }

}

exports.getTopicDetails = async (req, res) => {
    try {

        const unitId = req.params.unitId;
        const {
            topic,
            type
        } = req.body
        const teacher = req.user._id
        Plan.getTopicDetails(unitId, topic, type, teacher)
            .then(results => {
                if (results.length > 0) {

                    const result = {
                        numberOftimes: results.length
                    }
                    result.latest = {
                        ...results[0].time,
                        createdAt: results[0].createdAt
                    }
                    Response.Success(res, 200, "queried successfully", result);
                } else {
                    Response.Success(res, 200, "queried successfully", null);
                }
            })
            .catch(err => {
                console.log(err);
                Response.InternalServerError(res, "We are having issues! please try again soon");
            });

    } catch (error) {
        console.log(error);
        Response.InternalServerError(res, "We are having issues! please try again soon");
    }

}

exports.delete = async (req, res) => {
    try {
        const planId = req.params.planId;

        Plan.delete(planId)
            .then(results => {
                Response.Success(res, 200, "deleted successfully", results);
            })
            .catch(err => {
                console.log(err);
                Response.InternalServerError(res, "We are having issues! please try again soon");
            });

    } catch (error) {
        console.log(error);
        Response.InternalServerError(res, "We are having issues! please try again soon");
    }

}

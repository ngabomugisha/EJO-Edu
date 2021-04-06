import UnitPlan from './repo'
import Response from '../../../utils/Responses';
import Unit from '../unit/repo';

exports.create = async (req, res) => {
    try {
        const {
            unit,
            time,
            subject
        } = req.body;
        const teacher = req.user._id
        const unitDetails = await Unit.getOneUnit(unit)
        if (!unitDetails) {
            return Response.validationError(res, "unit not found");
        }

        UnitPlan.create(
                unit,
                time,
                subject,
                teacher,
                unitDetails.subTopic,
                unitDetails.topic,
                unitDetails.name,
                unitDetails.numberOfPeriods,
                unitDetails.keyCompetency,
                unitDetails.content,
                unitDetails.activities
            )
            .then(results => {
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
        const unitPlanId = req.params.unitPlanId;
        const {
            time,
            name,
            numberOfPeriods,
            keyCompetency,
            content,
            activities
        } = req.body;
        UnitPlan.update(
                unitPlanId,
                time,
                name,
                numberOfPeriods,
                keyCompetency,
                content,
                activities)
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

exports.getSubjectUnitPlans = async (req, res) => {
    try {

        const teacher = req.user._id
        const subjectId = req.params.subjectId;
        UnitPlan.getSubjectUnitPlans(subjectId, teacher)
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

exports.getSubTopicUnitPlans = async (req, res) => {
    try {

        const teacher = req.user._id
        const subTopicId = req.params.subTopicId;
        UnitPlan.getSubTopicUnitPlans(subTopicId, teacher)
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

exports.getTopicUnitPlans = async (req, res) => {
    try {

        const teacher = req.user._id
        const topicId = req.params.topicId;
        UnitPlan.getTopicUnitPlans(topicId, teacher)
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

exports.getTopicListUnitPlans = async (req, res) => {
    try {

        const teacher = req.user._id
        const topicsList = req.body.topicsList
        UnitPlan.getTopicListUnitPlans(topicsList, teacher)
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

exports.getOneUnitPlan = async (req, res) => {
    try {
        const unitId = req.params.unitId;
        const teacher = req.user._id
        UnitPlan.getOneUnitPlan(unitId, teacher)
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

exports.delete = async (req, res) => {
    try {
        const unitPlanId = req.params.unitPlanId;

        UnitPlan.delete(unitPlanId)
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
import Plan from './repo'
import Response from '../../../utils/Responses';

exports.create = async (req, res) => {
    try {
        const {
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

        } = req.body;
        const teacher = req.user._id
        const school = req.user.school
        Plan.create(
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
        const planId = req.params.planId;
        const {
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
        } = req.body;
        Plan.update(
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
        Plan.getAllSubjectPlan(unitId)
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
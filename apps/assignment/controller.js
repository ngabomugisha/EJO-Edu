import Assignment from './repo'
import Response from '../../utils/Responses';

exports.create = async (req, res) => {
    try {
        const {
            title,
            subject,
            assignedClass,
            units,
            questions,
            duration,
            starts,
            ends,
            assignmentSetting,
            assignmentType,
            testMethod
        } = req.body;
        const teacher = req.user._id
        const school = req.user.school
        Assignment.create(
                teacher,
                school,
                title,
                subject,
                assignedClass,
                units,
                questions,
                duration,
                starts,
                ends,
                assignmentSetting,
                assignmentType,
                testMethod
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
        const assignmentId = req.params.assignmentId;
        const {
            title,
            questions,
            duration,
            starts,
            ends,
            assignmentSetting,
            assignmentType,
            testMethod
        } = req.body;
        Assignment.update(
            assignmentId,
            title,
            questions,
            duration,
            starts,
            ends,
            assignmentSetting,
            assignmentType,
            testMethod
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

exports.getUnitAssignments = async (req, res) => {
    try {
        const unitId = req.params.unitId;
        
        const school = req.user.school
        Assignment.getUnitAssignments(unitId, school)
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

exports.getSubjectAssignments = async (req, res) => {
    try {
        const subjectId = req.params.subjectId;
        const school = req.user.school
        Assignment.getSubjectAssignments(subjectId, school)
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

exports.getOneAssignment = async (req, res) => {
    try {
        const assignmentId = req.params.assignmentId;

        Assignment.getOneAssignment(assignmentId)
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
        const assignmentId = req.params.assignmentId;

        Assignment.delete(assignmentId)
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
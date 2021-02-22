import QuestionBank from './repo'
import Response from '../../utils/Responses';

exports.create = async (req, res) => {
    try {
        const {
            subject,
            unit,
            difficultLevel,
            questionsObjective,
            question,
            questionType,
            possibleAnswer,
            answer
        } = req.body;
        const author = req.user._id
        const school = req.user.school
        QuestionBank.create(
                author,
                school,
                subject,
                unit,
                difficultLevel,
                questionsObjective,
                question,
                questionType,
                possibleAnswer,
                answer
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
        const questionBankId = req.params.questionBankId;
        const {
            difficultLevel,
            questionsObjective,
            question,
            questionType,
            possibleAnswer,
            answer
        } = req.body;
        QuestionBank.update(
                questionBankId,
                difficultLevel,
                questionsObjective,
                question,
                questionType,
                possibleAnswer,
                answer
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

exports.getUnitQuestionBank = async (req, res) => {
    try {
        const unitId = req.params.unitId;
        QuestionBank.getUnitQuestionBank(unitId)
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

exports.getSubjectQuestionBank = async (req, res) => {
    try {
        const subjectId = req.params.subjectId;
        QuestionBank.getSubjectQuestionBank(subjectId)
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

exports.getOneQuestionBank = async (req, res) => {
    try {
        const questionBankId = req.params.questionBankId;

        QuestionBank.getOneQuestionBank(questionBankId)
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
        const questionBankId = req.params.questionBankId;

        QuestionBank.delete(questionBankId)
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
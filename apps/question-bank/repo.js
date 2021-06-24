import QuestionBank from './model'

exports.create = async (
    author,
    school,
    subject,
    unit,
    difficultLevel,
    questionsObjective,
    question,
    questionType,
    possibleAnswer,
    matchingAnswer,
    answer
) => {
    try {
        const newQuestionBank = new QuestionBank({
            author,
            school,
            subject,
            unit,
            difficultLevel,
            questionsObjective,
            question,
            questionType,
            possibleAnswer,
            matchingAnswer,
            answer
        })
        await newQuestionBank.save()
        return newQuestionBank;
    } catch (error) {
        throw error;
    }
};

exports.update = async (
    questionBankId,
    difficultLevel,
    questionsObjective,
    question,
    questionType,
    possibleAnswer,
    matchingAnswer,
    answer
) => {
    try {
        return await QuestionBank.findByIdAndUpdate({
                _id: questionBankId
            }, {
                difficultLevel,
                questionsObjective,
                question,
                questionType,
                possibleAnswer,
                matchingAnswer,
                answer
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

exports.getUnitQuestionBank = async (unitId) => {
    try {
        return await QuestionBank.find({
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

exports.getUnitsListQuestionBank = async (units) => {
    try {
        return await QuestionBank.find({
                unit: {$in: units}
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

exports.getSubjectQuestionBank = async (subjectId) => {
    try {
        return await QuestionBank.find({
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

exports.getOneQuestionBank = async (questionBankId) => {
    try {
        return await QuestionBank.findById(questionBankId)
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

exports.delete = async (questionBankId) => {
    try {
        return await QuestionBank.findByIdAndDelete(questionBankId);
    } catch (error) {
        throw error;
    }
}
import QuestionBank from './model'

exports.create = async (firstName, lastName, school, questionBankClass) =>{
try {
    const newQuestionBank = new QuestionBank({
        firstName,
        lastName,
        school,
        class: questionBankClass
    })
    await newQuestionBank.save()
    return newQuestionBank;
} catch (error) {
    throw error; 
}
};

exports.update = async (questionBankId, firstName, lastName, questionBankClass) => {
    try {
        return await QuestionBank.findByIdAndUpdate(
            {_id: questionBankId},
            {firstName, lastName, class: questionBankClass},{new: true},
            (err, success) => {
                if(err){
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

exports.getAllClassQuestionBanks = async (classId) => {
    try {
        return await QuestionBank.find({class: classId})
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

exports.getAllSchoolQuestionBanks = async (schoolId) => {
    try {
        return await QuestionBank.find({school: schoolId})
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
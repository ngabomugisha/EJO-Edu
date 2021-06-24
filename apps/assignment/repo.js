import {Assignment, AssignmentQuestion} from './model'

exports.create = async (
    teacher,
    school,
    title,
    subject,
    assignedClass,
    unit,
    questions,
    duration,
    starts,
    ends,
    assignmentSetting,
    assignmentType,
    testMethod
) => {
    const processedQuestions = []
    try {
        await Promise.all(
            questions.map(async value => {
                const question = new AssignmentQuestion({...value})
                await question.save()
                processedQuestions.push(question._id)
            })

         )
        const newAssignment = new Assignment({
            teacher,
            school,
            title,
            subject,
            class: assignedClass,
            unit,
            questions: processedQuestions,
            duration,
            starts,
            ends,
            assignmentSetting,
            assignmentType,
            testMethod
        })
        await newAssignment.save()
        return newAssignment;
    } catch (error) {
        throw error;
    }
};

exports.update = async (
    assignmentId,
    title,
    questions,
    duration,
    starts,
    ends,
    assignmentSetting,
    assignmentType,
    testMethod
) => {
    try {
        return await Assignment.findByIdAndUpdate({
                _id: assignmentId
            }, {
                title,
                questions,
                duration,
                starts,
                ends,
                assignmentSetting,
                assignmentType,
                testMethod
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

exports.getUnitAssignments = async (unitId, school) => {
    try {
        return await Assignment.find({
                unit: unitId, school
            })
            .populate({
                path: 'questions'
            })
            .exec()
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

exports.getSubjectAssignments = async (subjectId, school) => {
    try {
        return await Assignment.find({
                subject: subjectId, school
            })
            .populate({
                path: 'questions'
            })
            .exec()
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

exports.getOneAssignment = async (assignmentId) => {
    try {
        return await Assignment.findById(assignmentId)
            .populate({
                path: 'questions'
            })
            .exec()
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

exports.delete = async (assignmentId) => {
    try {
        return await Assignment.findByIdAndDelete(assignmentId);
    } catch (error) {
        throw error;
    }
}
import Participation from './model'
exports.create = async (
    assignedClass,
    teacher,
    subject,
    students
) => {

    try {
        const newParticipation = new Participation({
            class: assignedClass,
            teacher,
            subject,
            students
        })
        await newParticipation.save()
        return newParticipation;
    } catch (error) {
        throw error;
    }
};

exports.addStudentParticipation = async (
    participationId,
    studentId,
            positive,
            firstLevel,
            secondLevel,
            thirdLevel
) => {
    try {
        return await Participation.findOneAndUpdate({
            _id: participationId,
            students: {$elemMatch: {student : "602c23ddbd2ce42e800e0f37"}}
                
            }, {
                $set: {
                    'students.$.positive' : positive,
                    'students.$.firstLevel' : firstLevel,
                    'students.$.secondLevel' : secondLevel,
                    'students.$.thirdLevel' : thirdLevel,
                    'students.$.time' : Date.now()
                }
            },
            {
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

exports.getOneParticipation = async (participationId) => {
    try {
        return await Participation.findById(participationId)
            .populate({
                path: 'students.student'
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

exports.delete = async (participationId) => {
    try {
        return await Participation.findByIdAndDelete(participationId);
    } catch (error) {
        throw error;
    }
}
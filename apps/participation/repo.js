import Participation from './model'
import Student from '../student/repo'
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
    students,
    positive,
    firstLevel,
    secondLevel,
    thirdLevel
) => {
    try {
        const participation = {
            positive,
            firstLevel,
            secondLevel,
            thirdLevel,
            time: Date.now()
        }
        let participationList = []
        await Promise.all(students.map( async student => {
            participationList = await Participation.findOneAndUpdate({
                _id: participationId,
                students: {
                    $elemMatch: {
                        student: student._id
                    }
                }

            }, {
                $push: {
                    "students.$.participation": participation
                }
            }, {
                new: true
            })
            .populate({
                path: 'students.student'
            })
            .exec();
        }))
        let checkAllEqual = true
        const n = participationList.cycleNumber
        await Promise.all(participationList.students.map(async student => {
            if(student.participation.length > participationList.cycleNumber){
                participationList.cycleNumber = student.participation.length + 1
                await Participation.findByIdAndUpdate(participationList._id, {cycleNumber: student.participation.length + 1})
            }
            if(n != student.participation.length){
                checkAllEqual = false
            }
        }))
        if(checkAllEqual){
            participationList.cycleNumber = participationList.cycleNumber + 1
            await Participation.findByIdAndUpdate(participationList._id, {cycleNumber: participationList.cycleNumber + 1})
            return {participationList, cycleFinished: true}
        }
        return {participationList}
    } catch (error) {
        throw error;
    }
}

exports.getClassParticipation = async (classId, teacher) => {
    try {

        const participation = await Participation.findOne({
                class: classId,
                teacher: teacher
            })
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
        if (!participation) {
            const rawStudents = await Student.getAllClassStudents(classId);
            const students = [];
            rawStudents.map(student => {
                students.push({
                    student: student._id
                })
            })

            const newParticipation = new Participation({
                class: classId,
                teacher,
                students
            })
            await newParticipation.save()
            const savedParticipation = await Participation.findById(newParticipation._id)
            .populate({
                path: 'students.student'
            })
            .exec()
            return savedParticipation;

        }
        return participation
        
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
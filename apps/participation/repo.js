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
    record
) => {
    try {
        const participation = {
            positive,
            firstLevel,
            record,
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
                path: 'students.student students.comments.author'
            })
            .exec();
        }))
        
        let smallest = participationList.students[0].participation.length
        await Promise.all(participationList.students.map(async student => {
            if(smallest > student.participation.length){
                smallest = student.participation.length
            }
        }))
        
        if(smallest > participationList.cycleNumber){
            participationList.cycleNumber = smallest + 1
            await Participation.findByIdAndUpdate(participationList._id, {cycleNumber: smallest + 1})
            return {participationList, cycleFinished: true}
        }
        return {participationList}
    } catch (error) {
        throw error;
    }
}

exports.addComment = async (
    participationId,
            student,
            comment,
            author
) => {
    try {
        const record = {
            student,
            comment,
            author,
            time: Date.now()
        }
        return await Participation.findOneAndUpdate({
                _id: participationId,
                students: {
                    $elemMatch: {
                        student: student
                    }
                }

            }, {
                $push: {
                    "students.$.comments": record
                }
            }, {
                new: true
            })
            .populate({
                path: 'students.student students.comments.author'
            })
            .exec();
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
                path: 'students.student students.comments.author'
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